import { createTheme } from '@mui/material/styles';

export const theme = createTheme({

  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#3069EB",
      light: "#46A6D6",
      dark: "#0849DE",
    },
    secondary: {
      main: "#636c76",
      light: "#9ea3aa",
    },
    error: {
      main: "#ff2e23",
      light: "#e5150b",
    },
    success: {
      main: "#38ba5c",
      light: "#edf9f4",
    },
    warning: {
      main: "#f8ac04",
      light: "#fef6e6",
    },
    background: {
      paper: "#f4f6fa",
    },
  },
  typography: {
    fontFamily: "Rubik, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontFamily: "Rubik,sans-serif",
      fontSize: "42px",
      fontWeight: 500,
      lineHeight: "48px",
    },
    h2: {
      fontFamily: "Rubik,sans-serif",
      fontSize: "35px",
      fontWeight: 500,
      lineHeight: "40px",
    },
    h3: {
      fontFamily: "Rubik,sans-serif",
      fontSize: "31px",
      fontWeight: 500,
      lineHeight: "36px",
    },
    h4: {
      fontFamily: "Rubik,sans-serif",
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: "32px",
    },
    h5: {
      fontFamily: "Rubik,sans-serif",
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "28px",
    },
    h6: {
      fontFamily: "Rubik,sans-serif",
      fontSize: "21px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    subtitle1: {
      fontFamily: "Rubik,sans-serif",
      fontSize: "21px",
      fontWeight: 400,
      lineHeight: "32px",
    },
    subtitle2: {
      fontFamily: "Rubik,sans-serif",
      fontSize: "17px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    body1: {
      fontFamily: "Rubik,sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    body2: {
      fontFamily: "Rubik,sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    caption: {
      fontFamily: "Rubik,sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "10px",
    },
  },
});