import "./Header.scss";
import { useState, useContext, useEffect } from "react";
import { LoginContext } from "./SummonLogin/SummonLoginComponent";
import { SignUpContext } from "./SummonLogin/SummonSignUpComponent";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth/AuthContext";
import { useDispatch } from "react-redux";
import { ACTION } from "../redux/filterActions";
import { Typography } from "@mui/material";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const login = useContext(LoginContext);
  const signup = useContext(SignUpContext);
  const { currentUser, logoutHandlerFunction } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ACTION.FETCH_USER_DATA, payload: currentUser });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, login, signup]);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <Typography variant="h4">Serp Support</Typography>
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
              <button className="sign_up" onClick={signup?.signUpHandler}>
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

export default Header;
