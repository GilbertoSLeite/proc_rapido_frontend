import React from "react";
import { AppBar, CssBaseline, Toolbar } from "@mui/material";
import LogoSystem from "./logo/LogoSystem";
import SearchBar from "./search/Search";
import Notification from "./Notification/Notification";
import Account from "./Account/Account";

const Header = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar enableColorOnDark position="fixed" elevation={0} color="inherit">
        <Toolbar>
          <LogoSystem />
          <SearchBar />
          <Notification />
          <Account />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
