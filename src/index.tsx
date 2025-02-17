import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import '@fontsource/prompt';

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, Arial, sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
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
          backgroundColor: "#81689D",
          color: "#FFD0EC",
          padding: "12px 48px",
          fontWeight: "bold",
          borderRadius: "8px",
          fontSize: "18px",
          "&:hover": {
            backgroundColor: "#B3A3C4",
          },
        }
      }
    }
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
