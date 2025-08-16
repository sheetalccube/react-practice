import { createRoot } from "react-dom/client";
import "./index.css";
import './styles/variables.css';
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
// import App1 from "./App1";
import App from "./App";


createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    {/* <App1/> */}
  </ThemeProvider>
);
