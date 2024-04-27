import { Navigate, createBrowserRouter } from "react-router-dom";

import App from "../App";
import RegisterCardInfo from "./RegisterCardInfo/RegisterCardInfo";
import RegisterComplete from "./RegisterComplete/RegisterComplete";

import PATH from "../constants/path";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: PATH.register,
          element: <RegisterCardInfo />,
        },
        {
          path: PATH.registerComplete,
          element: <RegisterComplete />,
        },
        {
          path: '*',
          element: <Navigate to="/" replace />
        }
      ],
    },
  ],
  {
    basename: PATH.base,
  },
);

export default router;