import { createBrowserRouter, RouterProvider } from "react-router";
import AddCard from "./pages/AddCard";
import CompleteCard from "./pages/CompleteCard";

const router = createBrowserRouter([
  { path: "/", element: <AddCard /> },
  { path: "/complete", element: <CompleteCard /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
