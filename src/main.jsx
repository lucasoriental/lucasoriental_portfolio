import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import ReactGA from "react-ga4";
import "./i18n";

ReactGA.initialize("G-RHQBPREZL1");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
})
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
