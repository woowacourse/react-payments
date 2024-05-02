import { ROUTE_URL } from "@/constants/url";
import CardRegisterPage from "@/pages/CardRegisterPage/CardRegisterPage";
import RegisterComfirmPage from "@/pages/RegisterComfirmPage/RegisterComfirmPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: ROUTE_URL.HOME,
    element: <CardRegisterPage />,
  },
  {
    path: ROUTE_URL.REGISTER_CONFIRM,
    element: <RegisterComfirmPage />,
  },
]);

export default router;
