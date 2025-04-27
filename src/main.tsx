import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import AppTheme from "./shared-theme/AppTheme";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <AuthProvider>
        <AppTheme>
          <App />
        </AppTheme>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
