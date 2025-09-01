require('dotenv').config();
const mongoose = require("mongoose")

const DBconnection = () =>{
   return mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("MONGODB CONNECTION ESTABLISHED SUCCESSFULLY ✅"))
    .catch((error)=>console.log("DB CONNECTION FAILED ❌"))
}

module.exports = DBconnection;