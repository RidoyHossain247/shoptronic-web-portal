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
});