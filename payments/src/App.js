import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useCard from "./hooks/useCard";
import { CardContext } from "./context/CardProvider";
import { CardListContext } from "./context/CardListProvider";
import Home from "./pages/Home";
import CardAddPage from "./pages/CardAddPage";
import useCardList from "./hooks/useCardList";

const App = () => {
  const { cardList, updateCardList } = useCardList();
  const { cardInfo, dispatch, validateCardInfo } = useCard();

  return (
    <CardListContext.Provider value={{ cardList, updateCardList }}>
      <CardContext.Provider value={{ cardInfo, dispatch, validateCardInfo }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addcard" element={<CardAddPage />} />
          </Routes>
        </BrowserRouter>
      </CardContext.Provider>
    </CardListContext.Provider>
  );
};

export default App;
