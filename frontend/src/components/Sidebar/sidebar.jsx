import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  FaClipboardList,
  FaBookmark,
  FaShoppingBag,
  FaBook,
  FaSignOutAlt,
 
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  const {isLoggedIn , Logout } = useContext(AuthContext)
  const navigate = useNavigate();
  return (
    <>
      <button
  className="block md:hidden fixed top-auto left-2 z-50 p-2 bg-transparent rounded-sm"
  onClick={() => setOpen(!open)}
>
  <div className="w-4 h-3 flex flex-col justify-between">
    {/* Bar 1 */}
    <span
      className={`block h-[1.5px] dark:bg-cyan-300 bg-black rounded transition-transform duration-300 ${
        open ? "rotate-45 translate-y-[9px]" : ""
      }`}
    ></span>

    {/* Bar 2 */}
    <span
      className={`block h-[1.5px] dark:bg-cyan-300 bg-black rounded transition-all duration-300 ${
        open ? "opacity-0" : "opacity-100"
      }`}
    ></span>

    {/* Bar 3 */}
    <span
      className={`block h-[1.5px] dark:bg-cyan-300 bg-black rounded transition-transform duration-300 ${
        open ? "-rotate-45 -translate-y-[2px]" : ""
      }`}
    ></span>
  </div>
</button>

      {/* Sidebar for desktop */}
      <div className="hidden  md:block bg-white shadow w-64 h-screen top-auto p-6 space-y-6 fixed left-0 dark:bg-gradient-to-b from-black to-blue-500">
        <nav className="flex flex-col space-y-4 text-black gap-7 overflow-y-auto dark:text-white">
          <Link className = " hover:text-blue-600 dark:hover:text-cyan-300" to="/dashboard"><AiFillAppstore /> Dashboard</Link>
          <Link className = " hover:text-blue-600 dark:hover:text-cyan-300" to="/dashboard/myapplication"><FaClipboardList /> My Applications</Link>
          <Link className = " hover:text-blue-600 dark:hover:text-cyan-300" to="/dashboard/resume-score"><FaBookmark /> Resume Score</Link>
          <Link className = " hover:text-blue-600 dark:hover:text-cyan-300" to="/dashboard/job-hunt"><FaShoppingBag /> Start Job Hunt </Link>
          <Link className = " hover:text-blue-600 dark:hover:text-cyan-300" to="/dashboard/prep-up" onClick={() => setOpen(false)}><FaBook /> Prep Up</Link>
          {isLoggedIn && (<button className = "flex gap-2 mt-20 hover:text-blue-600 dark:hover:text-cyan-300"  onClick={()=>{Logout(),navigate("/login");}}><MdLogout /> Log out</button>)}
        </nav>
      </div>

      {/* Sidebar for mobile (slide-in from left) */}
      <div
        className={`block md:hidden dark:bg-gradient-to-b from-black to-blue-500 fixed top-auto left-0 h-full w-64 bg-white shadow transform transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-4 text-black  dark:text-white gap-4 p-6 overflow-y-auto   ">
          <Link className = " hover:text-blue-600 dark:hover:text-cyan-300" to="/dashboard" onClick={() => setOpen(false)}><AiFillAppstore /> Dashboard</Link>
          <Link className = " hover:text-blue-600 dark:hover:text-cyan-300" to="/dashboard/myapplication" onClick={() => setOpen(false)}><FaClipboardList /> My Applications</Link>
          <Link className = " hover:text-blue-600 dark:hover:text-cyan-300" to="/dashboard/resume-score" onClick={() => setOpen(false)}><FaBookmark /> Resume Score</Link>
          <Link className = " hover:text-blue-600 dark:hover:text-cyan-300" to="/dashboard/job-hunt" onClick={() => setOpen(false)}><FaShoppingBag /> Start Job Hunt</Link>
          <Link className = " hover:text-blue-600 dark:hover:text-cyan-300" to="/dashboard/prep-up" onClick={() => setOpen(false)}><FaBook /> Prep Up</Link>
          {isLoggedIn && (<button className = "flex gap-2 mt-24 hover:text-blue-600 dark:hover:text-cyan-300"  onClick={()=>{Logout(),navigate("/login");}}><MdLogout />Log out</button>)}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
