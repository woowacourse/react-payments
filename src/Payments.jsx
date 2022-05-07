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
          <Route path="/registerCard" element={<CardRegisterPage />} />
          <Route path="/cardName/:id" element={<CardModifyPage />} />
          <Route
            path="/cardEdit/:id"
            element={<CardModifyPage isEditMode={true} />}
          />
          <Route path="/cardList" element={<CardListPage />} />
          <Route path="*" element={<CardListPage />} />
        </Routes>
      </div>
    </CardContext.Provider>
  );
}

export default Payments;
