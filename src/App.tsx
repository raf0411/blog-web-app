import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, Arial, sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    body1: { fontSize: "1rem" },
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057", 
    },
    background: {
      default: "#f4f4f4", 
    },
  },
});

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;