import React, { useContext, useEffect, useRef } from "react";
import { BiX } from "react-icons/bi";
import "./SignUp.scss";
import { Link, useLocation } from "react-router-dom";
import { SignUpContext } from "./SummonLogin/SummonSignUpComponent";
import { LoginContext } from "./SummonLogin/SummonLoginComponent";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Typography } from "@mui/material";
import { baseUrl } from "../utils/utilFunctions";

export const SignUp = () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const registerHandler = async (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        return;
      }
      if (search.includes("?ref=")) {
        console.log(search.split("=")[1]);
      }
      const dataArray = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        payment: "",
        referralEmail: data.referralEmail,
        referralId: search.includes("?ref=") && search.split("=")[1],
      };
      // eslint-disable-next-line no-unused-vars
      const datass = await axios.post(`${baseUrl}auth/register`, dataArray);
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
        <form
          onSubmit={handleSubmit((data) => {
            registerHandler(data);
          })}
        >
          <div className="Name-Box">
            <div>
              <label>
                <Typography>First Name</Typography>
              </label>
              <input
                type="text"
                {...register("firstName", { required: "This is required" })}
              />
              {errors.firstName && (
                <p className="error">{errors?.firstName?.message}</p>
              )}
            </div>
            <div>
              <label>
                <Typography>Last Name</Typography>
              </label>
              <input
                type="text"
                {...register("lastName", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Min length is 4",
                  },
                })}
              />
              {errors.lastname && (
                <p className="error">{errors?.lastname?.message}</p>
              )}
            </div>
          </div>
          <div className="personInfo-box">
            <label>
              <Typography>Email *</Typography>
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "This is required" })}
            />
            {errors.email && <p className="error">{errors?.email?.message}</p>}
            <label>
              <Typography>Your Password</Typography>
            </label>
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
            <label>
              <Typography>Confirm Your Password*</Typography>
            </label>
            <input
              type="password"
              id="confirmpass"
              {...register("confirmPassword", {
                required: "This is required",
                minLength: {
                  value: 6,
                  message: "Min length is 6",
                },
              })}
            />
            <label>
              <Typography>Referral email</Typography>
            </label>
            <input
              type="email"
              id="confirmpass"
              {...register("referralEmail")}
            />
            {errors.confirmPassword && (
              <p className="error">{errors?.confirmPassword?.message}</p>
            )}

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
