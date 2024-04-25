import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubmitPage from "@/pages/SubmitPage/SubmitPage.tsx";
import ErrorPage from "@/pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/react-payments/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/react-payments/submit",
    element: <SubmitPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
