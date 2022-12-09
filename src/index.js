import React from "react";
import ReactDOM from "react-dom/client";
// import ChalkPressLogo from "./images/logos/chalk-press-logo.webp";
import ChalkPressLogo from "./images/logos/concrete_logo.png";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <img id="chalkPressLogo" src={ChalkPressLogo} alt="chalk.press logo"/>
    <App />
  </React.StrictMode>
);
