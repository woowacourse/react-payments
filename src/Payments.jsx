import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Payments.css";

import { CardRegisterPage } from "pages/CardRegisterPage";
import { CardModifyPage } from "pages/CardModifyPage";

function Payments() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardRegisterPage />} />
        <Route path="/cardName" element={<CardModifyPage />} />
      </Routes>
    </div>
  );
}

export default Payments;
