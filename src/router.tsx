import { createBrowserRouter, Navigate } from "react-router";
import CardRegisterPage from "@/pages/CardRegisterPage";
import CardRegisterCompletePage from "@/pages/CardRegisterCompletePage";
import { ROUTE_PATH } from "@/constants/routes";
import CardListPage from "./pages/CardListPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to={ROUTE_PATH.CARD_LIST} replace />,
    },
    {
      path: ROUTE_PATH.CARD_REGISTER,
      element: <CardRegisterPage />,
    },
    {
      path: ROUTE_PATH.CARD_REGISTER_COMPLETE,
      element: <CardRegisterCompletePage />,
    },
    {
      path: ROUTE_PATH.CARD_LIST,
      element: <CardListPage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
