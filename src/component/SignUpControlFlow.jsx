import React, { useState } from "react";
import EmailVerify from "./Verification/EmailVerify";
import OtpVerify from "./Verification/OtpVerify";
import { SignUp } from "./SignUp";

const SignUpControlFlow = () => {
  const [otp, setOtp] = useState("");

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    payment: "",
    referralId: "",
  });
  return (
    <>
      <EmailVerify userInfo={userInfo} setUserInfo={setUserInfo} />

      <OtpVerify otp={otp} setOtp={setOtp} userInfo={userInfo} />

      <SignUp userInfo={userInfo} setUserInfo={setUserInfo} />
    </>
  );
};

export default SignUpControlFlow;
