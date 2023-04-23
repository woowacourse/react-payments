import { Home } from "./page/Home";
import { AddCard } from "./page/AddCard";
import { GlobalStyle } from "./style/resetStyle";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardType } from "./types/card";
import useCards from "./hook/useCards";

const App = () => {
  const { cards, addNewCard } = useCards();

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home cards={cards} />} />
          <Route path="/addCard" element={<AddCard addNewCard={addNewCard} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
