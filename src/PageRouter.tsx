import Home from "components/pages";
import Add from "components/pages/add";
import Complete from "components/pages/complete";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
}
