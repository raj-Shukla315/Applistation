import React , {useContext} from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
const DashboardIntro = () =>{

  const{isLoggedIn , Logout }=useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = ()=>{
    if(isLoggedIn){
      navigate("/dashboard")
    }
    else{
      navigate("/login")
    }
  }

 return(
   
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-8 bg-transparent rounded-2xl ">
      {/* Content */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-blue-500"><span className="dark:text-white text-black">Activity</span> Dashboard</h2>
        <p className="text-black dark:text-blue-300 mb-3 text-base">
          The Dashboard is the heart of Applistation, designed to give 
          users a complete overview of their job application journey in one place. 
          Instead of juggling multiple spreadsheets or notes, 
          the dashboard organizes everything neatly and visually.
        </p>
        <ul className="list-disc list-inside text-black dark:text-blue-300 space-y-4">
          <li><span className="font-bold text-blue-500">Centralized Overview,</span> – View all your applications and interviews in one place.</li>
          <li><span className="font-bold text-blue-500">Progress Tracking</span> – Monitor monthly stats and visualize your growth with charts.</li>
          <li><span className="font-bold text-blue-500">Quick Notifications</span> – Stay updated on deadlines, reminders, and important alerts instantly.</li>
        </ul>

        <button onClick={handleClick} className="bg-gradient-to-b from-blue-400 to-blue-900 text-white p-2 rounded mt-9">View Dashboard</button>
      </div>

      {/* Image */}
      <div className="flex justify-center hidden sm:block ">
        <img
          src="/pagesImg/dashBoardimg.png"
          alt="Dashboard Preview"
          className="rounded-xl shadow-md max-w-full hidden dark:block "
        />
        <img
          src="/pagesImg/Ldashboardimg.png"
          alt="Dashboard Preview"
          className="rounded-xl shadow-md max-w-full block dark:hidden"
        />
      </div>
    </section>
  


 );
}
export default DashboardIntro