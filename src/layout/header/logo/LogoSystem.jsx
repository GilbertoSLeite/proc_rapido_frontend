import { ButtonBase } from "@mui/material";
import React from "react";
import Logo from "../../../assets/image/logo/processo-rapido-logo.png";

const LogoSystem = () => {
  return (
    <React.Fragment>
      <ButtonBase disabled>
        <img src={Logo} alt="Processo Rápido" width="100" />
      </ButtonBase>
    </React.Fragment>
  );
};

export default LogoSystem;
