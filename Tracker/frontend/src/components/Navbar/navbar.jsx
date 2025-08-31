import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaUserCircle } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';
import { ThemeContext } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthContext';
import AvatarSelector from '../Avatars/AvatarSelector';

export default function Navbar() {
  
  const{isLoggedIn , Logout }=useContext(AuthContext)
  const {theme , toggleTheme} = useContext(ThemeContext)




  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow dark:bg-gradient-to-t from-[#0a0a0a] to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-0">
            <img src="/icons/AppliLogo.png" alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <span className="text-sm sm:text-base md:text-lg font-bold text-black-500 dark:text-white ">AppliStation</span>
          </Link>

<label className="relative inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    className="sr-only peer"
    checked={theme === "dark"}       // sync with your state
    onChange={toggleTheme}           // toggle on change
  />
  <div
    className="
      w-14 h-7 sm:w-16 sm:h-8 md:w-20 md:h-10
      rounded-full relative
      bg-gradient-to-r from-blue-200 to-blue-600
      peer-checked:from-blue-400 peer-checked:to-blue-950
      transition-all duration-500

      after:content-['☀️']
      after:absolute after:top-1 after:left-1
      after:bg-white after:rounded-full 
      after:h-5 after:w-5 sm:after:h-6 sm:after:w-6 md:after:h-8 md:after:w-8
      after:flex after:items-center after:justify-center
      after:transition-all after:duration-500
      after:shadow-md after:text-sm sm:after:text-base md:after:text-lg

      peer-checked:after:translate-x-7 sm:peer-checked:after:translate-x-8 md:peer-checked:after:translate-x-10
      peer-checked:after:content-['🌙']
    "
  ></div>
</label>


          {/* Right Side Links */}
          {!isLoggedIn ? (
            <div className="flex space-x-1 h-8 gap-0">
              <Link to="/login" className="text-blue-600 dark:text-white hover:bg-blue-950 hover:text-white font-bold rounded-lg sm:px-1 md:px-2 lg:px-4 py-1 text-sm sm:text-base md:text-base lg:text-xl transition-colors duration-300">
                Login
              </Link>
              <Link to="/signup" className="text-blue-600 dark:text-white hover:bg-blue-950 hover:text-white font-bold rounded-lg px-2 py-1 text-sm sm:text-base md:text-base lg:text-xl transition-colors duration-300">
                Signup
              </Link>
            </div>
          ) : (
           <AvatarSelector/>
          )}

         
        </div>

       
      </div>
    </nav>
  );
}
