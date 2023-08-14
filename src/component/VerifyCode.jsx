import React, { useContext, useRef, useState } from "react";
import { LoginContext } from "./SummonLogin/SummonLoginComponent";
import { Typography } from "@mui/material";
import { baseUrl } from "../utils/utilFunctions";
import "./LoginSection.scss";
import { BiX } from "react-icons/bi";
import axios from "axios";

const VerifyCode = ({ verify }) => {
  const login = useContext(LoginContext);
  const password = useRef(null);
  const [code, setCode] = useState("");
  const deleteHandleClick = (event) => {
    if (event.target === password.current) {
      login?.verifyCodeDeleteHandler();
    }
  };

  const verifyCode = async (e) => {
    e.preventDefault();
    try {
      const sendCode = await axios.post(`${baseUrl}auth/verify-code`, {
        email: verify,
        otp: code,
      });
      if (sendCode && sendCode.data?.status === "success") {
        login?.verifyCodeDeleteHandler();
        login?.changePasswordHandler();
      }
    } catch (error) {}
  };
  return (
    <div
      className={login?.verifyCode ? "Login" : "Login hidden"}
      ref={password}
      onClick={deleteHandleClick}
    >
      <div className="login-form">
        <button className="delete-btn" onClick={login?.verifyCodeDeleteHandler}>
          <BiX />
        </button>
        <form onSubmit={verifyCode}>
          <Typography
            variant="h2"
            sx={{ width: "100%", textAlign: "center", fontSize: "25px" }}
          >
            Forget Password
          </Typography>
          <div className="form-box">
            <div className="forget">
              <label>
                <Typography>Code</Typography>
              </label>
            </div>
            <input type="password" onChange={(e) => setCode(e.target.value)} />
          </div>

          <button className="log-btn">Log into an account</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyCode;
