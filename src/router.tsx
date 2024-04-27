import { createBrowserRouter } from "react-router-dom";

import CardFormSuccessPage from "./pages/CardFormSuccessPage";
import CardFormPage from "./pages/CardFormPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CardFormPage />,
  },
  {
    path: "/complete",
    element: <CardFormSuccessPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
