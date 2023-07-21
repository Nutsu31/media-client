import { Box } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0e243a",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AllTransaction = ({ payouts }) => {
  console.log(payouts);
  return (
    <Box
      sx={{
        width: "85%",
        borderRadius: 7,
      }}
    >
      <TableContainer component={Paper} sx={{ borderRadius: 6 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Transaction id</StyledTableCell>
              <StyledTableCell align="left">Amount</StyledTableCell>
              {/* <StyledTableCell align="left">Commission</StyledTableCell> */}
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Destination</StyledTableCell>
              <StyledTableCell align="left">Created At</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payouts?.map((row) => (
              <StyledTableRow key={row?._id}>
                <StyledTableCell component="th" scope="row">
                  {row?._id}
                </StyledTableCell>
                <StyledTableCell align="left">{row?.amount}</StyledTableCell>
                <StyledTableCell
                  align="left"
                  sx={{
                    color: row?.status === "completed" ? "green" : "orange",
                  }}
                >
                  {row?.status}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row?.destination}
                </StyledTableCell>
                <StyledTableCell align="left">{row?.createdAt}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllTransaction;
