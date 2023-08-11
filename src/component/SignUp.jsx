import React, { useContext, useEffect, useRef, useState } from "react";
import { BiX } from "react-icons/bi";
import "./SignUp.scss";
import { Link, useLocation } from "react-router-dom";
import { SignUpContext } from "./SummonLogin/SummonSignUpComponent";
import { LoginContext } from "./SummonLogin/SummonLoginComponent";
import axios from "axios";
import { Typography } from "@mui/material";
import { baseUrl } from "../utils/utilFunctions";
import { randomToken } from "../utils/utilFunctions";
import emailjs from "@emailjs/browser";
import Cookie from "universal-cookie";
import EmailVerify from "./Verification/EmailVerify";

export const SignUp = ({ userInfo, setUserInfo, setVerify }) => {
  const signUp = useContext(SignUpContext);
  const login = useContext(LoginContext);
  const loginRef = useRef(null);
  const { search } = useLocation();

  const moveLoginHandler = () => {
    signUp?.signUpDltHandler();
    login?.loginSummonHandler();
  };

  const deleteHandleClick = (event) => {
    if (event.target === loginRef.current) {
      signUp?.signUpDltHandler();
    }
  };

  const onSubmit = (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        return;
      }
      // eslint-disable-next-line no-unused-vars

      const userData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        payment: "",
        referralEmail: data.referralEmail,
        referralId: search.includes("?ref=") && search.split("=")[1],
      };
      async function registerUser() {
        const datass = await axios.post(`${baseUrl}auth/register`, userData);
        const res = datass.data;
        console.log("🚀 ~ file: SignUp.jsx:75 ~ registerHandler ~ res:", res);
      }
      registerUser();

      signUp?.signUpDltHandler();
      if (signUp?.btnClassname === "sign_btn") {
        window.location.href = "/cartpage";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={signUp?.SignUp ? "SignUp " : "SignUp hidden"}
      ref={loginRef}
      onClick={deleteHandleClick}
    >
      <div className="SignUp-form">
        <button className="delete-btn" onClick={signUp?.signUpDltHandler}>
          <BiX />
        </button>
        <form onSubmit={onSubmit(userInfo)}>
          <div className="Name-Box">
            <div>
              <label>
                <Typography>First Name</Typography>
              </label>
              <input type="text" value={userInfo?.firstName} />
            </div>
            <div>
              <label>
                <Typography>Last Name</Typography>
              </label>
              <input type="text" />
            </div>
          </div>
          <div className="personInfo-box">
            <label>
              <Typography>Email *</Typography>
            </label>
            <input type="email" id="email" />
            <label>
              <Typography>Your Password</Typography>
            </label>
            <input type="password" id="password" />

            <label>
              <Typography>Confirm Your Password*</Typography>
            </label>
            <input type="password" id="confirmpass" />
            <label>
              <Typography>Referral email</Typography>
            </label>
            <input type="email" id="confirmpass" />

            <Typography>Password Minimum 8 characters</Typography>

            <button className="Continue-btn">
              <Typography>Continue</Typography>
            </button>
            <Link className="gologinlink" onClick={moveLoginHandler}>
              <Typography>Already Have an Account ? Log In</Typography>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
