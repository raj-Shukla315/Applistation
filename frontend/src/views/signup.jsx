import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils/Toastutils";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [SignupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setisLoggedIn } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = SignupInfo;

    if (!name || !email || !password) {
      handleError("All fields are required");
      return;
    }

    try {
      const url = "https://applistation.onrender.com/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SignupInfo),
      });
      const result = await response.json();

      const { message, success, error, jwtToken, name } = result;
      if (success) {
        localStorage.setItem("jwt", result.jwtToken);
        localStorage.setItem("loggedInUser", name || result.name);
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);

        setisLoggedIn(true);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="flex mt-8 items-center justify-center px-4 pt-16 ">
      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-3 max-w-md w-full bg-white p-6 rounded-2xl relative shadow-md dark:bg-gradient-to-b from-black to-blue-900"
      >
        <p className="text-2xl text-blue-600 font-semibold relative pl-8">
          SignUp
          <span className="absolute left-0 top-1.5 h-4 w-4 bg-blue-700 rounded-full"></span>
          <span className="absolute left-0 top-1.5 h-4 w-4 bg-blue-700 rounded-full animate-ping"></span>
        </p>
        <p className="text-gray-600 dark:text-white text-sm">
          Signup now and get full access to our app.
        </p>

        <div className="flex gap-3">
          <label className="relative w-full">
            <input
              onChange={handleChange}
              name="name"
              value={SignupInfo.name}
              type="text"
              className="w-full px-3 py-2 pb-5 border border-gray-300 rounded-lg outline-none  dark:text-white"
              placeholder="Enter Your Name"
            />
          </label>
        </div>

        <label className="relative">
          <input
            onChange={handleChange}
            name="email"
            value={SignupInfo.email}
            type="email"
            className="w-full px-3 py-2 pb-5 border border-gray-300 rounded-lg outline-none  dark:text-white"
            placeholder="Enter Your Email"
          />
        </label>

        <label className="relative">
          <input
            onChange={handleChange}
            name="password"
            value={SignupInfo.password}
            type="password"
            className="w-full px-3 py-2 pb-5 border border-gray-300 rounded-lg outline-none  dark:text-white"
            placeholder="Enter Your Password"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg transition duration-300 dark: bg-gradient-to-r from-blue-400 to-blue-700"
        >
          Signup
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 hover:underline dark:text-cyan-300">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
