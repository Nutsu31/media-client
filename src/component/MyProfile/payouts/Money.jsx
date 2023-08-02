import { Box, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";

const Money = ({ test, amount, status, currency }) => {
  const max1100 = useMediaQuery("(max-width:1100px)");
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <Typography
        variant={max1100 ? "h5" : "h3"}
        sx={{ color: test === 1 ? "#099910" : "#e66109" }}
      >
        {currency ? currency : "$"}
        {amount}
      </Typography>
      <Typography
        sx={{
          color: status === "paid" || status === "now" ? "#099910" : "#e66109",
          padding: 1,
          borderRadius: 2,
          background:
            status === "paid" || status === "now"
              ? "#69ff70"
              : status === "pending"
              ? "#fc934e"
              : "",
        }}
      >
        {status}
      </Typography>
    </Box>
  );
};

export default Money;
