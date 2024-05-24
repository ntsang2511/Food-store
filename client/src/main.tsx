import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import $ from "jquery";
import Popper from "popper.js";
import "./firebase/config.jsx";
import { Container } from "@mui/material";
import UserMenu from '../src/components/UserMenu'
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="app">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
