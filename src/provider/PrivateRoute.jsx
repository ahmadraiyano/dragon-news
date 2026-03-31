import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  } else if (user && user.email) {
    return children;
  } else {
    return <Navigate to="/auth/login"></Navigate>;
  }
};

export default PrivateRoute;
