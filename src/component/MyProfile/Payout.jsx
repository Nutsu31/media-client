import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import PayoutHistory from "./payouts/PayoutHistory";
import Balance from "./payouts/Balance";
import AllTransaction from "./payouts/AllTransaction";
import CashOut from "./payouts/CashOut";
import axios from "axios";
import { baseUrl } from "../../utils/utilFunctions";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../../redux/filterActions";
import StripeConnect from "./payouts/StripeConnect";
const Payout = () => {
  const [cashingOut, setCashingOut] = useState(false);

  const token = JSON.parse(localStorage.getItem("jwt"));

  const dispatch = useDispatch();
  const payouts = useSelector((state) => state.user?.payouts);
  const payoutAccId = useSelector((state) => state.user?.payoutAccId);

  useEffect(() => {
    async function getPayOuts() {
      const res = await axios.post(`${baseUrl}mypayouts`, { token });
      const data = res.data;
      dispatch({ type: ACTION.PAYOUTS, payload: data });
    }
    getPayOuts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const max1100 = useMediaQuery("(max-width:1100px)");
  const max500 = useMediaQuery("(max-width:500px)");

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
        padding: max500 ? "0 0px 0 65px " : "0 56px 0 100px ",
      }}
    >
      <Typography variant="h3" sx={{ margin: 2 }}>
        Payouts
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          flexDirection: max1100 ? "column" : "row",
        }}
      >
        <PayoutHistory payouts={payouts} />
        <Balance setCashingOut={setCashingOut} />
      </Box>
      <AllTransaction payouts={payouts} />
      {cashingOut && (
        <Box
          sx={{
            width: "100%",
            height: "90vh",
            background: "#686868a6",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {payoutAccId === "" ? (
            <StripeConnect setCashingOut={setCashingOut} />
          ) : payoutAccId !== "" && cashingOut ? (
            <CashOut setCashingOut={setCashingOut} />
          ) : null}
        </Box>
      )}
    </Box>
  );
};

export default Payout;
