import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CardInputPage from "./pages/CardInputPage/CardInputPage";
import CardAddedPage from "./pages/CardAddedPage/CardAddedPage";

export default function App() {
  return (
    <BrowserRouter basename="/react-payments/dist">
      <Routes>
        <Route path="/" element={<CardInputPage />}></Route>
        <Route path="/card-added" element={<CardAddedPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
