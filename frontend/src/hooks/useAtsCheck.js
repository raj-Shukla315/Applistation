import axios from "axios";
import { useState } from "react";
import axiosUpload from "../../utils/axiosUpload";

export default function useAtsCheck (){
 const[feedback , setfeedback] = useState(null);
 const[loading , setloading] = useState(false);
 
const checkAts = async (resumeFile , jdText)=>{
 try{
   setloading(true);
  const formdata = new FormData();
  formdata.append("resume",resumeFile);
  formdata.append("jd",jdText);

  const{data} = await axiosUpload.post("/ats-check",formdata);
  setfeedback(data.feedback);
}
catch(err){
 console.error(err);
 setfeedback(null);
}
finally{
 setloading(false);
}
}

return {loading , feedback ,checkAts}
}