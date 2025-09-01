require('dotenv').config();
const mongoose = require("mongoose")

const DBconnection = () =>{
   return mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("MONGODB CONNECTION ESTABLISHED SUCCESSFULLY ✅"))
     .catch((error) => {
      console.error("DB CONNECTION FAILED ❌", error); // logs actual error
      throw error; // optional: stop server if DB fails
    });
}

module.exports = DBconnection;
