import "./Header.scss";
import { useState, useContext, useEffect } from "react";
import { LoginContext } from "./SummonLogin/SummonLoginComponent";
import { SignUpContext } from "./SummonLogin/SummonSignUpComponent";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../redux/filterActions";
import { Typography } from "@mui/material";
import { memo } from "react";
import axios from "axios";
import { baseUrl } from "../utils/utilFunctions";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const login = useContext(LoginContext);
  const signup = useContext(SignUpContext);
  const { currentUser, logoutHandlerFunction } = useContext(AuthContext);
  const [currentJwt, setCurrentJwt] = useState(() =>
    JSON.parse(localStorage.getItem("jwt"))
  );
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user?.email);
  const isActivated = useSelector((state) => state.user?.isActivated);
  const paymentStatus = useSelector((state) => state.user?.payment);

  useEffect(() => {
    if (paymentStatus === "succeeded" && !isActivated) {
      axios({
        method: "PUT",
        url: `${baseUrl}update-status`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: userEmail,
          jwt: currentJwt,
        },
      })
        .then((res) => {
          dispatch({
            type: ACTION.FETCH_USER_DATA,
            payload: res.data.updateUser,
          });
          localStorage.setItem("user", JSON.stringify(res.data.updateUser));
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentStatus, userEmail, isActivated]);

  useEffect(() => {
    dispatch({ type: ACTION.FETCH_USER_DATA, payload: currentUser });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, login, signup]);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <Typography variant="h4">SERPSupport</Typography>
        </Link>
        <div className={menuActive ? "right_side" : "right_side hidden"}>
          <nav>
            <li>Dashboard</li>
            <li>
              <LinkScroll
                activeClass="active"
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Features
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                activeClass="active"
                to="StyledMainBox"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Pricing
              </LinkScroll>
            </li>
          </nav>
          {currentUser !== null ? (
            <div className="user_box">
              <Link to="/my-profile" className="Log_out">
                Profile
              </Link>
              <button className="Log_out" onClick={logoutHandlerFunction}>
                logout
              </button>
            </div>
          ) : (
            <div className="button_box">
              <button className="login" onClick={login?.loginSummonHandler}>
                login
              </button>
              <button className="sign_up" onClick={signup.emailVerifyhandler}>
                sign up
              </button>
              <button className="sign_up">logout</button>
            </div>
          )}
        </div>

        {/* when resolutions getting smaller burger menu will appear */}
        <div className="burger" onClick={() => setMenuActive(!menuActive)}>
          <div
            className="line"
            style={
              menuActive
                ? { transform: "rotate(45deg)", top: "40%" }
                : { transform: "none", top: "0" }
            }
          ></div>
          <div
            className="line middleLine"
            style={menuActive ? { opacity: "0" } : { opacity: "1" }}
          ></div>
          <div
            className="line"
            style={
              menuActive
                ? { transform: "rotate(-45deg)", bottom: "55%" }
                : { transform: "none", bottom: "4.5px" }
            }
          ></div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
