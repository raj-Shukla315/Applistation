import React , {useContext} from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const AtsIntro = () =>{
   const{isLoggedIn , Logout }=useContext(AuthContext);
   const navigate = useNavigate();
 
   const handleClick = ()=>{
     if(isLoggedIn){
       navigate("/dashboard/resume-score")
     }
     else{
       navigate("/login")
     }
   }
 return(
   
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-8 bg-transparent rounded-2xl ">
      {/* Content */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-blue-500 "><span className="dark:text-white text-black">ATS</span> Analyzer</h2>
        <p className="text-black dark:text-blue-300 mb-3 text-base">
          Applying for jobs is more than just uploading your resume – it’s about making sure your resume 
          actually passes the ATS (Applicant Tracking System) filters that recruiters use. 
          The Applistation ATS Checker helps you optimize your resume for better visibility.
        </p>
        <ul className="list-disc list-inside text-black dark:text-blue-300 space-y-4">
          <li><span className="font-bold text-blue-500">Instant Score</span> – Upload your resume and job description to get an ATS compatibility score.</li>
          <li><span className="font-bold text-blue-500">Weakness Detection</span>– Identify missing keywords, weak formatting, and areas that lower your chances.</li>
          <li><span className="font-bold text-blue-500">Smart Suggestions</span> – Get actionable tips to improve structure, phrasing, and relevance.</li>
          <li><span className="font-bold text-blue-500">Grammar & Clarity Check</span> – Ensure your resume is polished and professional.</li>
        </ul>
        <button onClick={handleClick} className="bg-gradient-to-b from-blue-400 to-blue-900 text-white p-2 rounded mt-9">Check ATS Score</button>
      </div>

      {/* Image */}
      <div className="flex justify-center hidden sm:block ">
        <img
          src="/pagesImg/atsimg.png"
          alt="Dashboard Preview"
          className="rounded-xl shadow-md max-w-full hidden dark:block "
        />
        <img
          src="/pagesImg/Latsimg.png"
          alt="Dashboard Preview"
          className="rounded-xl shadow-md max-w-full block dark:hidden"
        />
      </div>
    </section>
  


 );
}
export default AtsIntro