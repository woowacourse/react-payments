import MyCard from "./pages/MyCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCard from "./pages/AddCard";
import { ROUTER_PATH } from "./constants";

const router = createBrowserRouter([
  {
    path: ROUTER_PATH.MyCard,
    element: <MyCard />,
  },
  {
    path: ROUTER_PATH.AddCard,
    element: <AddCard />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
