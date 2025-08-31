import React, { useState } from "react";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex pt-16">
      
      {/* Sidebar (mobile + desktop) */}
      <Sidebar open={open} setOpen={setOpen} />
 
      <main
        className={`flex-1 p-4 overflow-y-auto h-screen transition-all duration-300 dark:bg-gradient-to-b from-black to-blue-500 ${
          open ? "hidden md:block" : "block"
        } md:ml-64`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
