import React, { useState } from "react";
import { AuthContext } from "../context/AuthContext";



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "alu",
    email: "alu@alu.com",
  });
  const authData = {
    user,
    setUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
