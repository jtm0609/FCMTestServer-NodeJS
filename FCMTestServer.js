var http = require('http'); 
var admin = require("firebase-admin")

var server = http.createServer(); 
server.on('request', doRequest); 
server.listen(1234); //포트
console.log('Server running!'); // 요청 처리 



function doRequest(req) {
 console.log('test');
const registrationTokens = [
//토큰부분 
'ASDADGSA~'
];




var serviceAccount= require("C:\\Users\\CONECT_AIR\\my-applicationServiceKey.json");
if(!admin.apps.length){
	admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
	});
}



var message = {



  //URL Data 정보 (제목, 내용, 이미지 ,URL)
  data: {
  	title:'품절 대란',
  	body: '테스트 알림',
  	image: 'https://t1.kakaocdn.net/friends/kfo-common/pc/brand/brand_wearefriends2.jpg',
  	url:'http://m.naver.com'},
  //토큰 정보
  tokens: registrationTokens
   
 };


admin.messaging().sendMulticast(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });



}

