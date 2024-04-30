import { createBrowserRouter } from "react-router-dom";

import CardAddFormProvider from "./components/providers/CardAddFormProvider";

import CardFormPage from "./pages/CardFormPage";
import CardFormSuccessPage from "./pages/CardFormSuccessPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CardAddFormProvider />, // Provider를 여기에 배치
    children: [
      { path: "/", element: <CardFormPage /> },
      { path: "complete", element: <CardFormSuccessPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
