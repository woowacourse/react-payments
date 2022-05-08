import NotFound from "components/common/NotFound";
import Toast from "components/common/Toast";
import Home from "components/pages";
import Add from "components/pages/add";
import Complete from "components/pages/complete";
import Loading from "components/pages/Loading";
import { PATH } from "constant/path";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import useCards from "./hooks/useCards";

export default function App() {
  const { cards, addCard, editCard, error, isLoading } = useCards();

  if (isLoading) return <Loading />;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.ADD} element={<Add />} />
          <Route
            path={PATH.COMPLETE}
            element={<Complete addCard={addCard} editCard={editCard} />}
          />
          <Route path={PATH.HOME} element={<Home cards={cards} />} />
          <Route path={PATH.HOME2} element={<Home cards={cards} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {error.isError && <Toast>{error.errorMessage}</Toast>}
    </>
  );
}
