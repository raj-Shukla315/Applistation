
import Sidebar from '../components/Sidebar/sidebar'
import DashboardCards from '../components/dashboardcomponents/dashboardCards'
import React, { useEffect, useState } from 'react';
import axios from "../../utils/AxiosInstance";
import MonthlyActivity from '../components/dashboardcomponents/MonthlyActivity'
const Dashboard = () => {
  const [applications , setApplications] = useState([])

  useEffect(()=>{
    const fetchApplication = async ()=>{
      try{
        const res = await axios.get("/getApplication");
        setApplications(res.data);

      } 
      catch(err){
        console.log("Failed to fetch Applications", err);
      }
    }
    fetchApplication();
  },[])

  const totalApplications = applications.length;
  const interviewScheduled = applications.filter(app=>app.status === "Interview").length
   const offerRecieved = applications.filter(app=>app.status === "Offer").length
  return (
    <div className="flex bg-[#f8f9fd] min-h-screen dark:bg-gradient-to-b from-black to-blue-500">
      
      <main className="flex-1 p-4 space-y-4 overflow-y-auto">
        <h1 className="sm:text-base md:text-xl font-bold dark:text-white">My <span className='text-blue-500'>Dashboard</span></h1>
        <DashboardCards totalApplications={totalApplications} interviewsScheduled={interviewScheduled} offerRecieved ={offerRecieved} />

        <div className="grid md:grid-cols-1 gap-4">
          <MonthlyActivity/>
          {/* <ResumeAnalyzer /> */}
        </div>

        {/* <SavedJobs /> */}
      </main>
    </div>
  );
};

export default Dashboard;