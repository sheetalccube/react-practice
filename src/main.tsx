import { createRoot } from "react-dom/client";
import "./index.css";
import './styles/variables.css';
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

import {  RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  // <BrowserRouter>
  // </BrowserRouter>
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Resets & normalizes styles */}
    <RouterProvider router={router}/>
  </ThemeProvider>

);
