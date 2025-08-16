import { createTheme } from "@mui/material/styles";

// Create a custom theme with full TypeScript support
const theme = createTheme({
  palette: {
    primary: {
      main: "#e476b3ff", // blue
    },
    secondary: {
      main: "#2730b0ff", // purple
    },
    background: {
      default: "#f5f5f5", // light grey background
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    button: {
      textTransform: "none", // removes uppercase
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});

export default theme;
