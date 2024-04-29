import App from "../App";
import CardRegistrationPage from "../pages/cardRegistrationPage";
import CompletedPage from "../pages/completedPage";
import NotFoundPage from "../pages/404Page";
import ROUTE from "../constants/route";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: ROUTE.root,
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <CardRegistrationPage /> },
        { path: ROUTE.completed, element: <CompletedPage /> },
      ],
    },
  ],
  { basename: ROUTE.baseName }
);

export default router;
