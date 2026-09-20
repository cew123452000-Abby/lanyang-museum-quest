# 蘭陽守望：蘭陽博物館實境解謎

給國小高年級與國中學生使用的 iPad 博物館探索遊戲。遊戲以宜蘭民間傳說「葛瑪蘭公主與龜將軍」為敘事主軸，結合蘭陽博物館館外建築、山之層、平原層與海之層展項。

網站由 GitHub Pages 自動部署；每次推送到 `main` 分支後，會將 `dist/` 中的靜態網站發布。

## 使用方式

開啟網站後輸入小隊名稱，依現場動線完成六關。學生進度保存在目前裝置。教師模式通關碼為 `LYM`，內含 90 分鐘流程、答案、評量方式與出口單。

## 教學提醒

- 建議 3–4 人一組並輪替持機、讀題、找展品、記錄等角色。
- 本作必須配合現場展品、模型與說明牌，不能只靠網站完成全部學習。
- 館內展項可能更新，校外教學前請先巡場確認。
- 傳說為教育性改編，應與歷史事實分開說明。

## Firebase 使用紀錄後台

網站已包含 `admin.html` 教師後台、學生匿名進度同步、CSV 匯出及 Firebase AI Logic 匿名統計摘要。尚未連線時不會上傳任何資料。

啟用步驟：

1. 在 Firebase Console 建立 Web App，啟用 Anonymous 與 Google Authentication。
2. 建立 Cloud Firestore，部署 `firestore.rules`；學生只能新增或更新自己的紀錄，只有 `admins/{uid}` 白名單中的管理者可以讀取全部紀錄。
3. 將 Firebase Web 設定貼入 `dist/firebase-config.js`。Web 設定可出現在前端，但服務帳戶金鑰與管理密碼不可寫入網站。
4. 管理者第一次以 Google 登入後，從 Authentication 取得 UID，並在 Firestore 建立 `admins/{uid}` 文件。
5. 若啟用 AI 摘要，請在 Firebase AI Logic 完成 Gemini Developer API 與 App Check 設定，再把 `aiEnabled` 改為 `true`。AI 僅收到匿名整體統計，不包含小隊暱稱。

## 素材來源

題目內容依使用者提供之「蘭博蒐查線 1.0／2.0」及國中、高中參觀學習資料改編。角色與場景插圖為本專案原創生成圖像。
