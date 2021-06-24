const express = require('express');
const router  = express.Router();
const transporter = require('../Nodemailer');

router.post('/', async (req, res, next) => {
  try{
    await transporter.sendMail({
      from: 'support@msk23.ru',
      to: 'msk-18@list.ru',
      subject: 'Новая заявка msk23.ru',
      html: `<p>Имя: ${req.body.name}</p><br><p>Телефон: ${req.body.phone}</p><br><p>Почта: ${req.body.email}</p><br><p>Сообщение: ${req.body.message}</p>`
    });
    res.json({status: 200, message: 'ok'});
  } catch(err) {
    res.status(423).json(err);
  }

});


module.exports = router;
