import React from "react";

import { Logo } from "../../../assets";
import RoundedButton from "../../RoundedButton";
import { Stack } from "@mui/material";
// import { } from "@mui/material";

const Nav = () => {
  return (
    <Stack component={'nav'} position={'fixed'} width={'100%'} direction={"row"} alignItems={'center'} justifyContent="space-between" py={4} px={5}>
      <img src={Logo} />
      <RoundedButton variant="outlined" >Get in touch</RoundedButton>
    </Stack>
  );
};

export default Nav;
