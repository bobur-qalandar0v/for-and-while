import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/main.scss";
import { BrowserRouter } from "react-router-dom";

createRoot(document.querySelector(".wrapper")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
