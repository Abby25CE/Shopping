import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FiltersProvider } from "./context/filters.jsx";
import React, { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
