import { createBrowserRouter, RouterProvider } from "react-router";
import AddNewCardPage from "@/pages/AddNewCardPage";
import AddCardCompletePage from "@/pages/AddCardCompletePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddNewCardPage />,
  },
  {
    path: "/complete",
    element: <AddCardCompletePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
