import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddCard } from "./pages/addCard";
import { CardList } from "./pages/cardList";
import { ErrorPage } from "./pages/error";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardList />}></Route>
        <Route path="/add-card" element={<AddCard />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
