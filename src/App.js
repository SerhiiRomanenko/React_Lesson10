import React from "react";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import {theme} from "./services/theme";
import {ThemeProvider} from "@mui/material";


export function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewsPage/>
    </ThemeProvider>
  );
}
