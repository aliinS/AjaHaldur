import React from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import axios from "axios";
import "@/index.css";
import { Toaster } from "@/components/ui/sonner";
import { setAuthToken } from "@/api/auth";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token"));
  axios.get("/sanctum/csrf-cookie").then(() => {
    axios
      .get(`api/me`)
      .then((response) => {
      })
      .catch((error) => {
        console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        axios
          .post(`api/refresh`, {
            email: JSON.parse(localStorage.getItem("user")).email,
          })
          .then((response) => {
            setAuthToken(response.data.access_token);
            localStorage.setItem("token", response.data.access_token);
            window.location.reload();
            // axios
            //   .post(`api/me`)
            //   .then((response) => {
            //     console.log(response.data);
            //   })
            //   .catch((error) => {
            //     console.log(
            //       "%cERROR: ",
            //       "color: tomato; font-weight: bold;",
            //       error
            //     );
            //   });
          })
          .catch((error) => {
            console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
          });
      });
  });
}



createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster richColors className="z-50" />
  </React.StrictMode>
);
