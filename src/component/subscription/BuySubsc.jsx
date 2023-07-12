import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const BuySubsc = ({ setBuySubs }) => {
  const payment = useSelector((state) => state.user?.payment);
  const email = useSelector((state) => state.user?.email);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "#44444454",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: 500,
          height: 500,
          background: "white",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Button
          sx={{ position: "absolute", right: 16, top: 16 }}
          onClick={() => setBuySubs((curr) => !curr)}
        >
          <Close sx={{ fontSize: 20 }} />
        </Button>
        <Typography variant="h1">$97</Typography>
        <Typography variant="h5">For more access buy Subscription</Typography>
        <Link
          to={payment === "" && email ? "/cartpage" : "/"}
          style={{
            width: 160,
            height: 80,
            background: "black",
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          {payment === "" && email ? "Pay Now" : "Sing up"}
        </Link>
      </Box>
    </Box>
  );
};

export default BuySubsc;
