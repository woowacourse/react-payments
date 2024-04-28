import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Payments from "./routes/Payments";
import LandingArrival from "./routes/LandingArrival";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Payments />,
      },
      {
        path: "/landing_arrival",
        element: <LandingArrival />,
      },
    ],
    { basename: import.meta.env.BASE_URL }
  );
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
