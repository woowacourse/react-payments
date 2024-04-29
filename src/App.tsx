import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubmitPage from "@/pages/SubmitPage/SubmitPage.tsx";
import ErrorPage from "@/pages/ErrorPage.tsx";
import MainPage from "@/pages/MainPage/MainPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/submit",
    element: <SubmitPage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
