import { useState } from "react";
import { URL } from "../constants";
import { Header } from "./common";
import CardAddition from "./CardAddition";
import CompleteCardAddition from "./CompleteCardAddition";
import Home from "./Home";
import { Route, Switch, useHistory, useLocation } from "react-router";

function App() {
  const [cardList, setCardList] = useState([]);
  const [processingCard, setProcessingCard] = useState({});
  const history = useHistory();
  const location = useLocation();

  const PAGE = {
    [URL.HOME]: {
      HEADER_TEXT: "보유카드",
      onPageBack: null,
    },
    [URL.CARD_ADDITION]: {
      HEADER_TEXT: "카드추가",
      onPageBack: () => {
        history.replace(URL.HOME);
      },
    },
    [URL.COMPLETE_CARD_ADDITION]: {
      HEADER_TEXT: "",
      onPageBack: null,
    },
  };

  const onCardInfoSubmit = (card) => {
    setProcessingCard(card);
    history.replace(URL.COMPLETE_CARD_ADDITION);
  };

  const onCardAdditionComplete = (card) => {
    setCardList((prevCardList) => [...prevCardList, card]);
    history.replace(URL.HOME);
  };

  return (
    <div className="app">
      <Header
        title={PAGE[location.pathname].HEADER_TEXT}
        onPageBack={PAGE[location.pathname].onPageBack}
      />
      <main>
        <Switch>
          <Route exact path={URL.HOME}>
            <Home cardList={cardList} />
          </Route>
          <Route exact path={URL.CARD_ADDITION}>
            <CardAddition onCardInfoSubmit={onCardInfoSubmit} />
          </Route>
          <Route exact path={URL.COMPLETE_CARD_ADDITION}>
            <CompleteCardAddition
              onCardAdditionComplete={onCardAdditionComplete}
              card={processingCard}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
