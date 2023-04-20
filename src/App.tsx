import { Home } from "./page/Home";
import { AddCard } from "./page/AddCard";
import { GlobalStyle } from "./style/resetStyle";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardType } from "./types/card";

const App = () => {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    const savedCards = localStorage.getItem("cards");

    if (savedCards) {
      setCards(JSON.parse(savedCards));
      return;
    }

    setCards(JSON.parse("[]"));
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home cards={cards} />} />
          <Route path="/addCard" element={<AddCard setCards={setCards} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
