import React from "react";
import { Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import GppBadIcon from "@mui/icons-material/GppBad";

const PaymentError = () => {
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
          background: "#770000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GppBadIcon sx={{ fontSize: 120, fontWeight: 900, color: "white" }} />
      </Box>
      <Typography variant="h2">Payment don't Successful!</Typography>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          width: 180,
          height: 60,
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: 20,
          }}
        >
          go home
        </Typography>
      </Link>
    </Box>
  );
};

export default PaymentError;
