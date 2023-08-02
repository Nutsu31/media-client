import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import LoginSection from "../LoginSection";
import { SignUp } from "../SignUp";
import Header from "../Header";
import Settings from "./Settings";
import Payout from "./Payout";
import Dashboard from "./Dashboard";

const MyProfilePage = () => {
  const [page, setPage] = useState(1);
  const [hideMenu, setHideMenu] = useState(false);

  useEffect(() => {
    setHideMenu(false);
  }, [page]);
  return (
    <>
      <LoginSection />
      <SignUp />
      <Header />
      <Box sx={{ display: "flex" }}>
        <Dashboard
          setPage={setPage}
          hideMenu={hideMenu}
          setHideMenu={setHideMenu}
        />
        {page === 1 && <Payout />}
        {page === 2 && <Settings />}
      </Box>
    </>
  );
};

export default MyProfilePage;
