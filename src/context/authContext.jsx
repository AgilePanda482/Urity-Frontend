import React from "react";
import { createContext, useState } from "react";
import { loginRequest } from "../services/auth";

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

  const login = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res.data);
      setCurrentUser(res.data);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        currentUser,
        isLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
