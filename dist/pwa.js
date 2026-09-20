(()=>{
  const appButton=document.querySelector('#offlineAppBtn');
  const appLabel=document.querySelector('#offlineAppLabel');
  const dialog=document.querySelector('#offlineDialog');
  const readiness=document.querySelector('#offlineReadiness');
  const title=document.querySelector('#offlineStatusTitle');
  const detail=document.querySelector('#offlineStatusDetail');
  const icon=document.querySelector('.offline-status-icon');
  const progress=document.querySelector('#offlineProgress');
  const prepareButton=document.querySelector('#prepareOfflineBtn');
  const installButton=document.querySelector('#installAppBtn');
  let installPrompt=null;

  function present(kind,heading,message,cached=0,total=1){
    readiness.className=`offline-readiness is-${kind}`;
    appButton.className=`offline-app-btn is-${kind}`;
    title.textContent=heading;detail.textContent=message;
    appLabel.textContent=kind==='ready'?(navigator.onLine?'可離線':'離線中'):kind==='error'?'需連網':'離線準備中';
    icon.textContent=kind==='ready'?'✓':kind==='error'?'!':'…';
    progress.max=Math.max(1,total);progress.value=Math.min(cached,total);
  }

  function askStatus(registration){
    return new Promise(resolve=>{
      const worker=navigator.serviceWorker.controller||registration.active||registration.waiting;
      if(!worker)return resolve(null);
      const timeout=setTimeout(()=>resolve(null),5000);
      const listener=event=>{if(event.data?.type==='OFFLINE_STATUS'){clearTimeout(timeout);navigator.serviceWorker.removeEventListener('message',listener);resolve(event.data)}};
      navigator.serviceWorker.addEventListener('message',listener);worker.postMessage({type:'GET_OFFLINE_STATUS'});
    });
  }

  async function checkOffline(){
    if(location.protocol==='file:')return present('error','請使用正式網站安裝','離線 App 必須從 HTTPS 網址開啟；直接開啟本機檔案無法安裝。');
    if(!('serviceWorker'in navigator))return present('error','此瀏覽器不支援離線 App','請改用最新版 Safari、Chrome 或 Edge。');
    present('checking','正在檢查離線內容','請保持網路連線，直到所有圖片、音樂與關卡下載完成。');
    try{
      const registration=await navigator.serviceWorker.register('sw.js');
      await navigator.serviceWorker.ready;
      const status=await askStatus(registration);
      if(status?.ready)present('ready','離線內容已準備完成',navigator.onLine?'可以加入主畫面，之後在博物館無網路也能闖關。':'目前沒有網路，但完整關卡已從裝置離線開啟。',status.cached,status.total);
      else present('checking','仍在下載離線內容',status?`已準備 ${status.cached}／${status.total} 個必要檔案。`:'首次安裝完成後，請重新開啟本頁確認。',status?.cached||0,status?.total||1);
    }catch(error){present('error','離線內容尚未完成','請連上網路後按「下載／更新離線內容」重試。')}
  }

  async function prepareOffline(){
    if(!navigator.onLine)return present('error','目前沒有網路','請先連上 Wi-Fi，再下載完整離線內容。');
    prepareButton.disabled=true;present('checking','正在下載完整關卡','請勿關閉畫面；圖片與背景音樂需要一些時間。');
    try{
      const registration=await navigator.serviceWorker.register('sw.js');
      await registration.update();await navigator.serviceWorker.ready;
      const worker=navigator.serviceWorker.controller||registration.active||registration.waiting;
      if(!worker)throw new Error('worker unavailable');
      worker.postMessage({type:'PREPARE_OFFLINE'});
    }catch(error){prepareButton.disabled=false;present('error','下載未完成','請確認網路連線後再試一次。')}
  }

  navigator.serviceWorker?.addEventListener('message',event=>{
    const data=event.data||{};
    if(data.type==='OFFLINE_PROGRESS')present('checking','正在下載完整關卡',`已準備 ${data.done}／${data.total} 個必要檔案。`,data.done,data.total);
    if(data.type==='OFFLINE_STATUS'){
      prepareButton.disabled=false;
      data.ready?present('ready','離線內容已準備完成','請加入主畫面，並在出發前開啟飛航模式測試一次。',data.cached,data.total):present('error','有檔案尚未下載',`尚有 ${data.failed||data.total-data.cached} 個檔案未完成，請保持連線後重試。`,data.cached,data.total);
    }
  });

  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;installButton.hidden=false});
  installButton.addEventListener('click',async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;installButton.hidden=true});
  window.addEventListener('appinstalled',()=>{installButton.hidden=true;present('ready','App 已安裝到主畫面','出發前請開啟飛航模式測試一次。',1,1)});
  window.addEventListener('online',checkOffline);window.addEventListener('offline',checkOffline);
  navigator.serviceWorker?.addEventListener('controllerchange',checkOffline);
  appButton.addEventListener('click',()=>{dialog.showModal();checkOffline()});
  prepareButton.addEventListener('click',prepareOffline);
  checkOffline();
})();
