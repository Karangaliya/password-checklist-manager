import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./redux/store.js";
import MuiTheme from "./core/theme/MuiTheme.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <ThemeProvider theme={MuiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StrictMode>
  </Provider>
);
