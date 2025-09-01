import React from "react";
import { useState, useContext } from "react";
import { handleError, handleSuccess } from "../../utils/Toastutils";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { setisLoggedIn } = useContext(AuthContext);
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setloginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      handleError("All fields are required");
      return;
    }
    try {
     const url = "https://applistation.onrender.com/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("jwt", jwtToken);
        localStorage.setItem("loggedInUser", name);

        setisLoggedIn(true);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    
    <div className=" pt-16 px-1 ">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-2.5 max-w-[350px] bg-white p-5 rounded-2xl relative shadow mx-auto mt-8 dark:bg-gradient-to-b from-black to-blue-900"
      >
        <p className="text-[28px] text-blue-600 font-semibold tracking-tight relative flex items-center pl-7 mb-4">
          Login
          <span className="absolute left-0 w-[18px] h-[18px] rounded-full bg-blue-600"></span>
          <span className="absolute left-0 w-[18px] h-[18px] rounded-full bg-blue-600 animate-ping"></span>
        </p>

        <label className="relative">
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter Your Registered Email"
            className="w-full p-2.5 pb-5 border border-gray-400 rounded-lg outline-none peer dark:text-white"
          />
        </label>

        <label className="relative">
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Enter Your Password"
            className="w-full p-2.5 pb-5 border border-gray-400 rounded-lg outline-none peer dark:text-white"
          />
        </label>

        <button
          type="submit"
          className="border-none outline-none bg-blue-600 p-2.5 rounded-lg text-white text-base transition duration-300 hover:bg-blue-700 dark: bg-gradient-to-r from-blue-400 to-blue-700  "
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600 mt-3 dark:text-white">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-600 hover:underline dark:text-cyan-300"
          >
            Signup
          </a>
        </p>
      </form>
      </div>
    
  );
};
export default Login;
