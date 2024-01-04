import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Card1, Card2, Card3, Card4, Card5, Card6 } from "../../assets";
import { ArticleCard } from "../../components";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
const Article = () => {
  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  const content = [
    {
      image: Card1,
      title: "Grilled  Tomatoes at Home",
      body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: Card2,
      title: "Snacks for Travel",
      body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: Card3,
      title: "Post-workout Recipes",
      body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: Card4,
      title: "How To Grill Corn",
      body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: Card5,
      title: "Crunchwrap Supreme",
      body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: Card6,
      title: "Broccoli Cheese Soup",
      body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(content.length / cardsPerPage);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, content.length - 3));
  };
  return (
    <Box
      px={isMdBreakpoint ? " " : "11rem"}
      py={"4rem"}
      display={"flex"}
      boxShadow="none"
      flexDirection={"column"}
      alignItems={isMdBreakpoint ? "center" : "flex-start"}
    >
      <Typography color={"primary"} variant="h3">
        Latest Articles
      </Typography>

      <Grid
        container
        direction={isMdBreakpoint ? "column" : "row"}
        gap={8}
        justifyContent={"center"}
        alignItems={"center"}
        my={"5rem"}
        flexShrink={1}
        flexWrap={"nowrap"}
      >
        {content &&
          content.slice(currentIndex, currentIndex + 3).map((e, index) => (
            <Grid key={index} item>
              <ArticleCard title={e.title} body={e.body} image={e.image} />
            </Grid>
          ))}
      </Grid>
      <Box sx={{ margin: "0 auto" }}>
        <IconButton
          sx={{
            border: currentIndex === 0 ? "1px solid grey" : "1px solid black",
            borderRadius: "10px",
            padding: ".1rem",
          }}
          size="large"
          disabled={currentIndex === 0}
          onClick={handlePrevClick}
        >
          <KeyboardArrowLeftRoundedIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
        <Typography mx={4} variant="subtitle1" component={"span"}>{`${Math.ceil(
          (currentIndex + 1) / cardsPerPage
        )} / ${totalPages}`}</Typography>
        <IconButton
          sx={{
            borderRadius: "10px",
            padding: ".1rem",
            border: currentIndex != 0 ? "1px solid grey" : "1px solid black",
          }}
          size="large"
          disabled={currentIndex >= content.length - 3}
          onClick={handleNextClick}
        >
          <KeyboardArrowRightRoundedIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Article;
