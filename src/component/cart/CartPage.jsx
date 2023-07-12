import React, { useContext } from "react";
import "./CartPage.scss";
import { MdDoneOutline } from "react-icons/md";
import axios from "axios";
import Layout from "../../Layout/Layout";
import { AuthContext } from "../Auth/AuthContext";
import { LoginContext } from "../SummonLogin/SummonLoginComponent";
import { baseUrl } from "../../utils/utilFunctions";

const CartPage = () => {
  const { currentJwt } = useContext(AuthContext);
  const { loginSummonHandler } = useContext(LoginContext);

  const sendPayRequest = async () => {
    try {
      if (currentJwt !== null) {
        const result = await axios.post(`${baseUrl}pay`, {
          jwt: currentJwt,
        });
        localStorage.setItem("data", JSON.stringify(result.data));
        if (result.data.status === "open") {
          window.location.replace(result.data.url);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="pay-container">
        <div className="StyledPriceBox">
          <h2 className="accec_title">Lifetime Access</h2>
          <h3 className="price_title">$97</h3>
        </div>
        {currentJwt !== null ? (
          <button className="sign_btn" onClick={sendPayRequest}>
            pay
          </button>
        ) : (
          <button className="sign_btn" onClick={loginSummonHandler}>
            Login
          </button>
        )}

        <div className="StyledRightBox">
          <h4>
            <MdDoneOutline style={{ marginRight: "0.5rem" }} />
            Immediate access to our curated database of 15,000 high-traffic
            domains
          </h4>
          <h4>
            <MdDoneOutline style={{ marginRight: "0.5rem" }} />
            Instantly filter domains by Niche, Keywords, Search Traffic, Domain
            Authority, Ad Provider, and Indexed Pages
          </h4>
          <h4>
            <MdDoneOutline style={{ marginRight: "0.5rem" }} /> All data updated
            monthly
          </h4>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
