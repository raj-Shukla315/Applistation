const nodemailer = require("nodemailer");

const SendEmail = async(to , subject , message)=>{
 try{
 const Emailtransporter =  nodemailer.createTransport({
  service : "gmail",
  auth:{
  user:process.env.EMAIL_USER,
  pass:process.env.EMAIL_PASS,
  }
 });

 const mailOptions = {
  from: `Applistation <${process.env.EMAIL_USER}>`,
  to,
  subject,
  text:message
 }
  await Emailtransporter.sendMail(mailOptions)
  console.log("Email Sended Successfully")
}
catch(email){
console.log("Something went wrong", email);
}
}

module.exports = SendEmail;