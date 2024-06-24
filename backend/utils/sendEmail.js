const nodemailer = require("nodemailer");
const catchAsyncErr = require("../middleware/catchAsyncErr");

exports.sendEmail = catchAsyncErr ( async(options)=>{

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587
,    service :"gmail" ,
secure:true,
    auth :{
      
      type: "login",
      user:process.env.MAIL_USER,
      pass:process.env.MAIL_PASSWORD
    }
  })

  const mailOptions={
    
    from :  process.env.MAIL_USER, 
    to:options.email, 
    subject:options.subject, 
    text:options.message
  }

  await   transport.sendMail(mailOptions);

})