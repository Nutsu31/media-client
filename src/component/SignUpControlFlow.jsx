import React, { useState } from "react";
import EmailVerify from "./Verification/EmailVerify";
import OtpVerify from "./Verification/OtpVerify";
import { SignUp } from "./SignUp";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";

const SignUpControlFlow = () => {
  const [otp, setOtp] = useState("");
  const [startVerify, setStartVerify] = useState(true);
  const [verify, setVerify] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    referralId: "",
    payment: "",
    referralEmail: "",
    referralId: "",
  });
  return (
    <>
      {startVerify ? (
        <EmailVerify
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setStartVerify={setStartVerify}
          setVerify={setVerify}
        />
      ) : verify ? (
        <OtpVerify setOtp={setOtp} setVerify={setVerify} />
      ) : (
        <SignUp
          userInfo={userInfo}
          setVerify={setVerify}
          setUserInfo={setUserInfo}
        />
      )}
    </>
  );
};

export default SignUpControlFlow;
