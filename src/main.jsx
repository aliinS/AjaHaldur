import React from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import axios from "axios";
import "./index.css";
import { Toaster } from "@/components/ui/sonner";
import { setAuthToken } from "@/auth/auth.js";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token"));
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster richColors className="z-50" />
  </React.StrictMode>
);
