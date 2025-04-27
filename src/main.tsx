import "./styles/reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { locations } from "./AddCard/constants/locations.ts";
import AddCardCompleteModal from "./AddCard/components/AddCardCompleteModal/AddCardCompleteModal.tsx";

import AddCard from "./AddCard/components/AddCard.tsx";
import FourOFourFallback from "./Fallback/FourOFourFallback.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AddCard />,
    },
    {
      path: locations.ADD_CARD_COMPLETE,
      element: <AddCardCompleteModal />,
    },
    {
      path: "*",
      element: <FourOFourFallback />,
    },
  ],
  {
    basename: locations.BASE_URL,
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
