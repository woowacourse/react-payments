import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import CardList from "src/pages/CardList";
import CardRegister from "src/pages/CardRegister";
import CardNickName from "src/pages/CardNickName";
import { PATHS } from "src/utils/constant";

function CardRoutes() {
  const { cardList, cardRegister, cardNickName } = PATHS;
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={cardList} element={<CardList />} />
        <Route path={cardRegister} element={<CardRegister />} />
        <Route path={cardNickName} element={<CardNickName />} />
        <Route path="/*" element={<Navigate replace to={cardList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CardRoutes;
