var app = new Vue({ 
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
});
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var chatMsgInJson = {
  "text": "Welcome to oss chat!!!",
  "userId": "1",
  "chatId": 1,
  "image": "http://spring.io/img/homepage/icon-spring-boot.svg",
  "createdAt": "2018-11-28T11:46:33",
  "id": 1
}

var app4 = new Vue({ 
  el: '#jsonSample',
  data: {
    chat_message_in_json: chatMsgInJson
  }
});
