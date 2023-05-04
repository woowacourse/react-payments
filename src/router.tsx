import React, { PropsWithChildren } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { PATH } from "./constants/path";
import { AddCardNicknamePage } from "./pages/addCardNicknamePage";
import { AddCardPage } from "./pages/addCardPage";
import { CardListPage } from "./pages/cardListPage";
import { ErrorPage } from "./pages/errorPage";

function PrivateRouter(props: PropsWithChildren) {
  const { children } = props;
  const { state } = useLocation();

  if (state === null) {
    return <ErrorPage />;
  }
  return <>{children}</>;
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.CARD_LIST} element={<CardListPage />} />
        <Route path={`${PATH.ADD_CARD}`} element={<AddCardPage />} />
        <Route
          path="/add-nickname"
          element={
            <PrivateRouter>
              <AddCardNicknamePage />
            </PrivateRouter>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
