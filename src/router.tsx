import { createBrowserRouter } from "react-router";
import AddNewCardPage from "@/pages/AddNewCardPage";
import AddCardCompletePage from "@/pages/AddCardCompletePage";
import { ROUTE_PATH } from "@/constants/routes";

export const router = createBrowserRouter(
  [
    {
      path: ROUTE_PATH.ADD_CARD,
      element: <AddNewCardPage />,
    },
    {
      path: ROUTE_PATH.ADD_CARD_COMPLETE,
      element: <AddCardCompletePage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
