import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { AboutUsIMG } from "../../assets";
import { RoundedButton } from "../../components";

const About = () => {
  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      height={"90vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack
        height={"60vh"}
        direction={"row"}
        display={"flex"}
        gap={"8rem"}
        bgcolor={"primary.light"}
        justifyContent={"center"}
        width={"100%"}
      >
        {!isMdBreakpoint && <img height={"100%"} src={AboutUsIMG} alt="" />}
        <Box
          width={"38vmax"}
          display={"flex"}
          alignItems={isMdBreakpoint && "center"}
          flexDirection={"column"}
          justifyContent={"center"}
          py={isMdBreakpoint && "2rem"}
        >
          <Typography
            variant="h3"
            width={"max-content"}
            textAlign={isMdBreakpoint && "center"}
            sx={{ color: "text.primary" }}
          >
            About Us
          </Typography>
          <Typography
            textAlign={isMdBreakpoint && "center"}
            variant="h6"
            width={isMdBreakpoint ? "16rem" : "30rem"}
            py={"2rem"}
            sx={{ color: "text.secondary" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </Typography>
          <RoundedButton children={"Read More"} type={"secondary"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
