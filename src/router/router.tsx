import CardRegisterPage from "@/pages/CardRegisterPage/CardRegisterPage";
import RegisterComfirmPage from "@/pages/RegisterComfirmPage/RegisterComfirmPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CardRegisterPage />,
  },
  {
    path: "/confirm",
    element: <RegisterComfirmPage />,
  },
]);

export default router;
