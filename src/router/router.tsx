import App from "../App";
import CardRegistrationPage from "../pages/cardRegistrationPage";
import CompletedPage from "../pages/completedPage";
import ErrorPage from "../pages/errorPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <CardRegistrationPage /> },
        { path: "completed", element: <CompletedPage /> },
      ],
    },
  ],
  { basename: "/react-payments/" }
);

export default router;
