import "./HomePageSection.scss";
import { memo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import NichesHub from "../Images/nicheshub.png";
import HeroTraffic from "../Images/hero-traffic.png";
import Gardening from "../Images/gardening.png";
import trafficSearch from "../Images/search-traffic.png";
import textCover from "../Images/XMLID_71.png";
import Domain from "../Images/Domain.png";
import LoginSection from "./LoginSection";
import { SignUp } from "./SignUp";
import { Col, Row } from "antd";
import greenThing from "../Images/greenComp.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Auth/AuthContext";
import { SignUpContext } from "./SummonLogin/SummonSignUpComponent";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button } from "@mui/material";
import { ACTION } from "../redux/filterActions";
import { baseUrl } from "../utils/utilFunctions";

const style = {
  padding: "0.5rem 1rem",
  width: "100%",
  maxWidth: "500px",
  textAlign: "center",
};

const HomePageSection = () => {
  const { currentJwt } = useContext(AuthContext);
  const signUp = useContext(SignUpContext);
  const paymentStatus = useSelector((state) => state.user?.payment);
  const userEmail = useSelector((state) => state.user?.email);
  const isActivated = useSelector((state) => state.user?.isActivated);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleRedirect = useCallback(() => {
    navigate("/cartpage");
  }, []);

  return (
    <>
      <LoginSection />
      <SignUp />
      <section className="first_section">
        {/* Home Page Main text Divider */}
        <div className="first_section-container">
          <div className="greeting_text">
            <h1 className="main_text">
              The easiest way to find the most <br />
              <span>Profitable blogging</span> niches
            </h1>
            <p style={{ margin: "0" }}>
              SerpSupport.com makes it easy to find low-competition,
              high-traffic niches <br /> for your next blog or authority site.
              Lifetime access for just $97.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              ❤️"Trusted by 600+ bloggers and niche site operators"
            </p>
            <Link to="/demo">
              <button className="try_free_btn">try for free</button>
            </Link>
          </div>
          <div className="home-img container">
            <img
              src={NichesHub}
              alt="nicheshub"
              className="hero-dashboard-img"
            />
            <img
              src={HeroTraffic}
              alt="herotraffic"
              className="home-herotraffic-img"
            />
          </div>
        </div>
      </section>{" "}
      <div className="triangle-background"></div>
      <section className="home_future-section">
        <div className="home-feature-container container-xxl">
          <div className="feature-section-head">
            <h2>Find The Perfect Niche With Our Smart Filters</h2>
            <p>
              NicheFinder.io lets you quickly filter through 15,000+ domains so
              you can identify high-traffic, low-competition niches for your
              next blog or authority site.
            </p>
          </div>
          <Row gutter={[10, 15]} className="feature-cont" justify="center">
            <Col className="gutter-row">
              <div className="feature-box" style={style}>
                <h3>Quickly analyze the landscape for any niche</h3>
                <p>
                  Easily search for any niche and NicheFinder.io will show you
                  all the key competitors in the space.
                </p>
                <img src={Gardening} alt="gardening" />
              </div>
            </Col>

            <Col className="gutter-row">
              <div className="feature-box" style={style}>
                <h3>Quickly analyze the landscape for any niche</h3>
                <p>
                  Easily search for any niche and NicheFinder.io will show you
                  all the key competitors in the space.
                </p>
                <img src={trafficSearch} alt="gardening" />
              </div>
            </Col>
          </Row>
          <Row
            gutter={[10, 15]}
            className="feature-cont"
            justify="center"
            style={{ overflow: "hidden" }}
          >
            <Col className="gutter-row">
              <div className="feature-box" style={style}>
                <h3>Quickly analyze the landscape for any niche</h3>
                <p>
                  Easily search for any niche and NicheFinder.io will show you
                  all the key competitors in the space.
                </p>
                <img src={textCover} alt="gardening" />
              </div>
            </Col>
            <Col className="gutter-row">
              <div className="feature-box" style={style}>
                <h3>Quickly analyze the landscape for any niche</h3>
                <p>
                  Easily search for any niche and NicheFinder.io will show you
                  all the key competitors in the space.
                </p>
                <img src={Domain} alt="gardening" />
              </div>
            </Col>
          </Row>
        </div>
      </section>{" "}
      <div className="triangle-background"></div>
      <div className="lastSection">
        <section className="StyledMainBox">
          <div className="StyledLeftBox">
            <div className="iconWraper">
              <img className="icon" src={greenThing} alt="img" />
            </div>
            <h2>
              Instantly Find <span> The Perfect </span> Blogging Niche
            </h2>
            <p>
              Instantly discover the best blogging niches. Filter domains on
              search traffic, Domain Authority, Ad Network, and Indexed Pages.
            </p>
          </div>
          <div className="StyledRightBox">
            {currentJwt !== null ? (
              <Button
                disabled={paymentStatus === "succeeded" ? true : false}
                sx={{
                  width: "400px",
                  color: "white",
                  textAlign: "center",
                  background: "#39b54a",
                  borderRadius: "6px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
                onClick={handleRedirect}
              >
                {paymentStatus === "succeeded" ? "Paid" : "Pay Now"}
              </Button>
            ) : (
              <button
                className="sign_btn"
                onClick={(event) => {
                  signUp.signUpHandler(event.target.className);
                }}
              >
                sign up
              </button>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(HomePageSection);
