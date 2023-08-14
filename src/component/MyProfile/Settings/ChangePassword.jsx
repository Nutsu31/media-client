import { Box, TextField } from "@mui/material";
import React from "react";

const ChangePassword = ({ editUserInfo, setEditUserInfo }) => {
  const { currentPassword, newPassword, confirmPassword } =
    editUserInfo.password;

  const validate =
    newPassword !== "" &&
    newPassword &&
    confirmPassword &&
    currentPassword !== "";

  const handleChange = (setState, change, event) => {
    if (change === "newPassword") {
      setState({
        ...editUserInfo,
        password: { ...editUserInfo.password, newPassword: event.target.value },
      });
    } else if (change === "confirmPassword") {
      setState({
        ...editUserInfo,
        password: {
          ...editUserInfo.password,
          confirmPassword: event.target.value,
        },
      });
    } else if (change === "currentPassword") {
      setState({
        ...editUserInfo,
        password: {
          ...editUserInfo.password,
          currentPassword: event.target.value,
        },
      });
    }
  };

  return (
    <Box sx={{ margin: "8px 0" }}>
      <TextField
        required
        value={currentPassword}
        label="Current Password"
        type="password"
        onChange={(e) => handleChange(setEditUserInfo, "currentPassword", e)}
        color={validate ? "success" : "error"}
      />
      <TextField
        required
        value={newPassword}
        label="New Password"
        type="password"
        onChange={(e) => handleChange(setEditUserInfo, "newPassword", e)}
        color={validate ? "success" : "error"}
      />
      <TextField
        required
        value={confirmPassword}
        label="Confirm Password"
        type="password"
        onChange={(e) => handleChange(setEditUserInfo, "confirmPassword", e)}
        color={validate ? "success" : "error"}
      />
    </Box>
  );
};

export default ChangePassword;
