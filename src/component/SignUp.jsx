import React, { useContext, useRef } from "react";
import { BiX } from "react-icons/bi";
import "./SignUp.scss";
import { Link, useLocation } from "react-router-dom";
import { SignUpContext } from "./SummonLogin/SummonSignUpComponent";
import { LoginContext } from "./SummonLogin/SummonLoginComponent";
import axios from "axios";
import { Typography } from "@mui/material";
import { baseUrl } from "../utils/utilFunctions";

export const SignUp = ({ userInfo, setUserInfo }) => {
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

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (userInfo.password !== userInfo.confirmPassword) {
        return;
      }

      const userData = {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        password: userInfo.password,
        payment: "",
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
        <form onSubmit={onSubmit}>
          <div className="Name-Box">
            <div>
              <label>
                <Typography>First Name</Typography>
              </label>
              <input type="text" value={userInfo.firstName} readOnly />
            </div>
            <div>
              <label>
                <Typography>Last Name</Typography>
              </label>
              <input type="text" value={userInfo.lastName} readOnly />
            </div>
          </div>
          <div className="personInfo-box">
            <label>
              <Typography>Email *</Typography>
            </label>
            <input type="email" id="email" value={userInfo.email} readOnly />
            <label>
              <Typography>Your Password</Typography>
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
            />

            <label>
              <Typography>Confirm Your Password*</Typography>
            </label>
            <input
              type="password"
              id="confirmpass"
              onChange={(e) =>
                setUserInfo({ ...userInfo, confirmPassword: e.target.value })
              }
            />

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
