import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./utility/Router";
import { AuthProvider } from "./contexts/AuthProvider";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <Router />
    </StrictMode>
  </AuthProvider>,
);
