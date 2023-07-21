import React from "react";
import LoginSection from "../component/LoginSection";
import { SignUp } from "../component/SignUp";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const Root = () => {
  return (
    <>
      <LoginSection />
      <SignUp />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
