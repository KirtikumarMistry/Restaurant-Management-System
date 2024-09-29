const nodemailer=require('nodemailer')
require('dotenv').config()
const sendmail=async (email,title,body) =>
{
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        auth: {
          user:  process.env.MAIL_USER,
          pass:  process.env.MAIL_PASS,
        },
      });
      const info = await transporter.sendMail({
        from: `DineSmart`, // sender address
        to: email, // list of receivers
        subject: title, 
        html: body, // html body
      });

      return info
    
}
module.exports=sendmail