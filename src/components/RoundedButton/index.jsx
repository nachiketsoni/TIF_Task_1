import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const RoundedButton = ({ children, ...props }) => {
  const RoundedButton = styled(Button)(({ theme }) => ({
    height: "fit-content",
    width: "fit-content",
    textTransform: "none",
    padding: "0.2rem 1.3rem",
    color:
      props.type == "primary"
        ? theme.palette.primary.dark
        : theme.palette.common.white,
    borderRadius: "100px",
    backgroundColor:
      props.type == "primary" ? "transparent" : theme.palette.secondary.main,
    border:
      props.type == "primary"
        ? `1px solid  ${theme.palette.primary.dark}`
        : `1px solid ${theme.palette.common.white}`,
    whiteSpace: "nowrap",
    justifyContent: "start",
    transform: `scale(${props.scale || "1"})`,
    marginLeft: `${props.scale && "1.8rem"}`,
    // ...props.sx
  }));
  return <RoundedButton>{children}</RoundedButton>;
};
export default RoundedButton;
