import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Settings = () => {
  const user = useSelector((state) => state.user);
  const createdAt = new Date(user?.createdAt).toString();
  console.log(user);
  return (
    user && (
      <Box
        sx={{
          width: "100%",
          padding: 3,
          background: "#d3d3d3",
          display: "flex",
          gap: 4,
        }}
      >
        <Typography variant="h3" sx={{ display: "inline-block" }}>
          Info
        </Typography>
        <Box
          sx={{
            width: 600,
            height: 400,
            background: "white",
            padding: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
            }}
          >
            <Typography>Id:</Typography>
            <Typography>{user?.id}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
            }}
          >
            <Typography>Name:</Typography>
            <Typography>{user?.firstName}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
            }}
          >
            <Typography>Lastname:</Typography>
            <Typography>{user?.lastName}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
            }}
          >
            <Typography>Email:</Typography>
            <Typography>{user?.email}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
            }}
          >
            <Typography>Payment:</Typography>
            <Typography
              sx={{
                color: user?.isActivated ? "green" : "black",
              }}
            >
              {user?.payment ? user.payment : "None"}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
            }}
          >
            <Typography>Subscription:</Typography>
            <Typography sx={{ color: user?.isActivated ? "green" : "black" }}>
              {user?.isActivated ? "Active" : "None"}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
            }}
          >
            <Typography>Referrals:</Typography>
            <Typography>{user?.referral?.length}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
            }}
          >
            <Typography>Referred by:</Typography>
            <Typography>{user?.referralEmail}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
            }}
          >
            <Typography>Registered:</Typography>
            <Typography>{createdAt}</Typography>
          </Box>
        </Box>
      </Box>
    )
  );
};

export default Settings;
