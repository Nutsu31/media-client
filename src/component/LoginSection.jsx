import React, { useContext, useRef, useState } from "react";
import "./LoginSection.scss";
import { BiX } from "react-icons/bi";
import { LoginContext } from "./SummonLogin/SummonLoginComponent";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Typography } from "@mui/material";
import { AuthContext } from "./Auth/AuthContext";
import { useDispatch } from "react-redux";
import { ACTION } from "../redux/filterActions";
import { baseUrl } from "../utils/utilFunctions";
const LoginSection = () => {
  const login = useContext(LoginContext);
  const { loginHandlerFunction } = useContext(AuthContext);
  const dispatch = useDispatch();
  const loginRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState(null);
  const [forgetPass, setForgetPass] = useState(null);
  const deleteHandleClick = (event) => {
    if (event.target === loginRef.current) {
      login?.loginDeleteHandler();
    }
  };

  const loginHandler = async (data) => {
    try {
      const loginData = await axios.post(`${baseUrl}auth/login`, data);
      setLoginError(<p className="error">{loginData.data.message}</p>);
      setForgetPass("Forget your password?");
      dispatch({ type: ACTION.FETCH_USER_DATA, payload: loginData.data.user });
      loginHandlerFunction(loginData.data.user, loginData.data.jwt);
      login?.loginDeleteHandler();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={login?.Login ? "Login" : "Login hidden"}
      ref={loginRef}
      onClick={deleteHandleClick}
    >
      <div className="login-form">
        <button className="delete-btn" onClick={login?.loginDeleteHandler}>
          <BiX />
        </button>
        <form
          onSubmit={handleSubmit((data) => {
            loginHandler(data);
          })}
        >
          <Typography variant="h2" sx={{ width: "100%", textAlign: "center" }}>
            Login
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
              {...register("email", { required: "This is required" })}
            />
            {errors.email && <p className="error">{errors?.email?.message}</p>}
          </div>
          <div className="form-box">
            <div className="forget">
              <label htmlFor="password">
                <Typography>Password</Typography>
              </label>
            </div>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "This is required",
                minLength: {
                  value: 6,
                  message: "Min length is 6",
                },
              })}
            />
            {errors.password && (
              <p className="error">{errors?.password?.message}</p>
            )}
          </div>
          <div>
            {loginError !== undefined && loginError}
            {forgetPass !== null && (
              <p
                className="error forgrt"
                onClick={login?.forgotPasswordHandler}
              >
                Forget your password?
              </p>
            )}
          </div>

          <button className="log-btn">Log into an account</button>
        </form>
      </div>
    </div>
  );
};

export default LoginSection;
