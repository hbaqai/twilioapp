require('dotenv').config();

const twilioSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhoneNumber = process.env.FROM_NUMBER;
const toPhoneNumber = process.env.TO_NUMBER;

const express = require('express');
const router = express.Router();
const client = require('twilio')(twilioSid, twilioAuthToken);

const messageToClient = `Time to change your transmission fluid. Your Audi A4 last had its transmission fluid changed at 32,820 miles. Based on your driving style, we've determined that it's time to change it again (at 70,000 miles).`;

var repliesArray = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* send a customer an sms and show the response on the page */
router.get('/customer', function(req, res, next) {
  client.messages
    .create({
      body: messageToClient,
      from: fromPhoneNumber,
      to: toPhoneNumber
    })
    .then(message => {
      console.log(message);
      res.send(message);
    });

});

/* send a customer an sms and show the response on the page */
router.post('/replies', function(req, res, next) {
  console.log(req.body);
  repliesArray.push(req.body);
  res.sendStatus(200);
});

/* view replies */
router.get('/replies', function(req, res, next) {
  res.send(repliesArray);
});

module.exports = router;
