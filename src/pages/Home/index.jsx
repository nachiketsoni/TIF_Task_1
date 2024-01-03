import React from "react";
import { Nav, RoundedButton } from "../../components";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { HeroImg } from "../../assets";

const Home = () => {
  return (
    <div>
      <Nav />
      <Stack>
        <Stack height={"100vh"} direction={"row"} width={"100%"}>
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            px={"7rem"}
          >
            <Typography variant="h1" sx={{ color: "text.primary" }}>
              Discover the <br />
              <Typography
                component={"span"}
                variant="h1"
                sx={{ color: "text.tertiary" }}
              >
                Best
              </Typography>
              Food <br /> and Drinks
              <Typography variant="h5" py={"2rem"}>
                Naturally made Healthcare Products for the <br /> better care &
                support of your body.
              </Typography>
              <RoundedButton children={"Explore Now"} color={"#E23744"} />
            </Typography>
          </Box>
          <img src={HeroImg} alt="" />
        </Stack>
        <Stack height={"100vh"} direction={"row"} width={"100%"}>

        </Stack>
      </Stack>
    </div>
  );
};

export default Home;
