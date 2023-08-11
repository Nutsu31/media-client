import React, { useState, useContext, useRef } from "react";
import { Box, Typography, TextField, Button, FormControl } from "@mui/material";
import { Link } from "react-router-dom";
import { randomToken } from "../../utils/utilFunctions";
import emailjs from "@emailjs/browser";
import Cookie from "universal-cookie";
import { SignUpContext } from "../SummonLogin/SummonSignUpComponent";
import { LoginContext } from "../SummonLogin/SummonLoginComponent";


const OtpVerify = ({ setOtp, setVerify }) => {
  const signUp = useContext(SignUpContext);
  const login = useContext(LoginContext);
  const loginRef = useRef(null);

  const moveLoginHandler = () => {
    signUp?.signUpDltHandler();
    login?.loginSummonHandler();
  };

  const onEmailSubmit = handleSubmit((data) => {
    const randomTok = randomToken();
    console.log(data);
    const cookie = new Cookie();
    const emailMessage = {
      from_name: "SERP-support team",
      to_name: data.firstName + " " + data.lastName,
      reply_to: data.email,
      message: randomTok,
    };
    emailjs
      .send(
        "service_i0oy3vp",
        "template_cjmgku6",
        emailMessage,
        "ohIkuAroMbBldjcPE"
      )
      .then(
        (result) => {
          cookie.set("email-verify", randomTok, { path: "/", maxAge: 60 });
        },
        (error) => {
          console.log(error);
        }
      );
  });

  return (
    <Box>
      <form onSubmit={onEmailSubmit}>
        <FormControl sx={{ display: "flex" }}>
          <TextField value={otp} onChange={(e) => setOtp(e.target.value)} />
          <Button type="submit">Get code</Button>
          <Link className="gologinlink" onClick={moveLoginHandler}>
            <Typography>Already Have an Account ? Log In</Typography>
          </Link>
        </FormControl>
      </form>
    </Box>
  );
};

export default OtpVerify;
