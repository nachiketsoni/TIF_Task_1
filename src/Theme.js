import { createTheme, useTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0E2368",
      light: "#F0F1F7",
      dark: "#424961",
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
      contrastText: "#646874",
    },
  },
  typography: {
    fontFamily: "Source Sans 3",
    button: {
      fontWeight: 600,
    },
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 800,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "1.8rem",
      },
    },
    h5: {
      fontWeight: 800,
      fontSize: "1.2rem",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    h6: {
      fontSize: ".95rem",
      fontWeight: 400,

      "@media (max-width:600px)": {
        fontSize: "0.7rem",
      },
    },
    body2: {
      // fontSize: "1.1rem",
      fontWeight: 500,

      "@media (max-width:600px)": {
        fontSize: "0.5rem",
      },
    },
  },
});

export default theme;
