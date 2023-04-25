import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import CardList from "src/pages/CardList";
import CardRegister from "src/pages/CardRegister";

function CardRoutes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/card-list" element={<CardList />} />
        <Route path="/card-register" element={<CardRegister />} />
        <Route path="/*" element={<Navigate replace to="/card-list" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CardRoutes;
