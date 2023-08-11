import { createTheme } from "@mui/material";

export const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#dc004e",
      contrastText: "#fff",
    },
    background: {
      default: "#ccc",
      paper: "#fff",
    },
  },
});
