import React, { useState, useContext, useRef, useEffect } from "react";
import { Typography, Button, FormControl } from "@mui/material";
import { Link } from "react-router-dom";
import { randomToken } from "../../utils/utilFunctions";
import emailjs from "@emailjs/browser";
import Cookie from "universal-cookie";
import { SignUpContext } from "../SummonLogin/SummonSignUpComponent";
import { LoginContext } from "../SummonLogin/SummonLoginComponent";
import "./emailVerify.scss";
import "./Otpverify.scss";
import { BiX } from "react-icons/bi";

const OtpVerify = ({ setOtp, userInfo, otp }) => {
  const signUp = useContext(SignUpContext);
  const login = useContext(LoginContext);
  const loginRef = useRef(null);
  const [number, setNumber] = useState(0);

  const moveLoginHandler = () => {
    signUp?.signUpDltHandler();
    login?.loginSummonHandler();
  };

  useEffect(() => {
    if (number === 0) {
      return;
    }
    const interval = setInterval(() => {
      setNumber((prevNumber) => prevNumber - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [number]);

  const onEmailSubmit = (e) => {
    e.preventDefault();
    const randomTok = randomToken();

    const cookie = new Cookie();
    const emailMessage = {
      from_name: "SERP-support team",
      to_name: userInfo.firstName + " " + userInfo.lastName,
      reply_to: userInfo.email,
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
          cookie.set("email-verify", randomTok, { path: "/", maxAge: 70 });
          setNumber(60);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const compareVerify = (e) => {
    e.preventDefault();
    const cookies = new Cookie();
    const myCatCookieValue = cookies.get("email-verify");
    if (otp === myCatCookieValue) {
      signUp.verifyDeletehandler();
      signUp.signUpHandler();
    }
  };

  const deleteHandleClick = (event) => {
    if (event.target === loginRef.current) {
      signUp?.signUpDltHandler();
    }
  };

  return (
    <>
      <div
        className={signUp?.Verify ? "SignUp " : "SignUp hidden"}
        onClick={deleteHandleClick}
      >
        <div className="SignUp-form">
          <button className="delete-btn">
            <BiX />
          </button>
          <form style={{ marginTop: "3rem" }}>
            <p>one time verify</p>
            <FormControl sx={{ display: "flex" }}>
              <input
                onChange={(e) => setOtp(e.target.value)}
                className="textfield"
              />
              {number !== 0 && <span>{number}</span>}
              {number !== 0 ? (
                <Button
                  type="submit"
                  className="Continue-btn"
                  onClick={compareVerify}
                >
                  Send
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="Continue-btn"
                  onClick={onEmailSubmit}
                >
                  Get code
                </Button>
              )}
              <Link className="gologinlink" onClick={moveLoginHandler}>
                <Typography>Already Have an Account ? Log In</Typography>
              </Link>
            </FormControl>
          </form>
        </div>
      </div>
    </>
  );
};

export default OtpVerify;
