import React , {useContext} from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const ApplicationIntro=()=>{
  const{isLoggedIn , Logout }=useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleClick = ()=>{
      if(isLoggedIn){
        navigate("/dashboard/myapplication")
      }
      else{
        navigate("/login")
      }
    }

 return(
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-8 bg-transparent rounded-2xl">
      {/* Content */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-blue-500 "><span className="dark:text-white text-black">Track</span> Applications</h2>
        <p className="text-black dark:text-blue-300 mb-3 text-base">
          The Applications feature helps you track every job you apply to, all in one place. No more messy spreadsheets or forgotten deadlines — stay organized and focused on your career journey.
        </p>
        <ul className="list-disc list-inside text-black dark:text-blue-300 space-y-4">
          <li><span className="font-bold text-blue-500">Add New Applications</span> - Log company name, role, status, and interview details.</li>
          <li><span className="font-bold text-blue-500">Track Progress</span> - See where you stand in the hiring pipeline (Applied, Interview, Offer, Rejected).</li>
          <li><span className="font-bold text-blue-500">Organized Records</span> - Access all your applications anytime with clear, structured cards.</li>
          <li><span className="font-bold text-blue-500">Stay Notified </span>- Get reminders for upcoming interviews and follow-ups.</li>
          <li><span className="font-bold text-blue-500">Visual Insights</span> - Understand your application trends and success rate over time.</li>
        </ul>
        <button onClick={handleClick} className="bg-gradient-to-b from-blue-400 to-blue-900 text-white p-2 rounded mt-9">View Applications</button>
      </div>

      {/* Image */}
      <div className="flex justify-center hidden sm:block ">
        <img
          src="/pagesImg/applicationsimg.png"
          alt="Dashboard Preview"
          className="rounded-xl shadow-md max-w-full hidden dark:block"
        />
        <img
          src="/pagesImg/Lapplicationimg.png"
          alt="Dashboard Preview"
          className="rounded-xl shadow-md max-w-full block dark:hidden"
        />
      </div>
    </section>
  
 )
}

export default ApplicationIntro;