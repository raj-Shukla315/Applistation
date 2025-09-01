import { useState,useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from './IntroPages/hero'
import Login from './views/login'
import Signup from './views/signup'
import { ToastContainer } from "react-toastify";
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from './views/dashBoard'
import MyApplications from './views/myApplications'
import Layout from './components/Sidebar/layout'
import AtsChecker from './views/AtsCheck'
import Joblinks from './views/Joblinks'
import BG from './components/BG/BG'
import { AuthProvider } from './context/AuthContext'
import AnimatedImg from './components/AnimatedImg/AnimatedImg'
import  PrepUp  from './views/PrepUp'
import DashboardIntro from './IntroPages/DashboardIntro'
import ApplicationIntro from './IntroPages/ApplicationIntro'
import JobportalIntro from './IntroPages/JobportalIntro'
import AtsIntro from './IntroPages/AtsIntro'
import End from './IntroPages/end'

function App() {
 
const[loading,setloading]=useState(true)

useEffect(()=>{
  const timer = setTimeout(() => {
    setloading(false)
  },2000);

  return ()=> clearTimeout(timer);
},[])

if (loading) {
    return (
      
      <div className="flex justify-center items-center h-screen text-white bg-gradient-to-b from-black to-blue-900">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold flex items-center">
          WELCOME TO&nbsp;
          <span className="flex items-center text-blue-500 gap-0 align-baseline">
            <AnimatedImg />
            PPLISTATION
          </span>
        </h1>
      </div>
      
    );
  }  
  return (
   <>
   <AuthProvider>
   <BG/>
  <Navbar/>
  
  
      <Routes>
        <Route path="/" element={
          <>
          <Hero/>
          <DashboardIntro/>
          <ApplicationIntro/>
          <AtsIntro/>
          <JobportalIntro/>
          <End/>
          </>
        }
          />
       
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Layout/>
            </PrivateRoute>
          }
          
        > 
            <Route index element={<Dashboard />} /> 
            <Route path="myapplication" element={<MyApplications/>}/>
            <Route path="resume-score" element={<AtsChecker/>}/>
            <Route path="job-hunt" element={<Joblinks/>}/>
            <Route path = "prep-up" element={<PrepUp/>}/>
       </Route>
         
    </Routes>
          

      <ToastContainer/>
      </AuthProvider>
   </>
  )
}

export default App
