import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./app.routes";
import "../src/style.scss" 
import { AuthProvider } from "./features/auth/auth.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
);