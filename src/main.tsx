import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { basePath } from "./configs/router";
import { CardProvider } from "./contexts/CardContext";
import { CardValidationProvider } from "./contexts/CardValidationContext";
import CardForm from "./pages/CardForm/CardForm";
import RegisterComplete from "./pages/RegisterComplete/RegisterComplete";
import { GlobalStyles } from "./styles/Global.styled";
import { ContainerStyles, WrapperStyles } from "./styles/Layout.styled";

function Layout() {
  return (
    <ContainerStyles>
      <WrapperStyles>
        <CardProvider>
          <CardValidationProvider>
            <Outlet />
          </CardValidationProvider>
        </CardProvider>
      </WrapperStyles>
    </ContainerStyles>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <CardForm />,
        },
        {
          path: "/register-complete",
          element: <RegisterComplete />,
        },
      ],
    },
  ],
  {
    basename: basePath,
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
