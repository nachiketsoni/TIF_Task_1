import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Logo } from "../../assets";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      bgcolor={"#F8F8F8"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={isMdBreakpoint ? "column" : "row"}
      height={!isMdBreakpoint && "50vh"}
      p={"1rem"}
      component={"footer"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={isMdBreakpoint ? "100%" : "50%"}
        my={isMdBreakpoint ? "3rem" : 0}
      >
        <img src={Logo} width={isMdBreakpoint ? 90 : 200} alt="truck logo" />
      </Box>
      <Container
        sx={{
          // width: "100%" ,
          display: "flex",
          alignItems: isMdBreakpoint ? "" : "center",
          gap: "1rem",
          justifyContent: isMdBreakpoint ? "center" : "space-between",
          flexDirection: isMdBreakpoint ? "column" : "row",
        }}
      >
        <Stack spacing={2}>
          <Typography color={"primary"} fontWeight={"bold"} variant="subtitle1">
            Contact Us
          </Typography>
          <Typography color={"text.contrastText"} variant="body2" width={260}>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </Typography>
          <Typography color={"text.contrastText"} variant="body2">
            example2020@gmail.com
          </Typography>
          <Typography color={"text.contrastText"} variant="body2">
            (904) 443-0343
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography color={"primary"} fontWeight={"bold"} variant="subtitle1">
            More
          </Typography>
          <Typography color={"text.contrastText"} variant="body2" width={280}>
            About Us
          </Typography>
          <Typography color={"text.contrastText"} variant="body2">
            Products
          </Typography>
          <Typography color={"text.contrastText"} variant="body2">
            Career
          </Typography>
          <Typography color={"text.contrastText"} variant="body2">
            Contact Us
          </Typography>
        </Stack>
        <Stack
          display={isMdBreakpoint && "flex"}
          alignItems={isMdBreakpoint && "center"}
          mt={isMdBreakpoint && "1rem"}
          flexDirection={isMdBreakpoint && "column-reverse"}
        >
          <Typography color={"primary"} fontWeight={"bold"} variant="subtitle1">
            {!isMdBreakpoint && "Social Links"}
          </Typography>
          <Stack spacing={4} mt={2} direction={"row"}>
            <InstagramIcon
              sx={{
                fontSize: isMdBreakpoint && theme.typography.body2.fontSize,
              }}
              color={"primary"}
            />
            <TwitterIcon
              sx={{
                fontSize: isMdBreakpoint && theme.typography.body2.fontSize,
              }}
              color={"primary"}
            />
            <FacebookIcon
              sx={{
                fontSize: isMdBreakpoint && theme.typography.body2.fontSize,
              }}
              color={"primary"}
            />
          </Stack>
          <Typography
            mt={!isMdBreakpoint && "4rem"}
            ml={!isMdBreakpoint && "-5rem"}
            variant="body2"
            color={"text.contrastText"}
          >
            © 2022 Food Truck Example
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
