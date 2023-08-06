import { Box, TextField, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edit, Done, Close } from "@mui/icons-material";
import { ClipLoader } from "react-spinners";
import { baseUrl } from "../../utils/utilFunctions";
import axios from "axios";
import { ACTION } from "../../redux/filterActions";
const Settings = () => {
  const user = useSelector((state) => state.user);
  const createdAt = new Date(user?.createdAt).toLocaleString();
  const [loader, setLoader] = useState(false);

  const [edit, setEdit] = useState("");
  const [send, setSend] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState({
    firstName: "",
    lastName: "",
  });
  //eslint-disable-next-line
  const [token, setToken] = useState(() =>
    JSON.parse(localStorage.getItem("jwt"))
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (send && token) {
      setLoader(true);
      axios({
        method: "PUT",
        url: `${baseUrl}edit/users/${user.id}`,
        data: editUserInfo,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          setSend(false);
          setLoader(false);
          handleChangeName(res);
        })
        .catch((err) => {
          console.log(err);
          setSend(false);
          setLoader(false);
        });
    }
    localStorage.setItem("user", JSON.stringify(user));
    //eslint-disable-next-line
  }, [send]);

  const handleChangeName = (response) => {
    if (response.status === 200 || response.status === "OK") {
      if (editUserInfo.firstName) {
        dispatch({
          type: ACTION.CHANGE_USER_NAME,
          payload: editUserInfo.firstName,
        });
      } else if (editUserInfo.lastName) {
        dispatch({
          type: ACTION.CHANG_USER_LASTNAME,
          payload: editUserInfo.lastName,
        });
      }
    }
  };

  const handleSetInfo = (e, edit, userObj, setState) => {
    if (edit === "firstName") {
      setState({ ...userObj, firstName: e.target.value });
    } else if (edit === "lastName") {
      setState({ ...userObj, lastName: e.target.value });
    }
    return;
  };

  const handleSend = (setState1, setState2, setState3, edit) => {
    setState1(true);
    setState2("");
    if (edit === "firstName") {
      setState3((curr) => {
        return {
          ...curr,
          lastName: "",
        };
      });
    } else if (edit === "lastName") {
      setState3((curr) => {
        return {
          ...curr,
          firstName: "",
        };
      });
    }
  };

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
          <Box
            sx={{
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <InfoRow
              label="Name"
              value={
                edit === "name" ? (
                  <TextField
                    value={editUserInfo.firstName}
                    onChange={(e) =>
                      handleSetInfo(
                        e,
                        "firstName",
                        editUserInfo,
                        setEditUserInfo
                      )
                    }
                    placeholder="change name"
                    sx={{ height: "60px", border: "none", outline: "none" }}
                  />
                ) : (
                  user?.firstName
                )
              }
            />

            <Edit
              sx={{
                position: "absolute",
                top: 0,
                right: 10,
                cursor: "pointer",
                color: "orangered",
              }}
              onClick={() => setEdit("name")}
            />
            <Box
              sx={{
                position: "absolute",
                right: edit === "name" ? "40px" : "-70px",
                top: 0,
                transition: "0.3s ease",
              }}
            >
              <Done
                sx={{ color: "green" }}
                onClick={() =>
                  handleSend(setSend, setEdit, setEditUserInfo, "firstName")
                }
              />
              <Close
                sx={{ color: "red" }}
                onClick={() => {
                  setEdit("");
                  setEditUserInfo({
                    ...editUserInfo,
                    firstName: "",
                  });
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <InfoRow
              label="Lastname"
              value={
                edit === "lastname" ? (
                  <TextField
                    value={editUserInfo.lastName}
                    onChange={(e) =>
                      handleSetInfo(
                        e,
                        "lastName",
                        editUserInfo,
                        setEditUserInfo
                      )
                    }
                    placeholder="change name"
                    sx={{ height: "60px", border: "none", outline: "none" }}
                  />
                ) : (
                  user?.lastName
                )
              }
            />
            <Edit
              sx={{
                position: "absolute",
                top: 0,
                right: 10,
                cursor: "pointer",
                color: "orangered",
              }}
              onClick={() => setEdit("lastname")}
            />
            <Box
              sx={{
                position: "absolute",
                right: edit === "lastname" ? "40px" : "-70px",
                top: 0,
                transition: "0.3s ease",
              }}
            >
              <Done
                sx={{ color: "green" }}
                onClick={() =>
                  handleSend(setSend, setEdit, setEditUserInfo, "lastName")
                }
              />
              <Close
                sx={{ color: "red" }}
                onClick={() => {
                  setEdit("");
                  setEditUserInfo({
                    ...editUserInfo,
                    lastName: "",
                  });
                }}
              />
            </Box>
          </Box>

          <InfoRow label="Email" value={user?.email} color={"gray"} />
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
        {loader && <ClipLoader />}
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
