import React from "react";
import { Nav, RoundedButton } from "../../components";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { HeroImg } from "../../assets";
import { useTheme } from "@emotion/react";

const Home = () => {
  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div style={{ width: "100vw", position: "relative", overflow: "hidden" }}>
      <Nav />
      <Stack>
        <Stack
          direction={isMdBreakpoint ? "column" : "row"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={isMdBreakpoint ? "" : "row-reverse"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <img width={isMdBreakpoint ? "105%" : "50%"} src={HeroImg} alt="" />
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={isMdBreakpoint && "center"}
            flexDirection={"column"}
            px={"7rem"}
            py={isMdBreakpoint && "2rem"}
          >
            <Typography
              variant="h2"
              width={"max-content"}
              textAlign={isMdBreakpoint && "center"}
              sx={{ color: "text.primary" }}
            >
              Discover the <br />
              <Typography
                component={"span"}
                variant="h2"
                sx={{ color: "text.tertiary" }}
              >
                Best
              </Typography>{" "}
              Food {!isMdBreakpoint && <br />} and {isMdBreakpoint && <br />}{" "}
              Drinks
            </Typography>
            <Typography
              width={"max-content"}
              textAlign={isMdBreakpoint && "center"}
              variant="h6"
              py={"2rem"}
              sx={{ color: "text.primary" }}
            >
              Naturally made Healthcare Products for the <br /> better care &
              support of your body.
            </Typography>
            <RoundedButton
              scale={isMdBreakpoint ? null : 1.5}
              children={"Explore Now"}
              type={"secondary"}
            />
          </Box>
        </Stack>
      </Stack>
    </div>
  );
};

export default Home;
