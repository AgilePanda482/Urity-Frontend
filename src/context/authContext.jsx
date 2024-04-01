import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { loginRequest } from "../services/auth";
import { verifyTokenRequest } from "../services/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      setIsLogin(true);
      setCurrentUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsLogin(false);
        setLoading(false);
        return setCurrentUser(null);
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
          setIsLogin(false);
          setLoading(false);

          return;
        }

        setIsLogin(true);
        setCurrentUser(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        isLogin(false);
        setCurrentUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        currentUser,
        isLogin,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
