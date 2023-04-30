import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH } from "./constants/path";
import { AddCardNicknamePage } from "./pages/addCardNicknamePage";
import { AddCardPage } from "./pages/addCardPage";
import { CardListPage } from "./pages/cardListPage";
import { ErrorPage } from "./pages/errorPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.CARD_LIST} element={<CardListPage />}></Route>
        <Route path={`${PATH.ADD_CARD}*`} element={<AddCardPage />}></Route>
        <Route path="/add-nickname" element={<AddCardNicknamePage />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
