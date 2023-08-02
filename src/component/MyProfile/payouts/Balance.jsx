import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Money from "./Money";
import { useSelector } from "react-redux";

const date = new Date();

const Balance = ({ setCashingOut }) => {
  const balance = useSelector((state) => state.user.balance);
  const max1100 = useMediaQuery("(max-width:1100px)");
  console.log(balance);
  return (
    <Box
      sx={{
        width: "100%",
        height: max1100 ? 120 : 240,
        padding: 3,
        background: "white",
        borderRadius: 6,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Typography>Balance</Typography>
        <Typography>{date.toDateString()}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: max1100 ? "row" : "column",
          alignItems: "flex-start",
        }}
      >
        {/* this comes from money component  */}
        <Money test={1} status="now" amount={balance} />
        <Button
          variant="contained"
          onClick={() => setCashingOut((curr) => !curr)}
        >
          Cash out
        </Button>
      </Box>
    </Box>
  );
};

export default Balance;
