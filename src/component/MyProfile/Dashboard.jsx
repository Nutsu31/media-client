import { Menu } from "@mui/icons-material";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { memo } from "react";
import { useSelector } from "react-redux";

const Dashboard = ({ setPage, setHideMenu, hideMenu }) => {
  const name = useSelector((state) => state.user?.firstName);
  const max1100 = useMediaQuery("(max-width:1100px)");
  return (
    <Box
      sx={{
        width: "340px",
        height: "100vh",
        padding: max1100 ? 10 : 3,
        background: "#0e243a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: max1100 ? "absolute" : "relative",
        zIndex: 10,
        left: max1100 && hideMenu ? 280 : 0,
        transform: max1100 ? "translateX(-280px)" : "translateX(0px)",
        transition: "0.3s ease",
        gap: 3,
      }}
    >
      {max1100 && (
        <Menu
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            fontSize: 30,
            color: "white",
          }}
          onClick={() => setHideMenu(!hideMenu)}
        />
      )}
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
        onClick={() => setPage(3)}
      >
        Banking Details
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

export default memo(Dashboard);
