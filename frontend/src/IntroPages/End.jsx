import React from "react";
import { FaCode } from "react-icons/fa";

const End = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 text-center md:text-left">
        
     
        <p className="text-black dark:text-white text-sm sm:text-base">
          © 2025 <span className="font-semibold">Applistation</span>. All Rights Reserved. <br className="sm:hidden" />
          Built with ❤️ for job seekers.
        </p>

       
        <p className="flex items-center gap-2 text-black dark:text-white text-sm sm:text-base">
          Developed by <FaCode className="text-blue-500" /> 
          <span className="font-semibold">Raj Shukla</span>
          <FaCode className="text-blue-500" />
        </p>
      </div>
    </footer>
  );
};

export default End;
