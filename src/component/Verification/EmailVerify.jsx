import React, { useState, useContext, useRef } from "react";
import { Box, Typography, TextField, Button, FormControl } from "@mui/material";
import { Link } from "react-router-dom";
import { randomToken } from "../../utils/utilFunctions";
import emailjs from "@emailjs/browser";
import Cookie from "universal-cookie";
import { SignUpContext } from "../SummonLogin/SummonSignUpComponent";
import { LoginContext } from "../SummonLogin/SummonLoginComponent";

const EmailVerify = ({ watch, register, setVerify }) => {
  const signUp = useContext(SignUpContext);
  const login = useContext(LoginContext);
  const loginRef = useRef(null);

  const moveLoginHandler = () => {
    signUp?.signUpDltHandler();
    login?.loginSummonHandler();
  };

  const onEmailSubmit = () => {
    const randomTok = randomToken();
    const { firstName } = watch();
    console.log(firstName);
    // console.log(data);
    // const cookie = new Cookie();
    // const emailMessage = {
    //   from_name: "SERP-support team",
    //   to_name: data.firstName + " " + data.lastName,
    //   reply_to: data.email,
    //   message: randomTok,
    // };
    // emailjs
    //   .send(
    //     "service_i0oy3vp",
    //     "template_cjmgku6",
    //     emailMessage,
    //     "ohIkuAroMbBldjcPE"
    //   )
    //   .then(
    //     (result) => {
    //       cookie.set("email-verify", randomTok, { path: "/", maxAge: 60 });
    //       setVerify((curr) => !curr);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  };

  return (
    <Box>
      <form onSubmit={onEmailSubmit}>
        <FormControl sx={{ display: "flex" }}>
          <TextField
            name="firstName"
            {...register("firstName", { required: true })}
            sx={{ outline: "none", border: "none" }}
          />
          <TextField
            name="lastName"
            {...register("lastName", { required: true })}
          />
          <TextField name="email" {...register("email")} />
          <Button type="submit">Get code</Button>
          <Link className="gologinlink" onClick={moveLoginHandler}>
            <Typography>Already Have an Account ? Log In</Typography>
          </Link>
        </FormControl>
      </form>
    </Box>
  );
};

export default EmailVerify;
