import { createBrowserRouter, RouterProvider } from "react-router";
import CardFormPage from "./pages/CardFormPage";
import CardResistrationCompletePage from "./pages/CardResistrationCompletePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CardFormPage />,
  },
  {
    path: "/complete",
    element: <CardResistrationCompletePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
