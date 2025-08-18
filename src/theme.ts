import { createTheme } from "@mui/material/styles";

// Create a custom theme with full TypeScript support
const theme = createTheme({
  palette: {
    primary: {
      main: "#e887bcff", 
    },
    secondary: {
      main: "#2730b0ff", 
    },
    background: {
      default: "#f5f5f5", 
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
