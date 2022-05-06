import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Payments.css";

import { cards, CardContext } from "contexts/CardContext";
import { CardRegisterPage } from "pages/CardRegisterPage";
import { CardModifyPage } from "pages/CardModifyPage";
import { CardListPage } from "pages/CardListPage";

function Payments() {
  return (
    <CardContext.Provider value={cards}>
      <div className="App">
        <Routes>
          <Route path="/" element={<CardRegisterPage />} />
          <Route path="/cardName/:id" element={<CardModifyPage />} />
          <Route path="/cardList" element={<CardListPage />} />
        </Routes>
      </div>
    </CardContext.Provider>
  );
}

export default Payments;
