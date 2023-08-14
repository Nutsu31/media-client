import React, { useContext, useRef, useState } from "react";
import { LoginContext } from "./SummonLogin/SummonLoginComponent";
import { Typography } from "@mui/material";
import { baseUrl } from "../utils/utilFunctions";
import "./LoginSection.scss";
import { BiX } from "react-icons/bi";
import axios from "axios";

const UpdatePassword = ({ email }) => {
  const login = useContext(LoginContext);
  const password = useRef(null);
  const [passwordChange, setPasswordChange] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const deleteHandleClick = (event) => {
    if (event.target === password.current) {
      login?.changePasswordDeleteHandler();
    }
  };

  const sendNewPassword = async (e) => {
    e.preventDefault();
    try {
      if (passwordChange === repeatPassword) {
        await axios.post(`${baseUrl}auth/replace-password`, {
          email: email,
          password: passwordChange,
        });

        login?.changePasswordDeleteHandler();
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div
      className={login?.changePassword ? "Login" : "Login hidden"}
      ref={password}
      onClick={deleteHandleClick}
    >
      <div className="login-form">
        <button
          className="delete-btn"
          onClick={login?.changePasswordDeleteHandler}
        >
          <BiX />
        </button>
        <form onSubmit={sendNewPassword}>
          <Typography
            variant="h2"
            sx={{ width: "100%", textAlign: "center", fontSize: "25px" }}
          >
            change Password
          </Typography>
          <div className="form-box">
            <div className="forget">
              <label>
                <Typography>Password</Typography>
              </label>
            </div>
            <input
              type="password"
              onChange={(e) => setPasswordChange(e.target.value)}
            />
          </div>

          <div className="form-box">
            <div className="forget">
              <label>
                <Typography>Repeat Password</Typography>
              </label>
            </div>
            <input
              type="password"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>

          <button className="log-btn">Log into an account</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
