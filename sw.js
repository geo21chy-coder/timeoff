// 홈 화면 앱 설치용 최소 서비스 워커 (오프라인 저장은 하지 않음: 항상 최신 자료를 보여주기 위해)
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* 네트워크 그대로 사용 */ });
