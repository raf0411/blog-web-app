import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import '@fontsource/prompt';

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 900},
    body1: { fontSize: "1rem" },
  },
  palette: {
    primary: {
      main: "#81689D",
      contrastText: "#FFD0EC",
      light: "#474F7A",
      dark: "#1F2544",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#2F0743",
    },
    text: {
      primary: "#FFD0EC",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          backgroundColor: "#81689D",
          color: "#FFD0EC",
          padding: "12px 48px",
          fontWeight: "bold",
          borderRadius: "8px",
          fontSize: "1.5em",
          "&:hover": {
            backgroundColor: "#B3A3C4",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '',
          border: "1px solid",
          borderColor: "#81689D",
          borderRadius: '8px',
          outline: 'none',
          padding: '0',
          "& .MuiInputLabel-root": {
            color: '#FFD0EC',
          },
          "&:hover": {
            borderColor: "#81689D",
            backgroundColor: "transparent",
          },
          "&:focus": {
            borderColor: "#81689D",
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          borderBottom: "none",
          "&.Mui-focused": {
            borderBottom: "none",
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
