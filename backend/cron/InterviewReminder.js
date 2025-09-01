const MyApplications = require("../models/ApplicationModel");
const SendEmail = require("../utils/SendEmail.js")
const cron = require("node-cron")

const StartInterviewReminder = ()=>{

 cron.schedule("0 9 * * *" , async()=>{
  console.log("Interview Reminder Start");

  const today = new Date;
  const Startday = new Date(today.setHours(0,0,0,0))
  const Endday = new Date(today.setHours(23,59,59,999))

  const interviewsToday  = await MyApplications.find({
   interviewDate:{
    $gte: Startday , $lt: Endday,
   },
  }).populate("userId");

  interviewsToday.forEach(app=>{
   if(app.userId && app.userId.email){
    SendEmail(
     app.userId.email,
     "Interview Reminder",
     `Hii ${app.userId.name || "there"}, you have an interview today for ${app.jobTitle} at ${app.companyName}.Good Luck!`
    )
   }
  })

 })
}

module.exports = StartInterviewReminder;