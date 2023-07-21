import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import PayoutHistory from "./payouts/PayoutHistory";
import Balance from "./payouts/Balance";
import AllTransaction from "./payouts/AllTransaction";
import CashOut from "./payouts/CashOut";
import axios from "axios";
import { baseUrl } from "../../utils/utilFunctions";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../../redux/filterActions";
const Payout = () => {
  const [cashingOut, setCashingOut] = useState(false);
  const token = JSON.parse(localStorage.getItem("jwt"));

  const dispatch = useDispatch();
  const payouts = useSelector((state) => state.user?.payouts);

  useEffect(() => {
    console.log(token);
    async function getPayOuts() {
      const res = await axios.post(`${baseUrl}mypayouts`, { token });
      const data = res.data;
      dispatch({ type: ACTION.PAYOUTS, payload: data });
    }
    getPayOuts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        background: "#d3d3d3",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        position: "relative",
      }}
    >
      <Typography variant="h3" sx={{ margin: 2 }}>
        {"~"} Payouts {"~"}
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <PayoutHistory payouts={payouts} />
        <Balance setCashingOut={setCashingOut} />
      </Box>
      <AllTransaction payouts={payouts} />
      {cashingOut && (
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            background: "#686868a6",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <CashOut setCashingOut={setCashingOut} />
        </Box>
      )}
    </Box>
  );
};

export default Payout;
