import MyCard from "../pages/MyCard";
import { createBrowserRouter } from "react-router-dom";
import AddCard from "../pages/AddCard";
import NameCard from "../pages/NameCard";
import { ROUTER_PATH } from "./path";

export const router = createBrowserRouter([
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
