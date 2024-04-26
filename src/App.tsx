import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardInputPage from "./pages/CardInputPage/CardInputPage";
import CardAddedPage from "./pages/CardAddedPage/CardAddedPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardInputPage />}></Route>
        <Route path="/card-added" element={<CardAddedPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
