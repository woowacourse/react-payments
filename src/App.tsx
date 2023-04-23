import MyCard from "./pages/MyCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCard from "./pages/AddCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyCard />,
  },
  {
    path: "/AddCard",
    element: <AddCard />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
