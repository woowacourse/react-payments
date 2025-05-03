import { RouterProvider, createBrowserRouter } from "react-router";
import "./App.css";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import AddCardSuccessPage from "./pages/AddCardSuccessPage/AddCardSuccessPage";

const PAGE_PATH = {
  ADD_CARD: "/",
  ADD_CARD_SUCCESS: "/success",
};

const router = createBrowserRouter(
  [
    {
      path: PAGE_PATH.ADD_CARD,
      element: <AddCardPage />,
    },
    {
      path: PAGE_PATH.ADD_CARD_SUCCESS,
      element: <AddCardSuccessPage />,
    },
  ],
  {
    basename: "/react-payments",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
