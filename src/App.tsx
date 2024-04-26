import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Payments from "./routes/Payments";
import LandingArrival from "./routes/LandingArrival";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Payments />,
    },
    {
      path: "/landing_arrival/:cardNumbers/:cardIssuer",
      element: <LandingArrival />,
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
