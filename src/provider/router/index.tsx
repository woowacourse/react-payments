import MyCard from "../../pages/MyCard";
import { createBrowserRouter } from "react-router-dom";
import AddCard from "../../pages/AddCard";
import NameCard from "../../pages/NameCard";
import { ROUTER_PATH } from "./path";
import { RouterProvider } from "react-router-dom";

export const PageRouterProvider = () => {
  const router = createBrowserRouter([
    {
      path: ROUTER_PATH.MyCard,
      element: <MyCard />,
    },
    {
      path: ROUTER_PATH.AddCard,
      element: <AddCard />,
    },
    {
      path: ROUTER_PATH.NameCard,
      element: <NameCard />,
    },
  ]);
  return <RouterProvider router={router} />;
};
