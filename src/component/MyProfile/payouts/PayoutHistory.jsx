import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Money from "./Money";
import { useMediaQuery } from "@mui/material";
const PayoutHistory = ({ payouts }) => {
  const max1100 = useMediaQuery("(max-width:1100px)");

  return (
    <Box
      sx={{
        width: "100%",
        height: max1100 ? 240 : 240,
        padding: 3,
        background: "white",
        borderRadius: 6,
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: max1100 ? "column" : "row",
        gap: 2,
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: 42,

            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Previous Payout</Typography>
          <Typography>Thu 20 Jul</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: max1100 ? "row" : "column",
            alignItems: "flex-start",
          }}
        >
          <Money
            // test={1}
            amount={
              payouts?.length > 0 ? payouts[payouts?.length - 2]?.amount : "0"
            }
            status={
              payouts?.length > 0
                ? payouts[payouts?.length - 2]?.status
                : "None"
            }
            currency={
              payouts?.length > 0 ? payouts[payouts?.length - 2]?.currency : "$"
            }
          />
          <Button>History</Button>
        </Box>
      </Box>
      <Box sx={{ width: "1px", background: "gray", height: 200 }}></Box>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: 42,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Next Payout</Typography>
          <Typography>Thu 20 Jul</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: max1100 ? "row" : "column",
            alignItems: "flex-start",
          }}
        >
          <Money
            test={2}
            amount={
              payouts?.length > 0 ? payouts[payouts?.length - 1]?.amount : "0"
            }
            status={
              payouts?.length > 0
                ? payouts[payouts?.length - 1]?.status
                : "None"
            }
            currency={
              payouts?.length > 0 ? payouts[payouts?.length - 1]?.currency : "$"
            }
          />
          <Button>History</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PayoutHistory;
