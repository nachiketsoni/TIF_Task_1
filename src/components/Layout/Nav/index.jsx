import React from "react";

import { Logo } from "../../../assets";
import RoundedButton from "../../RoundedButton";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
// import { } from "@mui/material";

const Nav = () => {
  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Stack
      component={"nav"}
      position={"absolute"}
      width={"100%"}
      direction={"row"}
      alignItems={"start"}
      justifyContent="space-between"
      py={4}
      pl={13}
      pr={"4vw"}
    >
      {isMdBreakpoint ? <img src={Logo} /> : <div></div>}
      <RoundedButton variant="outlined" type={"secondary"}>
        Get in touch
      </RoundedButton>
    </Stack>
  );
};

export default Nav;
