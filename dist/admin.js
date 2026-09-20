import {firebaseConfig,firebaseOptions} from './firebase-config.js';

const SDK='https://www.gstatic.com/firebasejs/12.19.0';
const $=selector=>document.querySelector(selector);
let app,auth,db,sessions=[];

function fmtTime(value){const d=value?.toDate?.()||new Date(value||0);return Number.isNaN(d.getTime())?'—':new Intl.DateTimeFormat('zh-TW',{dateStyle:'short',timeStyle:'short'}).format(d)}
function fmtDuration(seconds=0){const mins=Math.round(seconds/60);return mins<60?`${mins} 分鐘`:`${Math.floor(mins/60)} 小時 ${mins%60} 分`}
function escapeHtml(value=''){return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

function render(){
  const completed=sessions.filter(x=>x.status==='completed').length;
  const avg=sessions.length?Math.round(sessions.reduce((sum,x)=>sum+(x.completedCount||0),0)/sessions.length*10)/10:0;
  const avgTime=sessions.length?Math.round(sessions.reduce((sum,x)=>sum+(x.elapsedSeconds||0),0)/sessions.length):0;
  $('#summaryGrid').innerHTML=`<article><small>紀錄小隊</small><b>${sessions.length}</b></article><article><small>完成六關</small><b>${completed}</b></article><article><small>平均完成關卡</small><b>${avg} / 6</b></article><article><small>平均使用時間</small><b>${fmtDuration(avgTime)}</b></article>`;
  $('#sessionRows').innerHTML=sessions.map(row=>`<tr><td>${escapeHtml(row.nickname||'未命名')}</td><td>${row.level==='challenger'?'國中進階':'國小探索'}</td><td>${fmtTime(row.startedAt)}</td><td>${fmtDuration(row.elapsedSeconds)}</td><td><div>${row.completedCount||0} / 6</div><div class="progress-bar"><span style="width:${Math.min(100,(row.completedCount||0)/6*100)}%"></span></div></td><td>${row.hints||0}</td><td>${row.xp||0}</td><td>${fmtTime(row.updatedAt)}</td></tr>`).join('')||'<tr><td colspan="8">尚無使用紀錄。</td></tr>'
}

async function loadSessions(){
  const {collection,getDocs,limit,orderBy,query}=await import(`${SDK}/firebase-firestore.js`);
  $('#connectionStatus').textContent='正在讀取最近紀錄…';
  const result=await getDocs(query(collection(db,'sessions'),orderBy('updatedAt','desc'),limit(200)));
  sessions=result.docs.map(doc=>({id:doc.id,...doc.data()}));render();$('#connectionStatus').textContent=`已連線｜顯示最近 ${sessions.length} 筆紀錄`
}

function exportCsv(){
  const rows=[['小隊暱稱','版本','開始時間','使用時間秒','完成關卡','提示次數','XP','狀態','最後活動'],...sessions.map(x=>[x.nickname,x.level,fmtTime(x.startedAt),x.elapsedSeconds||0,x.completedCount||0,x.hints||0,x.xp||0,x.status,fmtTime(x.updatedAt)])];
  const csv='\ufeff'+rows.map(row=>row.map(v=>`"${String(v??'').replaceAll('"','""')}"`).join(',')).join('\n');
  const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));link.download=`蘭陽守望使用紀錄-${new Date().toISOString().slice(0,10)}.csv`;link.click();URL.revokeObjectURL(link.href)
}

async function createAiSummary(){
  if(!firebaseOptions.aiEnabled)return $('#aiSummary').textContent='尚未啟用 Firebase AI Logic。請先在 Firebase Console 完成 AI Logic 與 App Check 設定。';
  $('#aiSummary').textContent='正在分析匿名整體統計…';
  try{
    const {getAI,getGenerativeModel,GoogleAIBackend}=await import(`${SDK}/firebase-ai.js`);
    const aggregate={sessionCount:sessions.length,completedCount:sessions.filter(x=>x.status==='completed').length,averageCompleted:sessions.length?sessions.reduce((s,x)=>s+(x.completedCount||0),0)/sessions.length:0,questDropoff:Array.from({length:6},(_,i)=>sessions.filter(x=>(x.completedQuests||[]).includes(i)).length),averageHints:sessions.length?sessions.reduce((s,x)=>s+(x.hints||0),0)/sessions.length:0};
    const model=getGenerativeModel(getAI(app,{backend:new GoogleAIBackend()}),{model:firebaseOptions.aiModel});
    const result=await model.generateContent(`你是博物館教育分析助理。以下只有匿名整體統計，沒有學生姓名：${JSON.stringify(aggregate)}。請以臺灣繁體中文提供：1.三項學習觀察 2.可能卡關關卡 3.下次帶隊的三項具體調整。不可臆測個別學生能力。`);
    $('#aiSummary').textContent=result.response.text()
  }catch(error){$('#aiSummary').textContent=`AI 摘要暫時無法產生：${error.code||error.message}`}
}

async function initialize(){
  if(!firebaseConfig?.projectId){$('#connectionStatus').textContent='尚未連接 Firebase 專案';$('#setupPanel').hidden=false;return}
  try{
    const [{initializeApp},{getAuth,GoogleAuthProvider,onAuthStateChanged,signInWithPopup,signOut},{getFirestore,doc,getDoc}]=await Promise.all([import(`${SDK}/firebase-app.js`),import(`${SDK}/firebase-auth.js`),import(`${SDK}/firebase-firestore.js`)]);
    app=initializeApp(firebaseConfig,'lanyang-admin-dashboard');auth=getAuth(app);db=getFirestore(app);
    if(firebaseOptions.appCheckSiteKey){const {initializeAppCheck,ReCaptchaV3Provider}=await import(`${SDK}/firebase-app-check.js`);initializeAppCheck(app,{provider:new ReCaptchaV3Provider(firebaseOptions.appCheckSiteKey),isTokenAutoRefreshEnabled:true})}
    $('#signInBtn').hidden=false;
    $('#signInBtn').onclick=()=>signInWithPopup(auth,new GoogleAuthProvider());$('#signOutBtn').onclick=()=>signOut(auth);$('#refreshBtn').onclick=loadSessions;$('#csvBtn').onclick=exportCsv;$('#aiBtn').onclick=createAiSummary;
    onAuthStateChanged(auth,async user=>{
      $('#dashboard').hidden=true;$('#signOutBtn').hidden=!user;$('#signInBtn').hidden=!!user;
      if(!user)return $('#connectionStatus').textContent='Firebase 已連線，請以管理者 Google 帳號登入';
      const admin=await getDoc(doc(db,'admins',user.uid));
      if(!admin.exists()){await signOut(auth);return $('#connectionStatus').textContent='此帳號尚未列入管理者白名單'}
      $('#dashboard').hidden=false;await loadSessions()
    })
  }catch(error){$('#connectionStatus').textContent=`Firebase 連線失敗：${error.code||error.message}`}
}

initialize();
