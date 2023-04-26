import MyCard from "./pages/MyCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCard from "./pages/AddCard";
import { ROUTER_PATH } from "./constants";
import GlobalStyle from "./style/global";

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
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
