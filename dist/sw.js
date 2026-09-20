const CACHE='lanyang-quest-v22';
const FILES=['./','index.html','styles.css','v2.css?v=22','game.js?v=22','music.js?v=19','pwa.js?v=22','manifest.webmanifest','assets/Sunlight_on_Glass.mp3','assets/legend-opening.png','assets/quest-guides.png','assets/quest-map-lanyang-v2.png','assets/certificate-glory-v2.png','assets/lanyang-museum-photo.png','assets/plain-floor-map.png','assets/plain-objects-sprite.png','assets/wetland-residents-sprite.png','assets/yilan-treasures-sprite.png','assets/guishan-emblem.png','assets/pwa-icon-192.png','assets/pwa-icon-512.png','assets/apple-touch-icon.png','assets/rpg-scene-01-architecture-v2.jpg','assets/rpg-scene-02-mist-forest-v1.jpg','assets/rpg-scene-03-forest-council-v1.jpg','assets/rpg-scene-04-river-archive-v1.jpg','assets/rpg-scene-05-kuroshio-v1.jpg','assets/rpg-scene-06-nanfeng-v1.jpg'];

self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put('index.html',copy));return response}).catch(()=>caches.match('index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy))}return response})));
});

async function offlineStatus(){
  const cache=await caches.open(CACHE),keys=await cache.keys();
  return{type:'OFFLINE_STATUS',ready:keys.length>=FILES.length,cached:keys.length,total:FILES.length,version:CACHE};
}

self.addEventListener('message',event=>{
  if(event.data?.type==='GET_OFFLINE_STATUS')event.waitUntil(offlineStatus().then(status=>event.source?.postMessage(status)));
  if(event.data?.type==='PREPARE_OFFLINE')event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);let done=0,failed=0;
    for(const file of FILES){
      try{const response=await fetch(file,{cache:'reload'});if(!response.ok)throw new Error(String(response.status));await cache.put(file,response.clone())}catch(error){failed++}
      done++;event.source?.postMessage({type:'OFFLINE_PROGRESS',done,total:FILES.length});
    }
    const status=await offlineStatus();event.source?.postMessage({...status,ready:failed===0&&status.ready,failed});
  })());
});
