import Home from "components/pages";
import Add from "components/pages/add";
import Complete from "components/pages/complete";
import { PATH } from "constant/path";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.ADD} element={<Add />} />
        <Route path={PATH.COMPLETE} element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
}
