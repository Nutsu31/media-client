import React, { useState } from "react";
import { FormControl, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../../utils/utilFunctions";
import { useDispatch, useSelector } from "react-redux";
import { Close } from "@mui/icons-material";
import { ACTION } from "../../../redux/filterActions";
import { PaymentElement } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const CashOut = ({ setCashingOut }) => {
  const [valid, setValid] = useState();
  const [value, setValue] = useState();
  const [destination, setDestination] = useState("");
  const handleValidation = (e) => {
    const reg = new RegExp("[0-9]");
    setValid(reg.test(e.target.value));
    setValue(e.target.value);
  };

  const userId = useSelector((state) => state.user.id);
  const balance = useSelector((state) => state.user.balance);
  const payouts = useSelector((state) => state.user?.payouts);
  const payoutAccId = useSelector((state) => state.user?.payoutAccId);

  const jwt = JSON.parse(localStorage.getItem("jwt"));

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (false) {
      return;
    } else {
      console.log(
        "🚀 ~ file: CashOut.jsx:25 ~ CashOut ~ payoutAccId:",
        payoutAccId
      );
      jwt &&
        axios({
          method: "POST",
          url: `${baseUrl}cash-out`,
          data: {
            amount: value,
            id: userId,
            destination: destination,
            token: jwt,
          },
        })
          .then((res) =>
            dispatch({
              type: ACTION.PAYOUTS,
              payload: [...payouts, ...res.data],
            })
          )
          .catch((err) => console.log(err));
      setCashingOut((curr) => !curr);
    }
  };
  return (
    <FormControl
      sx={{
        width: 600,
        height: 300,
        background: "white",
        borderRadius: 6,
        position: "sticky",
        left: "50%",
        top: "50%",
        translate: "-40% -50%",
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          gap: 10,
          padding: 20,
          position: "relative",
        }}
      >
        <Button
          sx={{ position: "absolute", right: 20 }}
          onClick={() => setCashingOut((curr) => !curr)}
        >
          <Close sx={{ fontSize: 28 }} />
        </Button>
        <Typography variant="h3">Cash Out</Typography>
        <TextField
          label="Destination"
          variant="outlined"
          placeholder="Enter Stripe Destination account"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required={true}
          fullWidth
        />
        <TextField
          label="Amount"
          variant="outlined"
          placeholder="Enter Amount"
          value={value}
          onChange={(e) => handleValidation(e)}
          error={!valid}
          required={true}
          fullWidth
        />
        <Button fullWidth type="submit" variant="contained" sx={{ height: 50 }}>
          Cash Out
        </Button>
      </form>
    </FormControl>
  );
};

export default CashOut;
