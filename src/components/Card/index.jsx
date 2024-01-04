import {
  Box,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { RoundedButton } from "../../components";

const ArticleCard = ({ image, title, body }) => {
  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  const ArticleCard = styled(Card)(({ theme }) => ({
    padding: "1.5rem",
    display: "flex",
    justifyContent: "center",

    flexShrink: 0,
    flexDirection: "column",
    width: 350,
    border: `2px solid ${theme.palette.primary.light}`,
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: 300,
      padding: "1rem",
      alignItems: "center",
      textAlign: "center",
    },
  }));
  const [loadingImages, setLoadingImages] = useState(true);

  const handleImageLoad = () => {
    // Set the loading state to false once the image is loaded
    setLoadingImages((prevLoading) => {
      return !prevLoading;
    });
  };

  return (
    <ArticleCard>
      <Box
        width="100%"
        sx={{ borderRadius: "50px", bgcolor: "#ededed" }}
        height={210}
      >
        <img width={"100%"} src={image} alt="" />
      </Box>

      <CardContent>
        <Typography my={"1rem"} variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="h6"
          position={"relative"}
          width={isMdBreakpoint ? 230 : 270}
          height={100}
          overflow={"hidden"}
          textAlign={"left"}
          textOverflow={"ellipsis"}
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <RoundedButton type="primary">Read More</RoundedButton>
      </CardActions>
    </ArticleCard>
  );
};

export default ArticleCard;
