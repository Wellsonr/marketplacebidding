import React from "react";
import { createRoot } from "react-dom/client";
import App from "./client/App.js";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <App />
  </>
);