import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Settings = () => {
  const user = useSelector((state) => state.user);
  const createdAt = new Date(user?.createdAt).toLocaleString();
  const theme = useTheme();

  return (
    user && (
      <Box
        sx={{
          width: "100%",
          padding: 3,
          background: "#f2f2f2",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Typography variant="h3">User Information</Typography>
        <Box
          sx={{
            width: "100%",
            maxWidth: 600,
            height: "auto",
            background: "white",
            padding: 3,
            display: "grid",
            gridGap: "10px",
            borderRadius: "6px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <InfoRow label="Id" value={user?.id} />
          <InfoRow label="Name" value={user?.firstName} />
          <InfoRow label="Lastname" value={user?.lastName} />
          <InfoRow label="Email" value={user?.email} />
          <InfoRow
            label="Payment"
            value={user?.payment ? user.payment : "None"}
            color={user?.isActivated ? "green" : "black"}
          />
          <InfoRow
            label="Subscription"
            value={user?.isActivated ? "Active" : "None"}
            color={user?.isActivated ? "green" : "black"}
          />
          <InfoRow label="Referrals" value={user?.referral?.length} />
          <InfoRow label="Referred by" value={user?.referralEmail} />
          <InfoRow label="Registered" value={createdAt} />
        </Box>
      </Box>
    )
  );
};

const InfoRow = ({ label, value, color }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        alignItems: "center",
        borderBottom: "1px solid #e0e0e0",
        paddingBottom: "10px",
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "1fr 2fr",
        },
      }}
    >
      <Typography
        sx={{
          color: "#8c8c8c",
          marginRight: "20px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
          },
        }}
      >
        {label}:
      </Typography>
      <Typography
        sx={{
          color: color || "black",
          fontSize: "16px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
          },
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default Settings;
