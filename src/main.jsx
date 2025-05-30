import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/index.scss";
import "../src/locales/i18n.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpeedInsights />
    <App />
  </React.StrictMode>
);
