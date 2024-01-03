import { createTheme } from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFF",
      contrastText: "#FFFFF",
    },
    secondary: {
      main: "#E23744",
      contrastText: "#FFFFF",
    },
    text: {
      primary: "#0E2368",
      secondary: "0E2368",
      tertiary: "#E23744",
      contrastText: "#FFFFF",
    },
  },
  typography: {
    fontFamily: "Source Sans 3",

    button: {
      color: "#fffff",
    },
    h1:{
        fontSize: "5rem",
        fontWeight: 700
    }
  },
});

export default theme