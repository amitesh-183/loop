import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { UserProvider } from "./context/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster reverseOrder={false} position="top-center" />
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
