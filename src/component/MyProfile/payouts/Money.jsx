import { Box, Typography } from "@mui/material";
import React from "react";

const Money = ({ test, amount, status, currency }) => {
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <Typography
        variant="h3"
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
