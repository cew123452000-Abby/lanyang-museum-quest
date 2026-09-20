import {firebaseConfig,firebaseOptions} from './firebase-config.js';

const SDK='https://www.gstatic.com/firebasejs/12.19.0';
const SESSION_KEY='lanyangFirebaseSessionId';
let writeProgress=()=>{};

function sessionId(){
  let id=localStorage.getItem(SESSION_KEY);
  if(!id){id=crypto.randomUUID();localStorage.setItem(SESSION_KEY,id)}
  return id
}

function snapshot(source){
  const completed=Array.isArray(source.completed)?source.completed:[];
  const scenes=source.rpg?.scenes||{};
  return {
    ownerUid:null,
    sessionId:sessionId(),
    nickname:String(source.team||'未命名小隊').slice(0,40),
    level:source.level==='challenger'?'challenger':'explorer',
    startedAt:source.startedAt?new Date(source.startedAt):new Date(),
    elapsedSeconds:source.startedAt?Math.max(0,Math.round((Date.now()-source.startedAt)/1000)):0,
    completedCount:completed.length,
    completedQuests:completed,
    currentQuest:Number.isInteger(source.current)?source.current:0,
    hints:Number(source.hints)||0,
    xp:Number(source.rpg?.xp)||0,
    focus:Number(source.rpg?.focus)||5,
    status:completed.length===6?'completed':'active',
    questProgress:Array.from({length:6},(_,quest)=>({
      quest,
      completed:completed.includes(quest),
      cluesFound:Array.isArray(scenes[quest]?.found)?scenes[quest].found.length:0,
      decoysClicked:Array.isArray(scenes[quest]?.decoys)?scenes[quest].decoys.length:0
    }))
  }
}

async function initialize(){
  if(!firebaseConfig?.projectId)return;
  try{
    const [{initializeApp},{getAuth,signInAnonymously},{getFirestore,doc,setDoc,serverTimestamp}]=await Promise.all([
      import(`${SDK}/firebase-app.js`),
      import(`${SDK}/firebase-auth.js`),
      import(`${SDK}/firebase-firestore.js`)
    ]);
    const app=initializeApp(firebaseConfig),auth=getAuth(app),db=getFirestore(app);
    if(firebaseOptions.appCheckSiteKey){const {initializeAppCheck,ReCaptchaV3Provider}=await import(`${SDK}/firebase-app-check.js`);initializeAppCheck(app,{provider:new ReCaptchaV3Provider(firebaseOptions.appCheckSiteKey),isTokenAutoRefreshEnabled:true})}
    const credential=await signInAnonymously(auth),uid=credential.user.uid;
    let timer;
    writeProgress=source=>{
      clearTimeout(timer);
      timer=setTimeout(async()=>{
        const data=snapshot(source);data.ownerUid=uid;data.updatedAt=serverTimestamp();
        try{await setDoc(doc(db,'sessions',`${uid}_${data.sessionId}`),data,{merge:true})}catch(error){console.warn('Firebase progress sync paused:',error.code||error.message)}
      },500)
    };
    try{const saved=JSON.parse(localStorage.getItem('lanyangQuest')||'null');if(saved?.startedAt)writeProgress(saved)}catch(error){}
  }catch(error){console.warn('Firebase is not connected:',error.code||error.message)}
}

window.addEventListener('lanyang-progress',event=>writeProgress(event.detail));
initialize();
