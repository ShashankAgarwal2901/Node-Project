const sgMail = require('@sendgrid/mail');

console.log('hi');

sgMail.setApiKey('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');
const msg = {
  to: 'sa.ofcl97@gmail.com',
  from: 'shashank.agarwal29197@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);