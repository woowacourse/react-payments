import { createBrowserRouter } from "react-router-dom";

import CardAddFormProvider from "./components/providers/CardAddFormProvider";

import CardFormPage from "./pages/CardFormPage";
import CardFormSuccessPage from "./pages/CardFormSuccessPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CardAddFormProvider>
        <CardFormPage />
      </CardAddFormProvider>
    ),
  },
  {
    path: "/complete",
    element: (
      <CardAddFormProvider>
        <CardFormSuccessPage />
      </CardAddFormProvider>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
