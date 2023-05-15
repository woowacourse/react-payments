import "./App.css";
import "./style/reset.css";
import "./style/palette.css";

import CardInputPage from "./component/CardInputPage/CardInputPage";
import CardListPage from "./component/CardListPage/CardListPage";
import CardNickInputPage from "./component/CardNickInputPage/CardNickInputPage";
import RegisterSpinnerPage from "./component/RegisterSpinnerPage/RegisterSpinnerPage";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useCardList } from "./hook/useCardList";
import { LINK_KEYWORD } from "./constant/page";

function App() {
  const { cardList, addNewCard, setNickNewCard } = useCardList();

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<CardListPage cardList={cardList} />} />
          <Route
            path={LINK_KEYWORD.CARD_LIST}
            element={<CardListPage cardList={cardList} />}
          />
          <Route
            path={LINK_KEYWORD.CARD_INPUT_FORM}
            element={<CardInputPage addNewCard={addNewCard} />}
          />
          <Route
            path={LINK_KEYWORD.CARD_INPUT_NICK}
            element={
              <CardNickInputPage
                card={cardList[cardList.length - 1]}
                setNickNewCard={setNickNewCard}
              />
            }
          />
          <Route
            path={LINK_KEYWORD.REGISTER_SPINNER}
            element={<RegisterSpinnerPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
