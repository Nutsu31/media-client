import { Box, Button, Typography } from "@mui/material";
import React from "react";
import StripeLogo from "../../../assets/images/stripe-logo.svg";
import { Close } from "@mui/icons-material";
import axios from "axios";
import { baseUrl } from "../../../utils/utilFunctions";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../../../redux/filterActions";
import { useNavigate } from "react-router-dom";
const StripeConnect = ({ setCashingOut }) => {
  const id = useSelector((state) => state.user?.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(id);
  const handleConnect = async () => {
    id &&
      axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        url: `${baseUrl}connect-account`,
        data: {
          id,
        },
      })
        .then((res) => {
          dispatch({
            type: ACTION.UPDATE_PAYOUT_ID,
            payload: res.data.payoutAccId,
          });
          window.location = `${res.data.stripeUrl}`;
        })
        .catch((err) => console.log(err));
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#8181819d",
      }}
    >
      <Box
        sx={{
          width: 600,
          height: 400,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "#fff",
          gap: 6,
        }}
      >
        <Button
          sx={{ fontSize: 30, position: "absolute", right: 16, top: 16 }}
          onClick={() => setCashingOut((curr) => !curr)}
        >
          <Close />
        </Button>
        <Typography variant="h4" sx={{ color: "black" }}>
          Enter your bank details
        </Typography>
        <Button onClick={handleConnect}>
          <img
            src={StripeLogo}
            alt="stripe connect"
            width={100}
            style={{ width: 200, background: "black" }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default StripeConnect;
