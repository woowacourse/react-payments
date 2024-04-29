import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardRegisterComplete from "./pages/CardRegisterComplete.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/card-register-complete", element: <CardRegisterComplete /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
