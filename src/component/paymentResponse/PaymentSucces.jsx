import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { Done } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ACTION } from "../../redux/filterActions";
import { baseUrl } from "../../utils/utilFunctions";

const PaymentSucces = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const jwt = JSON.parse(localStorage.getItem("jwt"));
  const data = JSON.parse(localStorage.getItem("data"));

  const handleGetPayment = async () => {
    if (data) {
      axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        url: `${baseUrl}stripe-res`,
        params: {
          clientId: data.id,
          jwtFromHeader: jwt,
        },
      })
        .then((res) => {
          dispatch({
            type: ACTION.PAYMENT_SUCCEED,
            payload: { ...user, payment: res.data.payment_intent.status },
          });
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Box
      sx={{
        width: "100wv",
        height: "80vh",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Box
        sx={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Done sx={{ fontSize: 120, fontWeight: 900, color: "white" }} />
      </Box>
      <Typography variant="h2">Payment Successful!</Typography>
      <Button
        style={{
          textDecoration: "none",
          width: 180,
          height: 60,
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleGetPayment}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: 20,
          }}
        >
          Continue
        </Typography>
      </Button>
    </Box>
  );
};

export default PaymentSucces;
