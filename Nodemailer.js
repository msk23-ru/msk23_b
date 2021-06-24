const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'support@msk23.ru',
    pass: 'ymjhyqkctrgmwtrm'
  }
});
module.exports = transporter;