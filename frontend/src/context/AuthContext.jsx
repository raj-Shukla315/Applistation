import React from "react";
import { createContext, useEffect, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    try {
      const token = localStorage.getItem("jwt");

      if (token && typeof token == "string") {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          localStorage.removeItem("jwt");
          setisLoggedIn(false);
        } else {
          setisLoggedIn(true);
        }
      }
    } catch (error) {
      setisLoggedIn(false);
    }
  }, []);

   const Logout = () => {
    localStorage.removeItem("jwt");
    setisLoggedIn(false);
  };

 
 
  return (
    <AuthContext.Provider value={{ isLoggedIn, setisLoggedIn, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
