import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddCard } from "./pages/addCard";
import { CardList } from "./pages/cardList";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardList />}></Route>
        <Route path="/add-card" element={<AddCard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
