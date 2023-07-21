import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = ({ setPage }) => {
  const name = useSelector((state) => state.user?.firstName);
  return (
    <Box
      sx={{
        width: "340px",
        minHeight: "100vh",
        padding: 3,
        background: "#0e243a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ color: "#39b54a" }}>
          Welcome {name}
        </Typography>
      </Box>
      <Button
        sx={{
          background: "transparent",
          border: "1px solid white",
          "&:hover": {
            background: "#39b54a",
          },
        }}
        fullWidth
        variant="contained"
        onClick={() => setPage(1)}
      >
        Payout
      </Button>
      <Button
        sx={{
          background: "transparent",
          border: "1px solid white",
          "&:hover": {
            background: "#39b54a",
          },
        }}
        fullWidth
        variant="contained"
        onClick={() => setPage(2)}
      >
        Setting
      </Button>
    </Box>
  );
};

export default Dashboard;
