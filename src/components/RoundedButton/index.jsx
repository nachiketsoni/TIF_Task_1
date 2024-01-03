import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const RoundedButton = ({ children, ...props }) => {
  const RoundedButton = styled(Button)((prop) => ({
    width: "fit-content",
    height: "fit-content",
    fontSize: "1.5rem",
    textTransform : "none",
    padding: "1rem 2rem",
    color :  "white",
    borderRadius: "100px",
    backgroundColor: props.color,
    border: "1px solid white"
    
  }))
  console.log(props);
  return (
    <RoundedButton>
      {children}
    </RoundedButton>
  );
};
export default RoundedButton;
