import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Payments.css";

import { cards, CardContext, errorState, ErrorContext } from "contexts";
import { CardRegisterPage } from "pages/CardRegisterPage";
import { CardModifyPage } from "pages/CardModifyPage";
import { CardListPage } from "pages/CardListPage";

function Payments() {
  return (
    <ErrorContext.Provider value={errorState}>
      <CardContext.Provider value={cards}>
        <div className="App">
          <Routes>
            <Route path="/registerCard" element={<CardRegisterPage />} />
            <Route path="/cardEdit/:id" element={<CardModifyPage />} />
            <Route path="/cardList" element={<CardListPage />} />
            <Route path="*" element={<CardListPage />} />
          </Routes>
        </div>
      </CardContext.Provider>
    </ErrorContext.Provider>
  );
}

export default Payments;
