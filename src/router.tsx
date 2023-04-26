import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH } from "./constants/path";
import { AddCard } from "./pages/addCard";
import { CardList } from "./pages/cardList";
import { ErrorPage } from "./pages/error";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.CARD_LIST} element={<CardList />}></Route>
        <Route path={PATH.ADD_CARD} element={<AddCard />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
