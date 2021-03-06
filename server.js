// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// 
// const app = express();
// 
// app.use(bodyParser.json()) // for parsing application/json
// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// ) // for parsing application/x-www-form-urlencoded
// 
// //This is the route the API will call
// app.post('/new-message', function(req, res) {
//   try {
//   const { message } = req.body
// 
//   console.log('message: ', message);
//   //Each message contains "text" and a "chat" object, which has an "id" which is the chat id
// 
//   if (!message || !message.text || message.text.toLowerCase().indexOf('marco') < 0) {
//     console.log(123);
//     // In case a message is not present, or if our message does not have the word marco in it, do nothing and return an empty response
//     return res.end()
//   }
// 
//   // If we've gotten this far, it means that we have received a message containing the word "marco".
//   // Respond by hitting the telegram bot API and responding to the approprite chat_id with the word "Polo!!"
//   // Remember to use your own API toked instead of the one below  "https://api.telegram.org/bot<your_api_token>/sendMessage"
//   axios
//     .post(
//       'https://api.telegram.org/bot895129332:AAFeYQiYLOfQYjw4hwMIo5Ici8ve6qPMpxc/sendMessage',
//       {
//         chat_id: message.chat.id,
//         text: 'Polo!!'
//       }
//     )
//     .then(response => {
//       // We get here if the message was successfully posted
//     //   console.log('Message posted')
//       res.end('ok')
//     })
//     .catch(err => {
//       // ...and here if it was not
//       console.log('Error :', err)
//       res.end('Error :' + err)
//     })
//   } catch (err) {
//     console.log(err);
//   }
// })
// 
// // Finally, start our server
// app.listen(8080, '0.0.0.0');

 'use strict';
 
 const express = require('express');
 
 // константы
 const port = 8080;
 const host = '0.0.0.0';
 
 // приложение
 const app = express();
 app.get('/', (req, res) => {
   res.send('Hello World');
 });
 
 app.listen(port, host);
 console.log(`running on http://${host}:${port}`);
