import React, { useContext } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { LoginContext } from "./SummonLogin/SummonLoginComponent";

const Footer = () => {
  const login = useContext(LoginContext);

  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-box-container">
          <div className="box">
            <h2>Logo</h2>
            <p>
              SerpSupport.com makes it easy to find low-competition,
              high-traffic niches for your next blog or authority site.
            </p>
          </div>
          <div className="box">
            <h2>Resources</h2>
            <Link to="/#" style={{ textDecoration: "underline" }}>
              Contact
            </Link>
            <Link
              to="/#"
              onClick={login?.loginSummonHandler}
              style={{ textDecoration: "underline" }}
            >
              Login
            </Link>
          </div>
          <div className="box">
            <h2>Company</h2>
            <ul>
              <li>
                <Link style={{ textDecoration: "underline" }}>About</Link>
              </li>
              <li>
                <Link style={{ textDecoration: "underline" }}>
                  Become an Affiliate
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "underline" }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "underline" }}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "underline" }}>
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div>© 2023 SerpSupport.com</div>
      </div>
    </footer>
  );
};

export default Footer;
