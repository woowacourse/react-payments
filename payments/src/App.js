import "./App.css";
import CardAdd from "./pages/CardAdd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetNickname from "./pages/SetNickname";
import useCard from "./hooks/useCard";
import { CardContext } from "./context/CardProvider";
import { useState } from "react";
import { CardListContext } from "./context/CardListProvider";
import Home from "./pages/Home";

const App = () => {
  const [cardList, setCardList] = useState([]);

  return (
    <CardListContext.Provider value={{ cardList, setCardList }}>
      <CardContext.Provider value={useCard()}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addcard" element={<CardAdd />} />
            <Route path="/nickname" element={<SetNickname />} />
          </Routes>
        </BrowserRouter>
      </CardContext.Provider>
    </CardListContext.Provider>
  );
};

export default App;
