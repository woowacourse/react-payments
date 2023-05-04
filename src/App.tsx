import "./App.css";
import "./style/reset.css";
import "./style/palette.css";

import CardInputPage from "./component/CardInputPage/CardInputPage";
import CardListPage from "./component/CardListPage/CardListPage";
import CardNickInputPage from "./component/CardNickInputPage/CardNickInputPage";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useCardList } from "./hook/cardListHook";

function App() {
  const { cardList, addNewCard, setNickNewCard } = useCardList();

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<CardListPage cardList={cardList} />} />
          <Route
            path="/CardListPage"
            element={<CardListPage cardList={cardList} />}
          />
          <Route
            path="/CardInputPage"
            element={<CardInputPage addNewCard={addNewCard} />}
          />
          <Route
            path="/CardNickInputPage"
            element={
              <CardNickInputPage
                card={cardList[cardList.length - 1]}
                setNickNewCard={setNickNewCard}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
