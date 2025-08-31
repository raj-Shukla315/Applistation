import React , {useContext} from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const JobportalIntro=()=>{
const{isLoggedIn , Logout }=useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = ()=>{
    if(isLoggedIn){
      navigate("/dashboard/job-hunt")
    }
    else{
      navigate("/login")
    }
  }

 return(

   <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-8 bg-transparent rounded-2xl ">
      {/* Content */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-blue-500 "><span className="dark:text-white text-black">Job</span> Portals</h2>
        <p className="text-black dark:text-blue-300 mb-3 text-base">
         Finding the right opportunity shouldn’t be a hassle. That’s why Applistation
          brings together 35+ trusted job portals in one place. Instead of jumping from site to site
          , you get quick access to all major platforms right from your dashboard.
        </p>
        <ul className="list-disc list-inside text-black dark:text-blue-300 space-y-4">
          <li><span className="font-bold text-blue-500">One-stop Collection</span> - Explore popular job portals like Naukri, LinkedIn, Indeed, Glassdoor, and many more.</li>
                    <li><span className="font-bold text-blue-500">Better Opportunities</span> - Increase your chances by applying across multiple portals in just a few clicks.</li>

          <li><span className="font-bold text-blue-500">Save Time</span> - No need to search individually; all platforms are neatly organized for easy navigation.</li>
          <li><span className="font-bold text-blue-500">Seamless Experience</span> - Jump directly to any portal without leaving Applistation.</li>
        </ul>
        <button onClick={handleClick} className="bg-gradient-to-b from-blue-400 to-blue-900 text-white p-2 rounded mt-9">View Portals</button>
      </div>

      {/* Image */}
      <div className="flex justify-center hidden sm:block ">
        <img
          src="/pagesImg/jobportalimg.png"
          alt="Dashboard Preview"
          className="rounded-xl shadow-md max-w-full hidden dark:block "
        />
        <img
          src="/pagesImg/Ljobportalimg.png"
          alt="Dashboard Preview"
          className="rounded-xl shadow-md max-w-full block dark:hidden"
        />
      </div>
    </section>
 )
}
export default JobportalIntro