import React from "react";
import ReactDOM from "react-dom/client";
import Notification from "./components/UI/Notifications/Notifications";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
