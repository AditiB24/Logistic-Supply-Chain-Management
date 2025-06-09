const nodemailer = require('nodemailer');

async function sendEmailWithAttachment(to, subject, text, filePath) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_ID,
    to,
    subject,
    text,
    attachments: [{ path: filePath }]
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendEmailWithAttachment;
