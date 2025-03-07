import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// eslint-disable-next-line no-unused-vars
import { Analytics } from "@vercel/analytics/next";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
