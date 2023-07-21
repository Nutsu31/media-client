import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return <>{user !== null ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;
