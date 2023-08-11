import React, { useContext, useRef } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { BiX } from "react-icons/bi";
import { SignUpContext } from "../SummonLogin/SummonSignUpComponent";
import { LoginContext } from "../SummonLogin/SummonLoginComponent";
import "./emailVerify.scss";

const EmailVerify = ({ setUserInfo, userInfo }) => {
  const signUp = useContext(SignUpContext);
  const login = useContext(LoginContext);
  const loginRef = useRef(null);

  const moveLoginHandler = () => {
    signUp?.signUpDltHandler();
    login?.loginSummonHandler();
  };

  const onEmailSubmit = (e) => {
    e.preventDefault();
    signUp?.emailVerifyhandlerHandler();
    signUp?.verifyhandler();
  };

  const deleteHandleClick = (event) => {
    if (event.target === loginRef.current) {
      signUp?.verifyDeletehandler();
    }
  };

  return (
    <div
      className={signUp?.emailVerify ? "SignUp " : "SignUp hidden"}
      ref={loginRef}
      onClick={deleteHandleClick}
    >
      <div className="SignUp-form">
        <button
          className="delete-btn"
          onClick={signUp?.emailVerifyhandlerHandler}
        >
          <BiX />
        </button>
        <form onSubmit={onEmailSubmit}>
          <div className="Name-Box">
            <div>
              <label>
                <Typography>First Name</Typography>
              </label>
              <input
                type="text"
                onChange={(event) =>
                  setUserInfo({ ...userInfo, firstName: event.target.value })
                }
              />
            </div>
            <div>
              <label>
                <Typography>Last Name</Typography>
              </label>
              <input
                type="text"
                onChange={(event) =>
                  setUserInfo({ ...userInfo, lastName: event.target.value })
                }
              />
            </div>
          </div>
          <div className="personInfo-box">
            <label>
              <Typography>Email *</Typography>
            </label>
            <input
              type="email"
              id="email"
              onChange={(event) =>
                setUserInfo({ ...userInfo, email: event.target.value })
              }
            />

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

export default EmailVerify;
