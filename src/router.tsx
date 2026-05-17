import { createBrowserRouter, Navigate } from "react-router";
import AddNewCardPage from "@/pages/AddNewCardPage";
import AddCardCompletePage from "@/pages/AddCardCompletePage";
import { ROUTE_PATH } from "@/constants/routes";
import CardListPage from "./pages/CardListPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to={ROUTE_PATH.CARDS} replace />,
    },
    {
      path: ROUTE_PATH.ADD_CARD,
      element: <AddNewCardPage />,
    },
    {
      path: ROUTE_PATH.ADD_CARD_COMPLETE,
      element: <AddCardCompletePage />,
    },
    {
      path: ROUTE_PATH.CARDS,
      element: <CardListPage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
