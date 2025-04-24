import React from "react";
import ReactDOM from "react-dom/client";
import RegisterComplete from "./pages/RegisterComplete/RegisterComplete";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ContainerCSS, WrapperCSS } from "./styles/Layout.styled";
import CardForm from "./pages/CardForm/CardForm";
import { GlobalStyles } from "./styles/Global.styled";

function Layout() {
  return (
    <ContainerCSS>
      <WrapperCSS>
        <Outlet />
      </WrapperCSS>
    </ContainerCSS>
  );
}

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
