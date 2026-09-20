const explorerQuests = [
  {id:0,zone:'館外序章',color:'#118ab2',title:'三黑石的位移密令',tech:'凱薩密碼',place:'館外建築／烏石港地名',treasure:'三星蔥',brief:'先抬頭看博物館的斜面，再尋找「烏石港」為何得名的線索。三塊黑色礁石，就是密碼位移的關鍵。',mission:'確認：烏石港因港中矗立幾塊黑色礁石而得名？',princess:'龜將軍，父王的風雨封住了第一道寶庫。館外的三塊黑石，正是解碼的位移數字。',turtle:'勇者，請把 NDYDODQ 往回移三格。解開後，三星蔥的封印就會鬆動！',hint:{explorer:'看到三塊黑石，就把每個英文字母往回移 3 格。N 往回 3 格是 K。',challenger:'位移量藏在烏石港的地名由來中。密文使用向後解碼。'},type:'caesar'},
  {id:1,zone:'4F 山之層',color:'#2a9d63',title:'蝶與樹的羅盤密語',tech:'指南針方位＋現場查證',place:'寬尾鳳蝶／臺灣檫樹展示',treasure:'牛舌餅',brief:'寬尾鳳蝶在字母森林留下方位密令。從蝴蝶停留的位置出發，依指南針方向移動並記錄沿途字母，再到展項尋找牠唯一的寄主植物。',mission:'依羅盤密令找出四字英文提示，再查證寬尾鳳蝶幼蟲唯一的寄主植物。',princess:'我聽見寬尾鳳蝶在找牠唯一的寄主。蝴蝶只留下方位，請把沿途停留的字母記下來。',turtle:'先記錄蝴蝶所在格，再依序向東、向南、向東。四個字母會告訴你該到展板找什麼！',hint:{explorer:'把蝴蝶所在格當作第一個字母，接著依序向東一格、向南一格、再向東一格。',challenger:'羅盤密令是：起點、東、南、東。每到一格就記錄字母。'},type:'trail'},
  {id:2,zone:'4F 山之層',color:'#2a9d63',title:'腦寮裡的時間順序',tech:'流程排序',place:'伐樟製腦模型箱',treasure:'上將梨',brief:'龜將軍找到六張散落的工作卡。請觀察模型箱，把清末到日治時期的伐樟製腦流程排回正確先後。',mission:'實地核對模型箱；點選工作卡排成 1～6。',princess:'山風吹亂了腦寮的六張工作卡。每一步都有先後，不能只靠猜測。',turtle:'到模型箱找證據，把流程排正確，上將梨就會從第三道封印中現身。',hint:{explorer:'先把樟木變成薄片、背到腦寮，再加熱蒸餾；最後才分裝、運送。',challenger:'從原料處理、運輸、蒸餾、分離到成品流向思考。'},type:'sequence'},
  {id:3,zone:'3F 平原層',color:'#e9a227',title:'沿著水車走的軌跡',tech:'地圖拖放解謎',place:'水與宜蘭生活展區',treasure:'鴨賞',brief:'多雨帶來灌溉，也塑造生活。請觀察現場地圖，把四件展示放回正確位置。',mission:'依展場標示，將龍骨水車、鴨母船割稻、竹圍、洗衫棚拖到地圖定位點。',princess:'我的眼淚化成河流，也滋養了平原。可是四件生活寶物迷失了位置。',turtle:'把它們拖回現場地圖的編號 20、21、22、23，鴨賞封印就會打開！',hint:{explorer:'地圖右上方是竹圍與洗衫棚；龍骨水車、鴨母船割稻在它們下方。',challenger:'以現場地圖紅色編號 20～23 為證據。'},type:'route'},
  {id:4,zone:'2F 海之層',color:'#2667b7',title:'龜山影像拼圖',tech:'交換拼圖＋找物',place:'討海人／漁船展示',treasure:'蜜餞',brief:'海風打亂了龜將軍看見的風景。交換九塊拼圖的位置，復原完整影像後，到討海人展區尋找館內最大的展示品。',mission:'完成 3×3 九片交換拼圖，再輸入那艘傳統木造漁船的名字。',princess:'隔著海，我只能看見龜將軍模糊的身影。請交換兩塊拼圖，幫我把海岸風景重新拼好。',turtle:'九塊拼圖一塊都不少！完成後去找館內最大的漁船，說出船名就能得到酸甜蜜餞。',hint:{explorer:'先找山稜和天空排上排，再把公主放左側、龜將軍放右側。館內最大的展示品名稱以「南風」開頭。',challenger:'利用山稜、河流與海岸線接縫定位；答案在大型木造漁船旁的說明牌。'},type:'slider'},
  {id:5,zone:'2F 海之層',color:'#2667b7',title:'水鳥天堂特徵配對',tech:'特徵牌卡配對',place:'水鳥天堂展區',treasure:'彈珠汽水',brief:'公主的最後一滴眼淚落在濕地。六位住民各遺失了一張身分線索卡，請觀察圖片、模型與展牌，把外形或生活特徵送回正確住民。',mission:'先選一張特徵牌，再點選符合特徵的住民圖片，完成六組配對。',princess:'最後一道封印藏在濕地。六位住民的身分線索被風打散了，請幫牠們找回自己的特徵牌。',turtle:'不要只看名字！要把長喙、泥灘、穗花和漂浮葉片等證據，配回正確住民。',hint:{explorer:'先找最明顯的線索：香腸狀褐色花序、漂浮蓮座葉、眼睛突出會在泥灘移動。',challenger:'把每張線索拆成外形、棲地與行為三種證據，再和展品核對。'},type:'classify'}
];
const challengeQuests = [
  {id:0,zone:'館外序章',color:'#118ab2',title:'單面山的建築證詞',tech:'多重證據判讀',place:'館外建築／外牆',treasure:'三星蔥',brief:'龍王留下六張建築證詞，其中四張能在館外直接查證。請比較建築輪廓、外牆分割與材質，排除混入的假線索。',mission:'繞行安全可觀察範圍，選出四項能支持蘭博建築設計概念的證據。',princess:'真正的記憶不只是一個答案，而是一組彼此支持的證據。請找出蘭博如何把宜蘭地景與音樂藏進建築。',turtle:'別急著全選！輪廓、田野、四季與石材彼此有關；另外兩張只是看似合理的干擾。',hint:{explorer:'',challenger:'從「東北角地形、空中俯瞰、韋瓦第、外牆材料」四個方向查證。'},type:'evidence'},
  {id:1,zone:'4F 山之層',color:'#2a9d63',title:'冰河孑遺的避難方程式',tech:'因果模型推論',place:'迷霧森林／臺灣山毛櫸',treasure:'牛舌餅',brief:'一群怕熱的古老生物，為何今天留在宜蘭山區？請讀取展板，把氣候、海拔與存活位置組成完整因果模型。',mission:'在展板找出冰河期結束後的環境變化，完成四格因果模型。',princess:'山毛櫸保存著很久以前的氣候記憶。只要把原因與結果接對，就能知道牠們為何留在高山。',turtle:'每一格都要能回答「所以呢？」。先判斷氣候變暖後，怕熱生物會往高處還是低處移動。',hint:{explorer:'',challenger:'溫度上升會改變適生高度；最後一格要選展場可查證的孑遺生物。'},type:'ecology'},
  {id:2,zone:'4F 山之層',color:'#2a9d63',title:'山林永續證據法庭',tech:'主張—證據—理由',place:'山林與人／生態保育',treasure:'上將梨',brief:'「利用山林」與「守護山林」是否能同時成立？請從泰雅狩獵習俗與森林資源展板中，選出能支持永續主張的證據，再完成判決理由。',mission:'選出三張支持節制利用的證據，並判斷過度開發會造成的結果。',princess:'父王只看見人們取用森林，卻沒看見世代累積的節制規範。請用證據替山林說話。',turtle:'證據必須真的能限制捕獵或提醒資源有限；與判決無關的描述不能算。',hint:{explorer:'',challenger:'找出能降低獵捕壓力的禁忌，再把它連到「資源有限」的理由。'},type:'court'},
  {id:3,zone:'3F 平原層',color:'#e9a227',title:'蘭陽水系錯誤偵查',tech:'史料除錯',place:'平原與溪流／治水展板',treasure:'鴨賞',brief:'龍王竄改了兩份河川紀錄。請用展板中的沖積扇、洪水改道與築堤資料，找出兩個錯誤敘述。',mission:'閱讀五張水系紀錄，勾出兩張錯誤紀錄，再選出正確修訂。',princess:'河道會改變，但歷史證據不能被改寫。兩張紀錄把蘭陽平原的水系說錯了。',turtle:'先看「是否同源」與「平原由誰沖積」；年份與地名要回到展板核對。',hint:{explorer:'',challenger:'清代的蘭陽溪與宜蘭河曾同源；蘭陽平原也不是單一由冬山河形成。'},type:'river'},
  {id:4,zone:'2F 海之層',color:'#2667b7',title:'黑潮科學儀表臺',tech:'資料交叉驗證',place:'黑潮／海洋高速公路',treasure:'蜜餞',brief:'海洋儀表被風浪打亂。請依展項校正黑潮的顏色、水質、流向與水溫，再判斷哪些生物會搭乘海流旅行。',mission:'完成四項黑潮參數，並選出兩位會藉海流移動的旅客。',princess:'同一股海流同時影響溫度、方向與生命遷移。只有所有讀數一致，儀表才會重新亮起。',turtle:'不要被名字騙了：黑潮看起來不一定是黑色。旅客則要能在海中漂流或完成洄游。',hint:{explorer:'',challenger:'展板同時提供顏色、清澈度、北向流動與相對水溫四種證據。'},type:'current'},
  {id:5,zone:'2F 海之層',color:'#2667b7',title:'討海人的數字密碼鎖',tech:'A1Z26 數字密碼＋條件推理',place:'討海人／南風壹號',treasure:'彈珠汽水',brief:'最後一道鎖有四個證據環。先查證船型、目標魚種、作業季節與造船材料，四環正確後才會出現一串數字密碼。',mission:'完成四環判讀；利用 A=1、B=2……Z=26 解開英文密語，再到展示船查證完整中文船名。',princess:'龜將軍的守望印記被藏進一串數字。只有先找到四項展場證據，數字密碼才會現身。',turtle:'先查證鏢臺、旗魚、東北季風與耐水木材，再用英文字母的順序，把數字逐一換成字母！',hint:{explorer:'',challenger:'先完成四環；數字密碼使用 A1Z26 規則，例如 1=A、5=E、14=N。'},type:'sealock'}
];
const rpgScenes = [
  {scene:'風雨中的單面山',threat:'龍王的風雨正在抹去建築記憶，外牆上只剩三處可讀的痕跡。',hotspots:[['斜面輪廓','單面山拓片','斜面不是船帆；它和東北角單面山的一邊緩、一邊陡相呼應。'],['石材外牆','四季音符','不同石材像音符排列，連向韋瓦第《四季》的建築概念。'],['水面倒影','田野色譜','從上方俯瞰的外牆分割，像宜蘭田野一格一格的色塊。']],decision:'風雨變強了。你要怎麼確定建築真正的設計概念？',choices:['先比對三件線索，找出能互相支持的證詞','看它靠近海邊，就直接判定是帆船','只挑最喜歡的石材顏色當答案'],correct:0,success:'三組證據形成了建築記憶鏈，假線索無法再混淆你。',artifact:'建築記憶徽章'},
  {scene:'迷霧森林的時間裂縫',threat:'氣溫正在上升，冰河時代的生命記憶即將消失。',hotspots:[['冰層遺痕','退冰紀錄','冰河期結束後，整體氣候逐漸變暖。'],['上升山徑','海拔尺','怕熱的生物必須往更高、更涼爽的海拔移動。'],['金黃葉片','山毛櫸葉','臺灣山毛櫸保留著冰河孑遺植物的氣候線索。']],decision:'霧中出現三條路，要如何帶古老生命找到避難所？',choices:['跟著平地暖風往低海拔前進','依氣溫變化判斷，循海拔往上移動','不用讀展牌，只看葉子顏色猜測'],correct:1,success:'海拔尺與退冰紀錄接成因果路徑，迷霧裂縫已穩定。',artifact:'冰河記憶葉'},
  {scene:'山林議會',threat:'龍王要林地立刻交出所有資源，祖靈的節制契約卻被撕碎。',hotspots:[['祖靈石','祖靈契約','出獵前的占卜與規範，會限制行動，不是無條件索取。'],['母獸足跡','繁殖足跡','不捕懷孕母獸，能保留族群繁殖的機會。'],['伐木樁','資源警鐘','森林的材木與獵物都有限，過度利用會使循環中斷。']],decision:'議會要你提出一個兼顧生活與永續的行動。',choices:['因為森林很大，所以不必設任何限制','只判斷哪種工具最漂亮','先提出會限制採集與獵捕的證據'],correct:2,success:'祖靈契約重新組合，議會允許你進入證據法庭。',artifact:'山林契約卷'},
  {scene:'1892 洪水檔案室',threat:'龍王改寫了河道紀錄，蘭陽平原的過去正逐頁消失。',hotspots:[['牛鬥高地','沖積扇標記','牛鬥位於沖積扇頂附近，是讀懂水系的空間起點。'],['舊河道圖','改道紀錄','洪水會使河道變動，不能把現代河道當成永遠不變。'],['再連堤防','築堤檔案','築堤後改變了地面水流入宜蘭河的方式。']],decision:'檔案上有兩個年代版本，怎麼找到被竄改的敵情？',choices:['把築堤前後地圖與洪水紀錄交叉比較','只看現代地圖，假設所有河道從未改變','選文字最長的紀錄當真相'],correct:0,success:'前後圖層成功重疊，被竄改的史料開始發光。',artifact:'水系檔案章'},
  {scene:'黑潮觀測站',threat:'海上讀數互相衝突，旅行的生命找不到向北航道。',hotspots:[['海色浮標','深藍水樣','「黑潮」的海色是深藍，水體比較澄澈。'],['溫度計','暖流讀數','黑潮水溫相對較高，並沿臺灣東側往北。'],['漂流果實','海漂果實','植物果實可借海流飄送，魚類也可利用海流洄游。']],decision:'觀測站只能傳送一次報告，你會怎麼校正讀數？',choices:['交叉比對海色、水溫、流向與生物線索','只看名稱有「黑」就判定海水是黑色','隨機選一個最接近的儀表'],correct:0,success:'四種觀測資料恢復一致，向北的海流航道已顯現。',artifact:'黑潮觀測瓶'},
  {scene:'南風壹號風浪夜',threat:'最後一道封印蹲在風浪中，錯一個條件就會讓數字鎖再度沉入海底。',hotspots:[['船首鏢臺','鏢臺徽記','船首突出的鏢臺，是鏢旗魚船的作業線索。'],['船材接縫','耐水木片','傳統船體需要耐水材料，展牌中的紅檜與烏心石是關鍵。'],['季風旗','東北季風旗','鏢旗魚作業與東北季風、強風浪的海象有關。']],decision:'船身劇烈搖晃，你要先做哪一件事？',choices:['固定線索箱，再逐一查證船型、魚種、季節與船材','立刻猜一串數字，不管前面證據','只問隊友答案，不到展示船查證'],correct:0,success:'四項證據已固定，風浪中浮出 A1Z26 數字鎖。',artifact:'南風守望羅盤'}
];
challengeQuests.forEach((q,i)=>q.rpg=rpgScenes[i]);
const immersiveSceneData=[
  {image:'assets/rpg-scene-01-architecture-v2.jpg',alt:'雨後的蘭陽博物館單面山建築、水面倒影，以及移至右下角的四季石材音符線索',objects:[
    {name:'單面山取景框',item:'斜面輪廓拓片',clue:'建築一側陡峭、一側沿地面延伸，呼應東北角海岸的單面山。',x:18,y:42,key:'shape'},
    {name:'四季石材桌',item:'石材音符卡',clue:'不同石材與金屬板像樂曲節奏排列，連結韋瓦第《四季》。',x:79,y:73,key:'music'},
    {name:'水面田野倒影',item:'田野色譜',clue:'外牆分割與倒影像從空中俯瞰的一格格蘭陽田野。',x:58,y:57,key:'fields'}],
    decoys:[{name:'雨傘架',msg:'這是雨天用品，不是建築設計證據。',x:94,y:61},{name:'排水溝',msg:'排水溝很重要，但無法回答造型來源。',x:76,y:87},{name:'濕地飛鳥',msg:'飛鳥提醒你觀察環境，線索仍藏在建築與外牆。',x:90,y:24}],
    slots:[['造型來源','shape'],['外牆節奏','music'],['大地意象','fields']]},
  {image:'assets/rpg-scene-02-mist-forest-v1.jpg',alt:'蘭陽博物館迷霧森林展示中的退冰痕跡、上升山徑與臺灣山毛櫸葉',objects:[
    {name:'退冰遺痕',item:'氣候變暖紀錄',clue:'冰河期結束後，整體氣候逐漸回暖。',x:18,y:69,key:'warm'},
    {name:'上升山徑',item:'高海拔路標',clue:'怕熱的生物會往較高、較涼爽的地方移動。',x:48,y:55,key:'up'},
    {name:'金黃葉標本',item:'山毛櫸記憶葉',clue:'臺灣山毛櫸是展場可查證的冰河孑遺植物。',x:80,y:40,key:'beech'}],
    decoys:[{name:'山泉水',msg:'水源是森林的一部分，但不是這條氣候遷移因果鏈。',x:69,y:78},{name:'蕨類',msg:'先找會說明「變暖與往高處移動」的證據。',x:31,y:84},{name:'霧燈',msg:'這是展場照明，不能當成自然史證據。',x:91,y:17}],
    slots:[['第一步：環境改變','warm'],['第二步：移動方向','up'],['第三步：留下的生命','beech']]},
  {image:'assets/rpg-scene-03-forest-council-v1.jpg',alt:'山林永續議會場景中的祖靈規範、母獸足跡與有限森林資源',objects:[
    {name:'祖靈契約石',item:'節制規範',clue:'出獵前的占卜與祖靈規範會限制行動。',x:20,y:40,key:'rule'},
    {name:'母獸與幼獸足跡',item:'繁殖守護證詞',clue:'不捕捉懷孕母獸，能保留族群繁殖的機會。',x:53,y:76,key:'birth'},
    {name:'伐木年輪樁',item:'資源有限警鐘',clue:'森林材木與獵物不是取之不盡；過度利用會讓循環中斷。',x:81,y:60,key:'limit'}],
    decoys:[{name:'華麗獵具',msg:'工具精美不等於使用方式永續。',x:72,y:33},{name:'野花',msg:'花朵很醒目，但法庭需要能約束行為的證據。',x:33,y:69},{name:'空背簍',msg:'空背簍本身不能證明採集有節制。',x:91,y:80}],
    slots:[['行動規範','rule'],['保留繁殖','birth'],['承認有限','limit']]},
  {image:'assets/rpg-scene-04-river-archive-v1.jpg',alt:'蘭陽平原水系檔案室中的舊河道圖、洪水紀錄、堤防模型與現代水系圖層',objects:[
    {name:'清代舊河道圖',item:'兩河同源舊圖',clue:'早期蘭陽溪與宜蘭河曾同源，河道並非永遠固定。',x:25,y:34,key:'old'},
    {name:'1892 洪水卷',item:'洪水改道紀錄',clue:'大洪水使宜蘭河下游衝出新河道並改變出海路徑。',x:72,y:71,key:'flood'},
    {name:'再連堤防模型',item:'築堤工程檔案',clue:'堤防完成後，蘭陽溪地面水不再流入宜蘭河。',x:83,y:40,key:'dike'},
    {name:'透明現代圖層',item:'現代水系片',clue:'現代河道是洪水與治水工程共同作用後的結果。',x:49,y:52,key:'modern'}],
    decoys:[{name:'乾涸墨水瓶',msg:'墨水能寫紀錄，卻不能證明河道如何改變。',x:12,y:79},{name:'抽屜把手',msg:'這個抽屜沒有史料，繼續比對桌上的圖層。',x:46,y:86},{name:'測量尺',msg:'尺能量長度，但這次要找時間先後。',x:91,y:18}],
    slots:[['變動前','old'],['洪水改道','flood'],['築堤介入','dike'],['今日水系','modern']]},
  {image:'assets/rpg-scene-05-kuroshio-v1.jpg',alt:'黑潮觀測站中的深藍水樣、暖流溫度計、北向洋流與海漂果實',objects:[
    {name:'深藍水樣瓶',item:'深藍清澈讀數',clue:'黑潮並不是黑色；展項呈現深藍、較清澈的水色。',x:19,y:48,key:'color'},
    {name:'暖流溫度計',item:'較暖水溫讀數',clue:'黑潮水溫相對較高。',x:43,y:71,key:'warm'},
    {name:'北向流標',item:'向北流向標',clue:'黑潮沿臺灣東側往北流動。',x:70,y:32,key:'north'},
    {name:'漂流果實',item:'海漂旅行證物',clue:'穗花棋盤腳果實能藉海流漂送，鰻魚也會利用海流洄游。',x:84,y:70,key:'travel'}],
    decoys:[{name:'貝殼',msg:'貝殼無法校正黑潮的四項讀數。',x:31,y:84},{name:'繩圈',msg:'繩圈是航海工具，不是海流方向證據。',x:92,y:47},{name:'舊羅盤',msg:'羅盤只告訴方位；請找真正指向北方的洋流標記。',x:54,y:39}],
    slots:[['海色與水質','color'],['相對水溫','warm'],['主要流向','north'],['生命旅行','travel']]},
  {image:'assets/rpg-scene-06-nanfeng-v1.jpg',alt:'蘭陽博物館海之層中的南風壹號木造鏢旗魚船，船上各處藏有英文字母線索',objects:[
    {name:'船首鏢臺',item:'N',clue:'鏢臺下藏著第一枚字母。',x:14,y:28,key:'N1'},
    {name:'船首繩結',item:'A',clue:'繩結背面藏著第二枚字母。',x:30,y:42,key:'A'},
    {name:'桅杆根部',item:'N',clue:'桅杆木縫藏著第三枚字母。',x:46,y:35,key:'N2'},
    {name:'季風旗角',item:'F',clue:'迎風旗角藏著第四枚字母。',x:54,y:14,key:'F'},
    {name:'船艙舵輪',item:'E',clue:'舵輪中央藏著第五枚字母。',x:69,y:47,key:'E'},
    {name:'漁網浮球',item:'N',clue:'船尾漁網藏著第六枚字母。',x:84,y:55,key:'N3'},
    {name:'展示臺木箱',item:'G',clue:'最後一枚字母藏在展臺木箱。',x:88,y:84,key:'G'}],
    decoys:[{name:'月光窗',msg:'月光不是字母線索，回到船體細看。',x:7,y:12,letter:'R'},{name:'魚群吊飾',msg:'這枚字母屬於干擾訊號。',x:86,y:18,letter:'O'},{name:'船邊銅鐘',msg:'鐘聲響起了，但這不是船名中的字母。',x:78,y:36,letter:'T'},{name:'岩石底座',msg:'岩石下只有干擾字母。',x:36,y:86,letter:'S'}],
    word:'NANFENG'}
];
challengeQuests.forEach((q,i)=>Object.assign(q.rpg,immersiveSceneData[i]));
[
  ['場景找物＋證據拼接','先在雨後館外場景找出建築線索，再把三件道具放回「造型、節奏、大地」證據槽。','點開建築、水面與石材桌上的物件；回到真實建築確認每項證據。'],
  ['場景找物＋因果排序','進入迷霧森林搜尋退冰、海拔與山毛櫸線索，親手接回氣候遷移路徑。','在圖片找到三件氣候道具，再依「環境改變—移動—留存」放入證據槽。'],
  ['場景找物＋契約修復','在山林議會找回三份節制證據，把規範、繁殖與資源有限重新連成永續契約。','搜尋祖靈石、足跡與年輪樁，將道具放回正確契約位置。'],
  ['場景找物＋圖層排序','闖入洪水檔案室，從圖桌與模型找回四個時間圖層，重建蘭陽水系的變動。','找出舊圖、洪水卷、堤防模型與現代圖層，依時間先後疊回地圖。'],
  ['場景找物＋儀表校正','在深藍觀測站搜集水色、水溫、流向與生命旅行證物，放回黑潮儀表。','搜尋四件觀測物，將它們配置到海色、水溫、流向與生命旅行儀表。'],
  ['藏字搜索＋船名拼組','登上南風壹號，在鏢臺、船身、旗角、舵輪與漁網等位置找回七枚字母，自行拼成英文船名。','在船上搜尋七枚真正字母、排除干擾字母，拼成英文名後到展牌查證中文全名。']
].forEach((d,i)=>{challengeQuests[i].tech=d[0];challengeQuests[i].brief=d[1];challengeQuests[i].mission=d[2]});
Object.assign(challengeQuests[5],{title:'南風壹號散字航海圖',place:'海之層／南風壹號展示船',princess:'風浪把南風壹號的英文船名拆散，七枚字母藏進鏢臺、船身、季風旗與漁網。請把它們一枚一枚找回來。',turtle:'小心！月光、銅鐘和魚群旁也有干擾字母。真正的七枚字母拼好後，還要到展示船查證中文全名。'});
Object.assign(challengeQuests[0],{princess:'雨後的建築藏著三件記憶道具。請從斜面輪廓、石材節奏與水面倒影，找出彼此能支持的證據。',turtle:'別只按最亮的圓點！找到道具後，還要把它們放回「造型、外牆節奏、大地意象」三個位置。'});
Object.assign(challengeQuests[3],{princess:'河道會改變，但時間留下的圖層不能被竄改。請把舊河道、洪水、築堤與現代水系一層一層找回來。',turtle:'抽屜把手和墨水瓶只是干擾；真正的史料要能排出「變動前—洪水—築堤—今日」的順序。'});
challengeQuests[5].hint.challenger='七枚真字母分藏在鏢臺、繩結、桅杆、旗角、舵輪、漁網與展臺木箱；月光、魚群、銅鐘、岩石是干擾。';
challengeQuests[5].rpg.threat='風浪把英文船名拆成七枚字母，真正線索與干擾字母混在船身各處。';
const currentQuests=()=>state.level==='challenger'?challengeQuests:explorerQuests;
const sequenceCorrect=['以手斧將樟木刨成薄木片','將薄木片背至腦寮','入灶蒸餾提煉','冷卻分離出腦油與腦砂','將樟腦油分裝','武裝戒護運送下山'];
const state={team:'',level:'explorer',completed:[],current:0,hints:0,startedAt:null,sound:true,rpg:{focus:5,xp:0,inventory:[],scenes:{}}};
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
function save(){localStorage.setItem('lanyangQuest',JSON.stringify(state))}
function ensureRpgState(){state.rpg=Object.assign({focus:5,xp:0,inventory:[],scenes:{}},state.rpg||{});state.rpg.inventory=Array.isArray(state.rpg.inventory)?state.rpg.inventory:[];state.rpg.scenes=state.rpg.scenes||{}}
function load(){try{Object.assign(state,JSON.parse(localStorage.getItem('lanyangQuest'))||{})}catch(e){}ensureRpgState()}
function show(id){$$('.screen').forEach(x=>x.classList.toggle('active',x.id===id));scrollTo({top:0,behavior:'smooth'})}
function tone(freq=520){if(!state.sound)return;try{const a=new(window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator(),g=a.createGain();o.connect(g);g.connect(a.destination);o.frequency.value=freq;g.gain.setValueAtTime(.06,a.currentTime);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+.18);o.start();o.stop(a.currentTime+.2)}catch(e){}}
function startGame(resume=false){if(!resume){state.team=$('#teamName').value.trim()||'蘭陽小偵探';state.level=$('input[name="level"]:checked').value;state.completed=[];state.hints=0;state.startedAt=Date.now();state.rpg={focus:5,xp:0,inventory:[],scenes:{}};save()}ensureRpgState();renderMap();show('mapScreen')}
function rpgRank(){return state.rpg.xp>=150?'蘭陽守望者':state.rpg.xp>=90?'展場解譯師':state.rpg.xp>=40?'證據追蹤者':'見習探索員'}
function rpgHudMarkup(compact=false){const bag=state.rpg.inventory.length?state.rpg.inventory.slice(-3).map(x=>`<span>${x}</span>`).join(''):'<span class="empty-loot">尚未取得任務道具</span>';return `<div class="rpg-stats ${compact?'compact':''}"><div><small>RANK</small><b>${rpgRank()}</b></div><div><small>FOCUS</small><b>${'◆'.repeat(state.rpg.focus)}${'◇'.repeat(5-state.rpg.focus)}</b></div><div><small>XP</small><b>${state.rpg.xp}</b></div><div class="rpg-bag"><small>線索包</small>${bag}</div>${compact?'':'<button class="rpg-guide-btn" id="rpgGuideBtn">冒險指南</button>'}</div>`}
function renderMap(){
  const quests=currentQuests(),n=state.completed.length; $('#teamChip').textContent=state.team;
  $('#mapMode').textContent=state.level==='challenger'?'國中進階版任務地圖':'國小探索版任務地圖';
  $('#progressRing').style.setProperty('--progress',`${n/6*100}%`); $('#progressRing span').textContent=n; $('#vaultCount').textContent=n;
  $('#guideLine').textContent=n===6?'六道封印全開！蘭陽六寶已經回到寶庫。':n===0?`第一道封印：${quests[0].title}`:`下一道封印：${quests[n].title}`;
  $('#sealRing').innerHTML=quests.map((q,i)=>`<span class="seal-dot ${state.completed.includes(i)?'open':''}" title="${q.title}">${i+1}</span>`).join('');
  $('#questPath').innerHTML=quests.map((q,i)=>{const done=state.completed.includes(i),locked=i>n;return `<li class="quest-card ${done?'completed':''} ${locked?'locked':''}" style="--zone:${q.color}"><div class="quest-treasure-icon treasure-${i}" aria-label="${done?q.treasure:'尚未解封的寶物'}"></div><div class="quest-info"><small>${q.zone}・${q.tech}</small><h2>${q.title}</h2><p>${done?`已獲得：${q.treasure}`:'解開封印，尋回宜蘭寶物'}</p></div><button class="quest-action" data-q="${i}" ${locked?'disabled':''}>${done?'再次挑戰':i===n?'進入關卡':'尚未解鎖'}</button></li>`}).join('');
  $('#treasureSlots').innerHTML=quests.map((q,i)=>`<div class="treasure-slot ${state.completed.includes(i)?'collected':''}"><div class="treasure-art treasure-${i}"></div><span>${state.completed.includes(i)?q.treasure:'？？？'}</span></div>`).join('');
  $('#rpgHud').hidden=state.level!=='challenger';if(state.level==='challenger'){$('#rpgHud').innerHTML=rpgHudMarkup();$('#rpgGuideBtn').onclick=()=>$('#rpgGuideDialog').showModal()}
  $$('[data-q]').forEach(b=>b.onclick=()=>openQuest(+b.dataset.q)); if(n===6)setTimeout(()=>show('endingScreen'),650);
}
function pickVoice(role){
  const voices=speechSynthesis.getVoices(),zh=voices.filter(v=>/^zh(-|_)/i.test(v.lang));
  const female=/Mei|Ting|Hsiao|Han|female|woman|女/i,male=/Yun|Jhe|male|man|男/i;
  return zh.find(v=>(role==='princess'?female:male).test(v.name))||zh.find(v=>/TW/i.test(v.lang))||zh[0]||null
}
function speakCharacter(q,role){
  if(!state.sound){feedback(false,'請先開啟右上角音效，再播放角色語音。');return}
  if(!('speechSynthesis'in window)){feedback(false,'這台裝置目前不支援語音播放，請由小隊朗讀對話。');return}
  speechSynthesis.cancel();$$('.character-card').forEach(x=>x.classList.remove('speaking'));
  const princess=role==='princess',u=new SpeechSynthesisUtterance(princess?q.princess:q.turtle),card=$(`.${role}-card`),button=$(`[data-voice="${role}"]`);
  u.lang='zh-TW';u.rate=princess?.96:.84;u.pitch=princess?1.32:.62;u.volume=1;const voice=pickVoice(role);if(voice)u.voice=voice;
  u.onstart=()=>{card?.classList.add('speaking');button.textContent='■ 停止語音';button.setAttribute('aria-pressed','true')};
  u.onend=u.onerror=()=>{card?.classList.remove('speaking');if(button){button.textContent=princess?'▶ 播放公主語音':'▶ 播放龜將軍語音';button.setAttribute('aria-pressed','false')}};
  speechSynthesis.speak(u)
}
function openQuest(i){
  state.current=i;const q=currentQuests()[i];
  $('#questMount').innerHTML=`<div class="quest-layout" style="--zone:${q.color}"><aside class="quest-brief"><span class="zone-pill">${q.zone}</span><h1>${q.title}</h1><p>${q.brief}</p><div class="mission-check"><b>現場任務</b><p>${q.mission}</p></div></aside><section class="puzzle-panel"><div id="rpgQuestHud"></div><div class="character-dialogue"><article class="character-card princess-card"><div class="character-avatar princess-avatar" role="img" aria-label="嘎瑪蘭公主"></div><div class="speech"><b>嘎瑪蘭公主：</b>${q.princess}</div><button class="voice-btn" data-voice="princess" aria-pressed="false">▶ 播放公主語音</button></article><article class="character-card turtle-card"><div class="character-avatar turtle-avatar" role="img" aria-label="龜將軍"></div><div class="speech turtle"><b>龜將軍：</b>${q.turtle}</div><button class="voice-btn" data-voice="turtle" aria-pressed="false">▶ 播放龜將軍語音</button></article></div><button class="hint-btn" id="hintBtn">請龜將軍提示</button><div id="puzzle"></div><div class="feedback" id="feedback" role="status"></div></section></div>`;
  $$('[data-voice]').forEach(b=>b.onclick=()=>{const role=b.dataset.voice;if(window.speechSynthesis?.speaking&&b.getAttribute('aria-pressed')==='true'){window.speechSynthesis.cancel()}else{speakCharacter(q,role)}});
  $('#hintBtn').onclick=()=>showHint(q);if(state.level==='challenger'){renderRpgQuestHud();renderRpgPrelude(q)}else{renderPuzzle(q)}show('questScreen')
}
function renderRpgQuestHud(){const el=$('#rpgQuestHud');if(el)el.innerHTML=rpgHudMarkup(true)}
function renderRpgPrelude(q){
  ensureRpgState();const r=q.rpg,scene=state.rpg.scenes[q.id]||(state.rpg.scenes[q.id]={found:[],decision:false,introAwarded:false}),found=scene.found||[];
  const phase=scene.decision?2:found.length===r.hotspots.length?1:0;
  $('#puzzle').innerHTML=`<section class="rpg-encounter"><div class="rpg-phase" aria-label="關卡階段"><span class="${phase>=0?'active':''}">1 探索場景</span><span class="${phase>=1?'active':''}">2 情境決策</span><span class="${phase>=2?'active':''}">3 解開封印</span></div><div class="rpg-scene"><p class="eyebrow">任務區域</p><h2>${r.scene}</h2><p>${r.threat}</p><div class="hotspot-field">${r.hotspots.map((h,i)=>`<button class="scene-hotspot ${found.includes(i)?'found':''}" data-hotspot="${i}" ${found.includes(i)?'disabled':''}><small>調查點 ${i+1}</small><b>${h[0]}</b><span>${found.includes(i)?'線索已取得':'點擊搜查'}</span></button>`).join('')}</div></div><div class="quest-log"><h3>線索紀錄 ${found.length}/${r.hotspots.length}</h3>${found.length?found.map(i=>`<article><b>${r.hotspots[i][1]}</b><p>${r.hotspots[i][2]}</p></article>`).join(''):'<p>先在場景中點選可疑位置，收集足以支持判斷的證據。</p>'}</div>${found.length===r.hotspots.length&&!scene.decision?`<div class="rpg-decision"><p class="eyebrow">危機選擇</p><h3>${r.decision}</h3><div>${r.choices.map((c,i)=>`<button data-rpg-choice="${i}">${c}</button>`).join('')}</div><small>錯誤判斷會消耗 1 點 FOCUS，但可重新查證。</small></div>`:''}${scene.decision?`<div class="rpg-unlocked"><p>${r.success}</p><button class="primary-btn" id="enterFinal">進入封印核心 <span>→</span></button></div>`:''}</section>`;
  $$('[data-hotspot]').forEach(b=>b.onclick=()=>{const i=+b.dataset.hotspot;if(!scene.found.includes(i)){scene.found.push(i);save();tone(560);renderRpgPrelude(q);feedback(true,`取得任務道具：${r.hotspots[i][1]}`)}});
  $$('[data-rpg-choice]').forEach(b=>b.onclick=()=>{const i=+b.dataset.rpgChoice;if(i===r.correct){scene.decision=true;if(!scene.introAwarded){scene.introAwarded=true;state.rpg.xp+=10}save();renderRpgQuestHud();renderRpgPrelude(q);feedback(true,`情境判斷成功！獲得 10 XP。${r.success}`)}else{state.rpg.focus=Math.max(1,state.rpg.focus-1);save();renderRpgQuestHud();feedback(false,'這個行動缺少足夠證據，FOCUS -1。請重讀三件線索再決定。')}});
  if($('#enterFinal'))$('#enterFinal').onclick=()=>{renderPuzzle(q);feedback(true,'封印核心已開啟。現在把收集的證據用在謎題上！')}
}
function showHint(q){state.hints++;save();$('#hintTitle').textContent=q.title;$('#hintText').textContent=q.hint[state.level];$('#hintDialog').showModal()}
function feedback(ok,msg){const f=$('#feedback');f.className=`feedback show ${ok?'success':'error'}`;f.textContent=msg;tone(ok?720:210)}
function complete(q){const isNew=!state.completed.includes(q.id);if(isNew){state.completed.push(q.id);state.completed.sort((a,b)=>a-b);if(state.level==='challenger'&&q.rpg){state.rpg.xp+=20;state.rpg.focus=Math.min(5,state.rpg.focus+1);if(!state.rpg.inventory.includes(q.rpg.artifact))state.rpg.inventory.push(q.rpg.artifact)}save()}const f=$('#feedback');if(f){f.className='feedback';f.textContent=''}const loot=state.level==='challenger'&&q.rpg?`<div class="rpg-loot"><b>任務道具：${q.rpg.artifact}</b><span>${isNew?'+20 XP ・ FOCUS 恢復 1 點':'已收錄於線索包'}</span></div>`:'';$('#puzzle').innerHTML=`<div class="treasure-reward treasure-${q.id}" aria-label="獲得${q.treasure}"></div><h2 class="reward-title">第 ${q.id+1} 道封印解開！</h2><p style="text-align:center">嘎瑪蘭公主與龜將軍送給小隊的宜蘭寶物是——<b>${q.treasure}</b></p>${loot}<button class="primary-btn" id="nextBtn">${q.id===5?'打開蘭陽寶庫':'帶寶物回寶庫'}</button>`;renderRpgQuestHud();$('#nextBtn').onclick=()=>{renderMap();q.id===5?show('endingScreen'):show('mapScreen')};tone(820)}
function answerBox(label,placeholder,check){$('#puzzle').insertAdjacentHTML('beforeend',`<div class="answer-row"><label style="flex:1">${label}<input class="answer-input" id="answerInput" placeholder="${placeholder}" autocomplete="off"></label><button class="primary-btn" id="checkBtn">送出答案</button></div>`);$('#checkBtn').onclick=()=>check($('#answerInput').value);$('#answerInput').addEventListener('keydown',e=>{if(e.key==='Enter')check(e.target.value)})}
function renderPuzzle(q){
  const p=$('#puzzle');
  if(q.type==='caesar'){
    p.innerHTML=`<h2>密文被往後推了 3 格</h2><div class="cipher-card"><div class="cipher-text">NDYDODQ</div><div class="shift-wheel"><span>黑色礁石</span><strong>3</strong><span>往回移</span></div></div><p>解開密文後，輸入 7 個英文字母。這個詞也是「噶瑪蘭」常見的羅馬字拼法。</p>`;
    answerBox('解密結果','_ _ _ _ _ _ _',v=>norm(v)==='KAVALAN'?complete(q):feedback(false,'還差一點。記得每個字母都往英文字母表前面移 3 格。'))
  }
  if(q.type==='trail')renderTrail(q);
  if(q.type==='sequence')renderSequence(q);
  if(q.type==='route')renderRoute(q);
  if(q.type==='slider')renderSlider(q);
  if(q.type==='classify')renderClassify(q)
  if(q.type==='evidence')renderEvidence(q);
  if(q.type==='ecology')renderEcology(q);
  if(q.type==='court')renderCourt(q);
  if(q.type==='river')renderRiver(q);
  if(q.type==='current')renderCurrent(q);
  if(q.type==='sealock')renderSeaLock(q)
}
function renderTrail(q){
  const letters=['T','R','A','S','H','Q','E','E','L','M','B','I','N','D','O','F','W','Y','G','K'];
  const target=[0,1,6,7];let picks=[];
  $('#puzzle').innerHTML=`<h2>依指南針方位，破解四字密語</h2><p>從左上角蝴蝶停留的位置開始，記下起點字母；再依羅盤密令移動，每停一格就記下一個字母。</p><div class="compass-clue" aria-label="羅盤密令：起點、東、南、東"><span class="compass-rose">✦</span><b>方位密令</b><span>蝴蝶起點</span><i>→</i><span>東</span><i>→</i><span>南</span><i>→</i><span>東</span></div><div class="letter-trail" id="letterTrail" aria-label="字母羅盤解謎"></div><div class="trail-result">探險紀錄：<strong id="trailWord">＿＿＿＿</strong></div><div class="answer-row"><button class="secondary-btn" id="clearTrail">重新定位</button><button class="primary-btn" id="checkTrail">核對四字密語</button></div><div id="treeAnswer" hidden><p class="feedback show success">方位正確！你發現的英文密語是 <b>TREE</b>。現在到寬尾鳳蝶展項，查證牠唯一的寄主植物。</p></div>`;
  const draw=()=>{$('#letterTrail').innerHTML=letters.map((x,i)=>`<button class="trail-cell ${picks.includes(i)?'selected':''} ${i===0?'start':''}" data-letter="${i}" aria-label="${i===0?'蝴蝶起點，':''}字母 ${x}"><span>${x}</span>${picks.includes(i)?`<small>${picks.indexOf(i)+1}</small>`:''}</button>`).join('');$('#trailWord').textContent=picks.map(i=>letters[i]).join('')+'＿'.repeat(4-picks.length);$$('[data-letter]').forEach(b=>b.onclick=()=>{const i=+b.dataset.letter;if(picks.includes(i)||picks.length===4)return;const last=picks.at(-1);const adjacent=last===undefined||Math.abs(i-last)===5||Math.floor(i/5)===Math.floor(last/5)&&Math.abs(i-last)===1;if(!adjacent)return feedback(false,'軌跡中斷了！下一格必須和上一格上下或左右相鄰。');picks.push(i);draw();tone(470)})};
  draw();
  $('#clearTrail').onclick=()=>{picks=[];draw();$('#treeAnswer').hidden=true};
  $('#checkTrail').onclick=()=>{if(JSON.stringify(picks)!==JSON.stringify(target))return feedback(false,'方位紀錄不正確。請回到蝴蝶起點，再依東、南、東重新移動。');$('#treeAnswer').hidden=false;answerBox('唯一寄主植物','請依展板輸入完整中文名稱',v=>['臺灣檫樹','台灣檫樹'].includes(v.replace(/\s/g,''))?complete(q):feedback(false,'請再看一次「寬尾鳳蝶」展項，找出寫著「唯一寄主」的植物。'));$('#checkTrail').disabled=true}
}
function renderSequence(q){let picks=[];const shuffled=[sequenceCorrect[3],sequenceCorrect[0],sequenceCorrect[5],sequenceCorrect[2],sequenceCorrect[1],sequenceCorrect[4]];$('#puzzle').innerHTML=`<h2>依先後順序點選六張工作卡</h2><p>選錯可按「清除重排」。</p><div class="sequence-grid" id="sequenceGrid"></div><div class="answer-row"><button class="secondary-btn" id="clearSeq">清除重排</button><button class="primary-btn" id="checkSeq">核對流程</button></div>`;const draw=()=>{$('#sequenceGrid').innerHTML=shuffled.map((x,i)=>`<button class="sequence-tile ${picks.includes(i)?'selected':''}" data-s="${i}" ${picks.includes(i)?'disabled':''}><span class="sequence-index">${picks.includes(i)?picks.indexOf(i)+1:'?'}</span>${x}</button>`).join('');$$('[data-s]').forEach(b=>b.onclick=()=>{picks.push(+b.dataset.s);draw()})};draw();$('#clearSeq').onclick=()=>{picks=[];draw();feedback(false,'已清除，請回到模型箱重新觀察。')};$('#checkSeq').onclick=()=>{if(picks.length<6)return feedback(false,'還有工作卡尚未排序。');const ans=picks.map(i=>shuffled[i]);JSON.stringify(ans)===JSON.stringify(sequenceCorrect)?complete(q):feedback(false,'順序還不對。請確認薄木片何時送入腦寮，以及成品何時分裝。')}}
function renderRoute(q){const items=['龍骨水車','鴨母船割稻','竹圍','洗衫棚'];let selected=null;const placed={};$('#puzzle').innerHTML=`<h2>把四件展示拖到現場地圖的正確位置</h2><p class="route-help">iPad 可先點選右側物件，再點地圖上的虛線框；也可以直接拖曳。地圖取自「蘭博蒐查線」現場配置。</p><div class="route-workspace"><div class="museum-map" id="museumMap">${items.map((x,i)=>`<button class="map-drop" data-slot="${i}" aria-label="${x}的位置"><span>放到<br>${20+i} 號</span></button>`).join('')}</div><div class="object-tray" id="objectTray">${items.map((x,i)=>`<button class="drag-object" draggable="true" data-object="${i}"><span class="object-art object-${i}" aria-hidden="true"></span><span>${x}</span></button>`).join('')}</div></div><div class="answer-row"><button class="secondary-btn" id="clearRoute">全部取回</button><button class="primary-btn" id="checkRoute">核對地圖</button></div>`;const paint=()=>{$$('[data-object]').forEach(b=>{const id=+b.dataset.object;b.classList.toggle('selected',selected===id);b.classList.toggle('placed',Object.values(placed).includes(id))});$$('[data-slot]').forEach(z=>{const s=+z.dataset.slot,id=placed[s];z.classList.toggle('filled',id!==undefined);z.innerHTML=id===undefined?`<span>放到<br>${20+s} 號</span>`:`<span class="object-art object-${id}" aria-label="${items[id]}"></span>`})};const assign=(slot,id)=>{for(const k in placed)if(placed[k]===id)delete placed[k];placed[slot]=id;selected=null;paint();tone(470)};$$('[data-object]').forEach(b=>{b.onclick=()=>{selected=+b.dataset.object;paint()};b.ondragstart=e=>{e.dataTransfer.setData('text/plain',b.dataset.object)}});$$('[data-slot]').forEach(z=>{z.onclick=()=>{if(selected!==null)assign(+z.dataset.slot,selected)};z.ondragover=e=>e.preventDefault();z.ondrop=e=>{e.preventDefault();assign(+z.dataset.slot,+e.dataTransfer.getData('text/plain'))}});$('#clearRoute').onclick=()=>{Object.keys(placed).forEach(k=>delete placed[k]);selected=null;paint()};$('#checkRoute').onclick=()=>items.every((_,i)=>placed[i]===i)?complete(q):feedback(false,'還有物件放錯位置。請對照現場地圖紅色編號 20～23。');paint()}
function renderSlider(q){
  let tiles=[5,1,8,3,9,6,4,2,7],selected=null;const solved=[1,2,3,4,5,6,7,8,9];
  $('#puzzle').innerHTML=`<h2>交換兩塊拼圖，復原完整風景</h2><p>九塊拼圖都在這裡。先點一塊，再點另一塊，就能交換位置；拼圖一開始已經打亂。</p><div class="slider-puzzle" id="slider"></div><p id="puzzleStatus">尚未完成：請觀察山稜、河川與人物位置。</p><div class="ship-answer"><label>館內最大展示品的漁船名稱<input class="answer-input" id="shipInput" placeholder="完成拼圖後，到「討海人」展區查證"></label><button class="primary-btn" id="shipCheck">核對拼圖與船名</button></div>`;
  const draw=()=>{$('#slider').innerHTML=tiles.map((n,i)=>`<button class="slider-tile ${selected===i?'selected':''}" data-ti="${i}" style="background-position:${((n-1)%3)*50}% ${Math.floor((n-1)/3)*50}%" aria-label="第 ${i+1} 格目前是拼圖片 ${n}">${n}</button>`).join('');$$('[data-ti]').forEach(b=>b.onclick=()=>{const i=+b.dataset.ti;if(selected===null){selected=i;draw();return}if(selected===i){selected=null;draw();return}[tiles[i],tiles[selected]]=[tiles[selected],tiles[i]];selected=null;draw();tone(430);$('#puzzleStatus').textContent=JSON.stringify(tiles)===JSON.stringify(solved)?'拼圖完成！請用現場展牌確認漁船名稱。':'尚未完成：繼續交換兩塊拼圖。'})};
  draw();
  $('#shipCheck').onclick=()=>{if(JSON.stringify(tiles)!==JSON.stringify(solved))return feedback(false,'拼圖還沒有復原。請先完成九塊圖片，再核對船名。');['南風壹號','南風一號'].includes($('#shipInput').value.replace(/\s/g,''))?complete(q):feedback(false,'請找可以「登上去體驗當漁夫」的傳統木造漁船。')}
}
function renderClassify(q){
  const residents=['蒼鷺','彈塗魚','中杓鷸','蘆葦','香蒲','大萍'];
  const clues=['灰藍羽毛、長腳、尖直長喙，常站在淺水中等候獵物。','眼睛突出頭頂，胸鰭像手，能在泥灘爬行與跳動。','褐色斑紋、細長腳，最醒目的是向下彎曲的長喙。','成片生長在水邊，細長莖葉頂端有輕柔的穗狀花序。','直立葉片中央長出褐色、像香腸一樣的圓柱花序。','葉片像蓮座浮在水面，表面有細毛，根鬚垂在水中。'];
  const order=[4,1,5,2,0,3],placed={};let active=null;
  $('#puzzle').innerHTML=`<h2>把六張特徵牌送回正確住民</h2><p>先點選一張特徵牌，再點選符合特徵的住民圖片。請用現場模型、標本與解說牌作為證據。</p><div class="matching-board"><section><h3>水鳥天堂住民</h3><div class="resident-match-grid">${residents.map((name,i)=>`<button class="resident-match" data-resident="${i}"><span class="resident-image resident-${i}" role="img" aria-label="${name}的圖片"></span><b>${name}</b><small>等待特徵牌</small></button>`).join('')}</div></section><section><h3>身分特徵牌</h3><div class="clue-card-list">${order.map(i=>`<button class="feature-card" data-clue="${i}"><span>線索牌</span>${clues[i]}</button>`).join('')}</div></section></div><div class="answer-row"><button class="secondary-btn" id="clearMatches">全部取回</button><button class="primary-btn" id="checkMatches">核對六組配對</button></div>`;
  const paint=()=>{$$('[data-clue]').forEach(b=>{const id=+b.dataset.clue;b.classList.toggle('selected',active===id);b.classList.toggle('placed',Object.values(placed).includes(id))});$$('[data-resident]').forEach(b=>{const id=+b.dataset.resident,clue=placed[id];b.classList.toggle('matched',clue!==undefined);b.querySelector('small').textContent=clue===undefined?'等待特徵牌':clues[clue]})};
  $$('[data-clue]').forEach(b=>b.onclick=()=>{active=+b.dataset.clue;paint();tone(440)});
  $$('[data-resident]').forEach(b=>b.onclick=()=>{if(active===null)return feedback(false,'請先選一張右側的特徵牌。');for(const k in placed)if(placed[k]===active)delete placed[k];placed[+b.dataset.resident]=active;active=null;paint();tone(520)});
  $('#clearMatches').onclick=()=>{Object.keys(placed).forEach(k=>delete placed[k]);active=null;paint()};
  $('#checkMatches').onclick=()=>residents.every((_,i)=>placed[i]===i)?complete(q):feedback(false,'還有特徵牌送錯住民。請比較長喙、泥灘行為、花序與漂浮葉片等證據。');paint()
}
function renderEvidence(q){
  const cards=['建築輪廓取自東北角常見的單面山','外牆像從高空俯瞰的田野方塊','四個建築實體對應韋瓦第《四季》樂章','以多種石材表現樂章音符與四季地景','整棟建築仿造一艘駛入烏石港的帆船','外牆顏色依海水深度由淺到深排列'];
  const correct=[0,1,2,3];
  $('#puzzle').innerHTML=`<h2>從六張證詞中，選出四項可查證的建築證據</h2><p>請在館外安全位置觀察輪廓與外牆，必要時閱讀建築解說。每張證詞都要能指出證據來源。</p><div class="advanced-grid evidence-grid">${cards.map((x,i)=>`<button class="advanced-card" data-ev="${i}"><span>證詞 ${i+1}</span>${x}</button>`).join('')}</div><div class="answer-row"><button class="secondary-btn" id="clearEvidence">清除選擇</button><button class="primary-btn" id="checkEvidence">提交證據組</button></div>`;
  let selected=[];const paint=()=>$$('[data-ev]').forEach(b=>b.classList.toggle('selected',selected.includes(+b.dataset.ev)));
  $$('[data-ev]').forEach(b=>b.onclick=()=>{const i=+b.dataset.ev;selected=selected.includes(i)?selected.filter(x=>x!==i):selected.length<4?[...selected,i]:selected;paint()});
  $('#clearEvidence').onclick=()=>{selected=[];paint()};$('#checkEvidence').onclick=()=>JSON.stringify([...selected].sort())===JSON.stringify(correct)?complete(q):feedback(false,'證據組還不完整。請排除無法由建築輪廓、田野意象、四季樂章或石材排列支持的敘述。')
}
function renderEcology(q){
  const fields=[['冰河期結束後，整體氣候…',['變暖','變冷']],['怕熱生物為尋找適生溫度，會往…',['高海拔','低海拔']],['部分族群留在涼爽山區，形成…',['冰河孑遺生物','海漂植物']],['展場可查證的代表植物是…',['臺灣山毛櫸','穗花棋盤腳']]];
  $('#puzzle').innerHTML=`<h2>完成「氣候 → 遷移 → 留存」因果模型</h2><p>四格必須前後相連，不能只猜最後的物種名稱。</p><div class="causal-flow">${fields.map((f,i)=>`<label><b>${i+1}</b><span>${f[0]}</span><select data-cause="${i}"><option value="">請選擇</option>${f[1].map((x,j)=>`<option value="${j}">${x}</option>`).join('')}</select></label>`).join('<i>→</i>')}</div><button class="primary-btn block-check" id="checkEcology">驗證因果模型</button>`;
  $('#checkEcology').onclick=()=>[...$$('[data-cause]')].every(x=>x.value==='0')?complete(q):feedback(false,'模型中有一格無法和前後原因相連。請從氣候變暖、往高海拔遷移重新推論。')
}
function renderCourt(q){
  const evidence=['認為獵捕太多的熊會帶來不幸','不能捕捉懷孕的母獸','出獵前先占卜並遵守祖靈規範','森林中的檜木材積很大','獵具製作得越精美越能保育'];
  $('#puzzle').innerHTML=`<h2>永續法庭：哪些證據支持「節制利用」？</h2><p>先選三張有助降低獵捕壓力或約束行為的證據，再完成判決理由。</p><div class="advanced-grid">${evidence.map((x,i)=>`<button class="advanced-card" data-law="${i}"><span>證物 ${String.fromCharCode(65+i)}</span>${x}</button>`).join('')}</div><fieldset class="reason-box"><legend>判決理由</legend><label><input type="radio" name="forestReason" value="finite">森林資源有限，規範能降低過度獵捕與繁殖期傷害</label><label><input type="radio" name="forestReason" value="profit">只要能增加收益，捕獵數量越多越好</label><label><input type="radio" name="forestReason" value="none">山林會自行恢復，不需要任何限制</label></fieldset><button class="primary-btn block-check" id="checkCourt">提出判決</button>`;
  let chosen=[];$$('[data-law]').forEach(b=>b.onclick=()=>{const i=+b.dataset.law;chosen=chosen.includes(i)?chosen.filter(x=>x!==i):chosen.length<3?[...chosen,i]:chosen;$$('[data-law]').forEach(x=>x.classList.toggle('selected',chosen.includes(+x.dataset.law)))});
  $('#checkCourt').onclick=()=>JSON.stringify([...chosen].sort())==='[0,1,2]'&&$('input[name="forestReason"]:checked')?.value==='finite'?complete(q):feedback(false,'請檢查：證據是否真的能約束獵捕行為？理由是否承認森林資源有限？')
}
function renderRiver(q){
  const claims=['早期蘭陽平原遇豪雨時，河道常會改變。','牛鬥位在蘭陽平原沖積扇的頂點。','蘭陽平原完全由冬山河單獨沖積形成。','清代蘭陽溪與宜蘭河各自發源、從未同源。','員山再連堤防完成後，蘭陽溪地面水不再流入宜蘭河。'];
  $('#puzzle').innerHTML=`<h2>找出兩張被竄改的水系紀錄</h2><p>點選兩張錯誤紀錄，再選出正確的修訂摘要。</p><div class="record-stack">${claims.map((x,i)=>`<button class="record-card" data-record="${i}"><b>紀錄 ${i+1}</b>${x}</button>`).join('')}</div><label class="revision-select">正確修訂<select id="riverFix"><option value="">請選擇</option><option value="correct">蘭陽平原由多條河川共同作用；清代蘭陽溪與宜蘭河曾同源</option><option value="wrong1">冬山河沖積整座平原；兩河從清代起即完全分離</option><option value="wrong2">所有河道位置固定，築堤與洪水都不會改變水系</option></select></label><button class="primary-btn block-check" id="checkRiver">封存修正版</button>`;
  let selected=[];$$('[data-record]').forEach(b=>b.onclick=()=>{const i=+b.dataset.record;selected=selected.includes(i)?selected.filter(x=>x!==i):selected.length<2?[...selected,i]:selected;$$('[data-record]').forEach(x=>x.classList.toggle('selected',selected.includes(+x.dataset.record)))});$('#checkRiver').onclick=()=>JSON.stringify([...selected].sort())==='[2,3]'&&$('#riverFix').value==='correct'?complete(q):feedback(false,'仍有錯誤未找到。請聚焦「平原是否只由一條河形成」與「兩河是否曾同源」。')
}
function renderCurrent(q){
  const gauges=[['海面顏色',['深藍色','黑色']],['水質',['乾淨清澈','混濁不清']],['主要流向',['往北流','往南流']],['相對水溫',['比四周溫暖','比四周冰涼']]];
  const travelers=['穗花棋盤腳','鰻魚','野薑花','吳郭魚'];
  $('#puzzle').innerHTML=`<h2>校正四項黑潮讀數，再辨認兩位海流旅客</h2><div class="gauge-board">${gauges.map((g,i)=>`<fieldset><legend>${g[0]}</legend>${g[1].map((x,j)=>`<label><input type="radio" name="g${i}" value="${j}"><span>${x}</span></label>`).join('')}</fieldset>`).join('')}</div><h3>哪些生物會搭乘海流旅行？（選兩項）</h3><div class="traveler-list">${travelers.map((x,i)=>`<button data-traveler="${i}">${x}</button>`).join('')}</div><button class="primary-btn block-check" id="checkCurrent">啟動黑潮儀表</button>`;
  let chosen=[];$$('[data-traveler]').forEach(b=>b.onclick=()=>{const i=+b.dataset.traveler;chosen=chosen.includes(i)?chosen.filter(x=>x!==i):chosen.length<2?[...chosen,i]:chosen;$$('[data-traveler]').forEach(x=>x.classList.toggle('selected',chosen.includes(+x.dataset.traveler)))});$('#checkCurrent').onclick=()=>[0,1,2,3].every(i=>$(`input[name="g${i}"]:checked`)?.value==='0')&&JSON.stringify([...chosen].sort())==='[0,1]'?complete(q):feedback(false,'儀表仍不一致。黑潮是深藍、清澈、向北且較暖；旅客要有海漂或洄游證據。')
}
function renderSeaLock(q){
  const locks=[['船型證據',['船頭有突出船體的鏢臺','船身掛有大型拖網']],['主要目標',['旗魚','鯖魚']],['常見作業條件',['東北季風吹起、風強浪大','夏季無風的港內水域']],['耐水船材',['紅檜與烏心石','榕樹與竹子']]];
  $('#puzzle').innerHTML=`<h2>完成四環線索鎖</h2><p>每一環都要能在南風壹號或解說牌找到證據。</p><div class="lock-rings">${locks.map((g,i)=>`<fieldset><legend>第 ${i+1} 環｜${g[0]}</legend>${g[1].map((x,j)=>`<label><input type="radio" name="lock${i}" value="${j}"><span>${x}</span></label>`).join('')}</fieldset>`).join('')}</div><div id="finalShip"></div><button class="primary-btn block-check" id="openLock">解開四環</button>`;
  $('#openLock').onclick=()=>{if(![0,1,2,3].every(i=>$(`input[name="lock${i}"]:checked`)?.value==='0'))return feedback(false,'有一環和現場證據不符。請再觀察鏢臺、魚種、季節與船材。');if(!$('#shipLockInput')){answerBox('符合全部條件的展示船名','請輸入完整船名',v=>['南風壹號','南風一號'].includes(v.replace(/\s/g,''))?complete(q):feedback(false,'四環已解開，但船名仍不正確。請讀取船身或展牌名稱。'));$('#openLock').disabled=true;$('#answerInput').id='shipLockInput'}}
}
function renderEvidence(q){
  const cards=['建築輪廓取自東北角常見的單面山','外牆像從高空俯瞰的田野方塊','四個建築實體對應韋瓦第《四季》樂章','以多種石材表現樂章音符與四季地景','整棟建築仿造一艘駛入烏石港的帆船','外牆顏色依海水深度由淺到深排列'];
  const correct=[0,1,2,3];let selected=[];
  $('#puzzle').innerHTML=`<h2>從六張證詞中，選出四項可查證的建築證據</h2><p>請在館外安全位置觀察輪廓與外牆，必要時閱讀建築解說。每張證詞都要能指出證據來源。</p><div class="advanced-grid evidence-grid">${cards.map((x,i)=>`<button class="advanced-card" data-ev="${i}"><span>證詞 ${i+1}</span>${x}</button>`).join('')}</div><div class="answer-row"><button class="secondary-btn" id="clearEvidence">清除選擇</button><button class="primary-btn" id="checkEvidence">提交證據組</button></div>`;
  const paint=()=>$$('[data-ev]').forEach(b=>b.classList.toggle('selected',selected.includes(+b.dataset.ev)));
  $$('[data-ev]').forEach(b=>b.onclick=()=>{const i=+b.dataset.ev;selected=selected.includes(i)?selected.filter(x=>x!==i):selected.length<4?[...selected,i]:selected;paint()});
  $('#clearEvidence').onclick=()=>{selected=[];paint()};$('#checkEvidence').onclick=()=>JSON.stringify([...selected].sort())===JSON.stringify(correct)?complete(q):feedback(false,'證據組還不完整。請排除無法由建築輪廓、田野意象、四季樂章或石材排列支持的敘述。')
}
function renderEcology(q){
  const fields=[['冰河期結束後，整體氣候…',['變暖','變冷']],['怕熱生物為尋找適生溫度，會往…',['高海拔','低海拔']],['部分族群留在涼爽山區，形成…',['冰河孑遺生物','海漂植物']],['展場可查證的代表植物是…',['臺灣山毛櫸','穗花棋盤腳']]];
  $('#puzzle').innerHTML=`<h2>完成「氣候 → 遷移 → 留存」因果模型</h2><p>四格必須前後相連，不能只猜最後的物種名稱。</p><div class="causal-flow">${fields.map((f,i)=>`<label><b>${i+1}</b><span>${f[0]}</span><select data-cause="${i}"><option value="">請選擇</option>${f[1].map((x,j)=>`<option value="${j}">${x}</option>`).join('')}</select></label>`).join('<i>→</i>')}</div><button class="primary-btn block-check" id="checkEcology">驗證因果模型</button>`;
  $('#checkEcology').onclick=()=>[...$$('[data-cause]')].every(x=>x.value==='0')?complete(q):feedback(false,'模型中有一格無法和前後原因相連。請從氣候變暖、往高海拔遷移重新推論。')
}
function renderCourt(q){
  const evidence=['認為獵捕太多的熊會帶來不幸','不能捕捉懷孕的母獸','出獵前先占卜並遵守祖靈規範','森林中的檜木材積很大','獵具製作得越精美越能保育'];let chosen=[];
  $('#puzzle').innerHTML=`<h2>永續法庭：哪些證據支持「節制利用」？</h2><p>先選三張有助降低獵捕壓力或約束行為的證據，再完成判決理由。</p><div class="advanced-grid">${evidence.map((x,i)=>`<button class="advanced-card" data-law="${i}"><span>證物 ${String.fromCharCode(65+i)}</span>${x}</button>`).join('')}</div><fieldset class="reason-box"><legend>判決理由</legend><label><input type="radio" name="forestReason" value="finite">森林資源有限，規範能降低過度獵捕與繁殖期傷害</label><label><input type="radio" name="forestReason" value="profit">只要能增加收益，捕獵數量越多越好</label><label><input type="radio" name="forestReason" value="none">山林會自行恢復，不需要任何限制</label></fieldset><button class="primary-btn block-check" id="checkCourt">提出判決</button>`;
  $$('[data-law]').forEach(b=>b.onclick=()=>{const i=+b.dataset.law;chosen=chosen.includes(i)?chosen.filter(x=>x!==i):chosen.length<3?[...chosen,i]:chosen;$$('[data-law]').forEach(x=>x.classList.toggle('selected',chosen.includes(+x.dataset.law)))});
  $('#checkCourt').onclick=()=>JSON.stringify([...chosen].sort())==='[0,1,2]'&&$('input[name="forestReason"]:checked')?.value==='finite'?complete(q):feedback(false,'請檢查：證據是否真的能約束獵捕行為？理由是否承認森林資源有限？')
}
function renderRiver(q){
  const claims=['早期蘭陽平原遇豪雨時，河道常會改變。','牛鬥位在蘭陽平原沖積扇的頂點。','蘭陽平原完全由冬山河單獨沖積形成。','清代蘭陽溪與宜蘭河各自發源、從未同源。','員山再連堤防完成後，蘭陽溪地面水不再流入宜蘭河。'];let selected=[];
  $('#puzzle').innerHTML=`<h2>找出兩張被竄改的水系紀錄</h2><p>點選兩張錯誤紀錄，再選出正確的修訂摘要。</p><div class="record-stack">${claims.map((x,i)=>`<button class="record-card" data-record="${i}"><b>紀錄 ${i+1}</b>${x}</button>`).join('')}</div><label class="revision-select">正確修訂<select id="riverFix"><option value="">請選擇</option><option value="correct">蘭陽平原由多條河川共同作用；清代蘭陽溪與宜蘭河曾同源</option><option value="wrong1">冬山河沖積整座平原；兩河從清代起即完全分離</option><option value="wrong2">所有河道位置固定，築堤與洪水都不會改變水系</option></select></label><button class="primary-btn block-check" id="checkRiver">封存修正版</button>`;
  $$('[data-record]').forEach(b=>b.onclick=()=>{const i=+b.dataset.record;selected=selected.includes(i)?selected.filter(x=>x!==i):selected.length<2?[...selected,i]:selected;$$('[data-record]').forEach(x=>x.classList.toggle('selected',selected.includes(+x.dataset.record)))});$('#checkRiver').onclick=()=>JSON.stringify([...selected].sort())==='[2,3]'&&$('#riverFix').value==='correct'?complete(q):feedback(false,'仍有錯誤未找到。請聚焦「平原是否只由一條河形成」與「兩河是否曾同源」。')
}
function renderCurrent(q){
  const gauges=[['海面顏色',['深藍色','黑色']],['水質',['乾淨清澈','混濁不清']],['主要流向',['往北流','往南流']],['相對水溫',['比四周溫暖','比四周冰涼']]],travelers=['穗花棋盤腳','鰻魚','野薑花','吳郭魚'];let chosen=[];
  $('#puzzle').innerHTML=`<h2>校正四項黑潮讀數，再辨認兩位海流旅客</h2><div class="gauge-board">${gauges.map((g,i)=>`<fieldset><legend>${g[0]}</legend>${g[1].map((x,j)=>`<label><input type="radio" name="g${i}" value="${j}"><span>${x}</span></label>`).join('')}</fieldset>`).join('')}</div><h3>哪些生物會搭乘海流旅行？（選兩項）</h3><div class="traveler-list">${travelers.map((x,i)=>`<button data-traveler="${i}">${x}</button>`).join('')}</div><button class="primary-btn block-check" id="checkCurrent">啟動黑潮儀表</button>`;
  $$('[data-traveler]').forEach(b=>b.onclick=()=>{const i=+b.dataset.traveler;chosen=chosen.includes(i)?chosen.filter(x=>x!==i):chosen.length<2?[...chosen,i]:chosen;$$('[data-traveler]').forEach(x=>x.classList.toggle('selected',chosen.includes(+x.dataset.traveler)))});$('#checkCurrent').onclick=()=>[0,1,2,3].every(i=>$(`input[name="g${i}"]:checked`)?.value==='0')&&JSON.stringify([...chosen].sort())==='[0,1]'?complete(q):feedback(false,'儀表仍不一致。黑潮是深藍、清澈、向北且較暖；旅客要有海漂或洄游證據。')
}
function renderSeaLock(q){
  const locks=[['船型證據',['船頭有突出船體的鏢臺','船身掛有大型拖網']],['主要目標',['旗魚','鯖魚']],['常見作業條件',['東北季風吹起、風強浪大','夏季無風的港內水域']],['耐水船材',['紅檜與烏心石','榕樹與竹子']]];
  $('#puzzle').innerHTML=`<h2>先完成四環證據鎖</h2><p>每一環都要能在展示船或解說牌找到證據。四環全對，數字密碼才會出現。</p><div class="lock-rings">${locks.map((g,i)=>`<fieldset><legend>第 ${i+1} 環｜${g[0]}</legend>${g[1].map((x,j)=>`<label><input type="radio" name="lock${i}" value="${j}"><span>${x}</span></label>`).join('')}</fieldset>`).join('')}</div><button class="primary-btn block-check" id="openLock">取得數字密碼</button><div id="numberCipher"></div>`;
  $('#openLock').onclick=()=>{
    if(![0,1,2,3].every(i=>$(`input[name="lock${i}"]:checked`)?.value==='0'))return feedback(false,'有一環和現場證據不符。請再觀察鏢臺、魚種、季節與船材。');
    $('#openLock').disabled=true;
    $('#numberCipher').innerHTML=`<section class="number-cipher"><p class="eyebrow">第二階段｜A1Z26 數字密碼</p><h3>依英文字母順序解開密語</h3><div class="cipher-rule"><span>1=A</span><span>5=E</span><span>6=F</span><span>7=G</span><span>14=N</span></div><div class="number-code" aria-label="數字密碼：14、1、14、6、5、14、7"><b>14</b><b>1</b><b>14</b><b>6</b><b>5</b><b>14</b><b>7</b></div><div class="answer-row"><label style="flex:1">英文密語<input class="answer-input" id="cipherInput" maxlength="7" placeholder="把七個數字換成七個英文字母" autocomplete="off"></label><button class="primary-btn" id="decodeCipher">解開密語</button></div><div id="shipAnswer"></div></section>`;
    $('#decodeCipher').onclick=()=>{
      if(norm($('#cipherInput').value)!=='NANFENG')return feedback(false,'數字密碼尚未解開。請依 A=1、B=2……Z=26，把每個數字分別換成字母。');
      $('#decodeCipher').disabled=true;$('#cipherInput').disabled=true;
      $('#shipAnswer').innerHTML='<p class="feedback show success">英文密語正確！請到展示船查證完整中文船名。</p>';
      answerBox('符合英文密語與四項證據的展示船名','請輸入完整中文船名',v=>['南風壹號','南風一號'].includes(v.replace(/\s/g,''))?complete(q):feedback(false,'英文字母已解開，但中文船名仍不正確。請讀取船身或展牌名稱。'))
    }
  }
}
function renderRpgPrelude(q){
  ensureRpgState();const r=q.rpg;let scene=state.rpg.scenes[q.id];
  if(!scene||scene.version!==2)scene=state.rpg.scenes[q.id]={version:2,found:[],decoys:[],assembly:{},letters:[],sceneSolved:false};
  const found=scene.found||[],allFound=found.length===r.objects.length;
  $('#puzzle').innerHTML=`<section class="immersive-quest"><div class="rpg-phase" aria-label="關卡階段"><span class="active">1 搜查物件</span><span class="${allFound?'active':''}">2 操作線索</span><span>3 打開封印</span></div><div class="scene-objective"><div><p class="eyebrow">場景任務</p><h2>${r.scene}</h2><p>${r.threat}</p></div><strong>${found.length} / ${r.objects.length}<small>已取得</small></strong></div><div class="immersive-world"><img src="${r.image}" alt="${r.alt}">${r.objects.map((o,i)=>`<button class="world-hotspot ${found.includes(i)?'found':''}" style="--x:${o.x}%;--y:${o.y}%" data-world-object="${i}" aria-label="${found.includes(i)?'已找到：'+o.name:'調查場景中的可疑物件'}"><span>${found.includes(i)?'✓':'＋'}</span><b>${found.includes(i)?o.name:'調查'}</b></button>`).join('')}${r.decoys.map((o,i)=>`<button class="world-hotspot decoy ${scene.decoys.includes(i)?'checked':''}" style="--x:${o.x}%;--y:${o.y}%" data-world-decoy="${i}" aria-label="調查場景物件"><span>${scene.decoys.includes(i)?'×':'？'}</span><b>${scene.decoys.includes(i)?o.name:'可疑物件'}</b></button>`).join('')}<div class="scene-npc"><span class="npc-mini princess-mini" aria-hidden="true"></span><p><b>嘎瑪蘭公主：</b>${allFound?'線索都收齊了！把道具拖回正確的位置，讓記憶重新連起來。':'不要只找發光的地方；展品的形狀、位置與用途也可能藏著證據。'}</p></div></div><div class="scene-inventory"><div><p class="eyebrow">調查袋</p><h3>${q.id===5?'散落的船名字母':'已取得的線索道具'}</h3></div><div class="inventory-slots">${r.objects.map((o,i)=>found.includes(i)?`<article><span>${q.id===5?o.item:'◆'}</span><b>${o.item}</b><small>${o.clue}</small></article>`:`<article class="empty"><span>？</span><b>尚未發現</b><small>回到圖片繼續搜查</small></article>`).join('')}</div></div>${allFound?`<div class="scene-ready"><p>${q.id===5?'七枚字母已找齊，但順序仍被風浪打亂。':'證據齊全，現在必須親手操作它們，不能用猜的。'}</p><button class="primary-btn" id="useSceneClues">${q.id===5?'開始拼船名':'打開操作臺'} <span>→</span></button></div>`:''}</section>`;
  $$('[data-world-object]').forEach(b=>b.onclick=()=>{const i=+b.dataset.worldObject;if(found.includes(i))return feedback(true,`${r.objects[i].item} 已在調查袋中。`);scene.found.push(i);state.rpg.xp+=2;save();tone(610);renderRpgQuestHud();renderRpgPrelude(q);feedback(true,`找到「${r.objects[i].item}」：${r.objects[i].clue}`)});
  $$('[data-world-decoy]').forEach(b=>b.onclick=()=>{const i=+b.dataset.worldDecoy;if(!scene.decoys.includes(i)){scene.decoys.push(i);state.rpg.focus=Math.max(1,state.rpg.focus-1);save();renderRpgQuestHud()}b.classList.add('checked');b.querySelector('span').textContent='×';b.querySelector('b').textContent=r.decoys[i].name;feedback(false,`${r.decoys[i].msg} FOCUS -1。`)});
  if($('#useSceneClues'))$('#useSceneClues').onclick=()=>renderImmersiveAssembly(q)
}
function renderImmersiveAssembly(q){
  const r=q.rpg,scene=state.rpg.scenes[q.id];
  if(q.id===5)return renderNanfengLetters(q);
  scene.assembly=scene.assembly||{};let active=null;
  $('#puzzle').innerHTML=`<section class="assembly-lab"><div class="rpg-phase"><span class="active">1 搜查完成</span><span class="active">2 操作線索</span><span>3 打開封印</span></div><div class="assembly-head"><div><p class="eyebrow">證據操作臺</p><h2>${q.id===0?'重建建築設計鏈':q.id===1?'接回冰河記憶路徑':q.id===2?'修復山林永續契約':q.id===3?'疊回水系時間圖層':'校正黑潮觀測儀'}</h2><p>先點下方一件道具，再點它應放入的位置。每個位置都要能說出證據理由。</p></div><button class="secondary-btn" id="backToScene">回場景查證</button></div><div class="evidence-workbench"><div class="assembly-slots">${r.slots.map((s,i)=>`<button data-assembly-slot="${i}"><small>${i+1}</small><b>${s[0]}</b><span>放入線索</span></button>`).join(q.id===1||q.id===3?'<i>→</i>':'')}</div><div class="assembly-tray">${r.objects.map((o,i)=>`<button data-assembly-token="${i}"><span>◆</span><b>${o.item}</b><small>${o.clue}</small></button>`).join('')}</div></div><div class="answer-row"><button class="secondary-btn" id="clearAssembly">全部取回</button><button class="primary-btn" id="checkAssembly">啟動封印</button></div></section>`;
  const paint=()=>{$$('[data-assembly-token]').forEach(b=>{const i=+b.dataset.assemblyToken;b.classList.toggle('selected',active===i);b.classList.toggle('placed',Object.values(scene.assembly).includes(i))});$$('[data-assembly-slot]').forEach(b=>{const slot=+b.dataset.assemblySlot,i=scene.assembly[slot],label=b.querySelector('span');b.classList.toggle('filled',i!==undefined);label.textContent=i===undefined?'放入線索':r.objects[i].item})};
  $$('[data-assembly-token]').forEach(b=>b.onclick=()=>{active=+b.dataset.assemblyToken;paint();tone(440)});
  $$('[data-assembly-slot]').forEach(b=>b.onclick=()=>{if(active===null)return feedback(false,'先從下方調查袋選一件線索道具。');for(const k in scene.assembly)if(scene.assembly[k]===active)delete scene.assembly[k];scene.assembly[+b.dataset.assemblySlot]=active;active=null;save();paint();tone(530)});
  $('#clearAssembly').onclick=()=>{scene.assembly={};active=null;save();paint()};$('#backToScene').onclick=()=>renderRpgPrelude(q);
  $('#checkAssembly').onclick=()=>{const ok=r.slots.every((s,i)=>r.objects[scene.assembly[i]]?.key===s[1]);if(!ok)return feedback(false,'線索還沒有接成完整證據鏈。請比較每件道具的用途與位置標題。');scene.sceneSolved=true;if(!scene.introAwarded){scene.introAwarded=true;state.rpg.xp+=10}save();complete(q)};paint()
}
function renderNanfengLetters(q){
  const r=q.rpg,scene=state.rpg.scenes[q.id],order=[3,0,5,1,6,2,4];scene.letters=scene.letters||[];
  $('#puzzle').innerHTML=`<section class="assembly-lab ship-letter-lab"><div class="rpg-phase"><span class="active">1 七枚字母已找到</span><span class="active">2 拼出船名</span><span>3 現場查證</span></div><div class="assembly-head"><div><p class="eyebrow">船名拼字臺</p><h2>把散落字母拼成漁船的英文名</h2><p>字母已依找到位置收入調查袋，但風浪打亂了順序。點字母依序放入船身銘牌。</p></div><button class="secondary-btn" id="backToScene">回船上查證</button></div><div class="ship-name-plate" id="shipNamePlate">${Array.from({length:7},(_,i)=>`<span>${scene.letters[i]===undefined?'＿':r.objects[scene.letters[i]].item}</span>`).join('')}</div><div class="loose-letters">${order.map(i=>`<button data-loose-letter="${i}" ${scene.letters.includes(i)?'disabled':''}>${r.objects[i].item}<small>${r.objects[i].name}</small></button>`).join('')}</div><div class="answer-row"><button class="secondary-btn" id="undoLetter">退回一枚</button><button class="primary-btn" id="checkLetters">轉動船名羅盤</button></div><div id="onsiteShipCheck"></div></section>`;
  $$('[data-loose-letter]').forEach(b=>b.onclick=()=>{if(scene.letters.length>=7)return;scene.letters.push(+b.dataset.looseLetter);save();renderNanfengLetters(q);tone(520)});$('#undoLetter').onclick=()=>{scene.letters.pop();save();renderNanfengLetters(q)};$('#backToScene').onclick=()=>renderRpgPrelude(q);
  $('#checkLetters').onclick=()=>{const word=scene.letters.map(i=>r.objects[i].item).join('');if(word!==r.word)return feedback(false,'羅盤沒有亮起。船名是七個字母，請觀察三個 N 的位置並重新排列。');$('#onsiteShipCheck').innerHTML=`<div class="onsite-check"><p class="feedback show success">船名羅盤亮起：<b>${word}</b>。最後請到真正的展示船或解說牌查證中文全名。</p><label>展示船中文全名<input class="answer-input" id="immersiveShipInput" placeholder="請輸入完整船名" autocomplete="off"></label><button class="primary-btn" id="verifyImmersiveShip">完成查證</button></div>`;$('#verifyImmersiveShip').onclick=()=>{const v=$('#immersiveShipInput').value.replace(/\s/g,'');['南風壹號','南風一號'].includes(v)?complete(q):feedback(false,'請讀取船身或解說牌上的完整名稱。')}}
}
function norm(v){return v.trim().toUpperCase().replace(/\s/g,'')}
function teacherContent(){
  const elementary=['KAVALAN','羅盤：起點→東→南→東＝TREE；臺灣檫樹','刨片→背至腦寮→蒸餾→冷卻分離→分裝→運下山','20 龍骨水車；21 鴨母船割稻；22 竹圍；23 洗衫棚','南風壹號','蒼鷺＝尖直喙；彈塗魚＝泥灘；中杓鷸＝彎喙；蘆葦＝穗狀花序；香蒲＝圓柱花序；大萍＝漂浮蓮座葉'];
  const advanced=['斜面輪廓拓片→造型來源；石材音符卡→外牆節奏；田野色譜→大地意象','氣候變暖紀錄→環境改變；高海拔路標→移動方向；山毛櫸記憶葉→留下的生命','節制規範→行動規範；繁殖守護證詞→保留繁殖；資源有限警鐘→承認有限','兩河同源舊圖→洪水改道紀錄→築堤工程檔案→現代水系片','深藍清澈讀數→海色與水質；較暖水溫→相對水溫；北向流標→主要流向；海漂旅行證物→生命旅行','搜尋七枚字母並排列 NANFENG；現場查證：南風壹號'];
  const rows=(list,answers)=>list.map((q,i)=>`<tr><td>${i+1}. ${q.title}</td><td>${answers[i]}<br><b>${q.treasure}</b></td><td>${q.place}</td></tr>`).join('');
  return `<h2>90 分鐘教學指引</h2><h3>學習目標</h3><ul><li>能以展品、模型、圖片與說明牌作為證據解題。</li><li>能說出宜蘭山地、平原、海洋環境與人類生活的關係。</li><li>國中進階版能比較多項資料，建立因果關係並辨識錯誤主張。</li></ul><h3>建議流程</h3><table><tr><th>時間</th><th>活動</th><th>教師引導</th></tr><tr><td>10 分</td><td>館外組隊、說明證據規則</td><td>「你的答案由哪一件展品或哪一句展板支持？」</td></tr><tr><td>25 分</td><td>4F 山之層兩關</td><td>國中組需說出原因與結果，不只報答案。</td></tr><tr><td>20 分</td><td>3F 平原層</td><td>要求小組用兩項史料修正錯誤敘述。</td></tr><tr><td>20 分</td><td>2F 海之層兩關</td><td>比較自然條件、物種遷移與漁業技術。</td></tr><tr><td>15 分</td><td>寶庫、證書與出口單</td><td>「哪一項證據最能改變你的判斷？」</td></tr></table><h3>國小探索版答案</h3><table><tr><th>關卡</th><th>答案／寶物</th><th>現場證據</th></tr>${rows(explorerQuests,elementary)}</table><h3>國中進階版答案</h3><table><tr><th>關卡</th><th>答案／寶物</th><th>現場證據</th></tr>${rows(challengeQuests,advanced)}</table><h3>評量方式</h3><ul><li><b>觀察證據：</b>每關能指出展板或展示物作為理由（35%）。</li><li><b>推理品質：</b>能比較資料、說明因果或修正錯誤（35%）。</li><li><b>合作參與：</b>輪替角色、音量合宜、遵守動線（20%）。</li><li><b>反思表達：</b>用一句話連結「山—平原—海」（10%）。</li></ul><h3>出口單</h3><p>① 我們修改過的一項錯誤主張是＿＿，證據是＿＿。<br>② 宜蘭自然環境與人類生活的因果關係是＿＿。<br>③ 若展板與直覺衝突，我會用＿＿確認。</p><p><small>內容依使用者提供之蘭博蒐查線、國中／高中參觀學習資料改編；傳說部分採民間故事教育性改寫，應與歷史事實分開說明。館內展項如有更新，請教師於出發前先巡場確認。</small></p>`
}
function prependRpgTeacherNote(){const c=$('#teacherContent');c.insertAdjacentHTML('afterbegin','<section class="teacher-rpg-note"><h2>國中 RPG 玩法與評量證據</h2><p>每關循環為「搜尋場景物件 → 收入調查袋 → 配置／排序／拼字 → 回到真實展品查證」。學生不能只按選項：必須說明物件為何是證據。FOCUS 用來回饋誤判，XP 與任務道具顯示學習進展；不建議以速度作為主要評分。</p></section>')}
$('#startBtn').onclick=()=>startGame(false);
$('#resumeBtn').onclick=()=>startGame(true);
$('#homeBtn').onclick=()=>state.startedAt?(renderMap(),show('mapScreen')):show('startScreen');
$('#backBtn').onclick=()=>{renderMap();show('mapScreen')};
$('#returnMapBtn').onclick=()=>{renderMap();show('mapScreen')};
$('#certificateBtn').onclick=()=>{const mins=Math.max(1,Math.round((Date.now()-state.startedAt)/60000));$('#certTeam').textContent=state.team;$('#certStats').innerHTML=state.level==='challenger'?`<span>${rpgRank()}</span><span>${state.rpg.xp} XP</span><span>6 道封印</span><span>${state.hints} 次提示</span>`:`<span>國小探索版</span><span>6 道封印</span><span>${state.hints} 次提示</span><span>${mins} 分鐘</span>`;$('#certificateDialog').showModal()};
$('#teacherBtn').onclick=()=>$('#teacherDialog').showModal();
$('#unlockTeacher').onclick=()=>{if(norm($('#teacherCode').value)==='LYM'){$('#teacherGate').hidden=true;$('#teacherContent').hidden=false;$('#teacherContent').innerHTML=teacherContent();prependRpgTeacherNote()}else{$('#teacherCode').value='';$('#teacherCode').placeholder='通關碼不正確'}};
$('#soundBtn').onclick=()=>{state.sound=!state.sound;$('#soundBtn').setAttribute('aria-pressed',state.sound);$('#soundBtn').textContent=state.sound?'♪':'×';save()};
$('#resetBtn').onclick=()=>{if(confirm('要清除六關進度並重新組隊嗎？')){localStorage.removeItem('lanyangQuest');location.reload()}};
$$('[data-close]').forEach(b=>b.onclick=()=>$('#'+b.dataset.close).close());
load();if(state.startedAt){$('#resumeBtn').hidden=false;$('#resumeBtn').textContent=`繼續「${state.team}」的進度（${state.completed.length}/6）`;const savedLevel=$(`input[name="level"][value="${state.level}"]`);if(savedLevel)savedLevel.checked=true}
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
