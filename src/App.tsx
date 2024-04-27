import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import CardEnrollComplete from "./components/payment/CardEnrollComplete";
import CardEnrollForm from "./components/payment/CardEnrollForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CardEnrollForm />,
  },
  {
    path: "card-enroll-complete",
    element: <CardEnrollComplete />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
