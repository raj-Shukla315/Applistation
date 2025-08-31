import { Link } from "react-router-dom";
import React, { useState, useEffect,useContext } from "react";

import { AuthContext } from "../context/AuthContext";

const Hero = () => {
 const{isLoggedIn , Logout }=useContext(AuthContext);

 
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight dark:text-white">
          Track Every{" "}
          <span className="text-blue-500">Application</span>, <br />
          Secure Every{" "}
          <span className="text-blue-500">Opportunity</span>.
        </h1>

        <p className="text-lg text-gray-600 dark:text-blue-300 max-w-xl mx-auto lg:mx-0">
          <span className="font-bold">
            "Track Applications. Improve Resumes. Land Jobs."
          </span>{" "}
          <br />
          Stay organized with AI-powered tools designed to simplify your job
          hunt.
        </p>

        <div className="flex justify-center lg:justify-start gap-4">
          {!isLoggedIn ? (
            <Link
              to="/signup"
              className="bg-gradient-to-r from-blue-400 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition text-base sm:text-lg"
            >
              Get Started Free
            </Link>
          ) : (
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition text-base sm:text-lg"
            >
              My Dashboard
            </Link>
          )}
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
        <img
          src="/pagesImg/Tye-Bag.png"
          alt="Job Search Illustration"
          className="w-[90%] max-w-md hidden sm:block"
        />
      </div>
    </section>
  );
};

export default Hero;
