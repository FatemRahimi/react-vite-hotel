import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Get the root element from the DOM
const container = document.getElementById("root");

// Create a root
const root = createRoot(container);

// Render the App component to the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
