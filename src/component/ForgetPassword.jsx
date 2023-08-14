import React, { useContext, useRef, useState } from "react";
import { BiX } from "react-icons/bi";
import { Typography } from "@mui/material";
import "./LoginSection.scss";
import { LoginContext } from "./SummonLogin/SummonLoginComponent";
import { randomToken } from "../utils/utilFunctions";
import { baseUrl } from "../utils/utilFunctions";
import axios from "axios";
import emailjs from "@emailjs/browser";

const ForgetPassword = ({ verify, setVerify }) => {
  const password = useRef(null);
  const login = useContext(LoginContext);

  const deleteHandleClick = (event) => {
    if (event.target === password.current) {
      login?.forgotPasswordDeleteHandler();
    }
  };

  const forgetPasswordSend = async (e) => {
    e.preventDefault();
    const randomTok = randomToken();
    try {
      const sendVerify = await axios.post(`${baseUrl}auth/forget-password`, {
        email: verify,
        otp: `${randomTok}`,
      });
      console.log(sendVerify.data);
      if (sendVerify && sendVerify.data?.status === "success") {
        const emailMessage = {
          from_name: "SERP-support team",
          to_name: "hello",
          reply_to: verify,
          message: randomTok,
        };
        await emailjs.send(
          "service_thcdbte",
          "template_cv4mutu",
          emailMessage,
          "AckxIGcSUu7dGG0RA"
        );

        login?.verifyCodeHandler();
      }
    } catch (error) {}
  };

  return (
    <div
      className={login?.forgotpass ? "Login" : "Login hidden"}
      ref={password}
      onClick={deleteHandleClick}
    >
      <div className="login-form">
        <button
          className="delete-btn"
          onClick={login?.forgotPasswordDeleteHandler}
        >
          <BiX />
        </button>
        <form onSubmit={forgetPasswordSend}>
          <Typography
            variant="h2"
            sx={{ width: "100%", textAlign: "center", fontSize: "25px" }}
          >
            Forget Password
          </Typography>
          <div className="form-box">
            <div className="forget">
              <label htmlFor="email">
                <Typography>Email</Typography>
              </label>
            </div>
            <input
              type="email"
              id="email"
              onChange={(e) => setVerify(e.target.value)}
            />
          </div>

          <button className="log-btn">Log into an account</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
