import React, { lazy, Suspense, useEffect, useMemo } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import CardList from "src/pages/CardList";
import CardRegister from "src/pages/CardRegister";
import CardNickName from "src/pages/CardNickName";
import { PATHS } from "src/utils/constant";
import Spinner from "src/components/@common/Spinner";
import { delayForTime } from "src/utils";

const registerPromise = import("src/pages/RegisterFinishedCard")

const RegisterFinished = () => {
  const RegisterFinishedCard = lazy(() => delayForTime(registerPromise,2000))

  return (
    <Suspense fallback={<Spinner title="카드를 등록중입니다." />}>
      <RegisterFinishedCard />
    </Suspense>
  );
}

function CardRoutes() {
  const { cardList, cardRegister, cardNickName, registerFinished } = PATHS;
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={cardList} element={<CardList />} />
        <Route path={cardRegister} element={<CardRegister />} />
        <Route path={cardNickName} element={<CardNickName />} />
        <Route
          path={registerFinished}
          element={<RegisterFinished />}
        />
        <Route path="/*" element={<Navigate replace to={cardList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CardRoutes;

