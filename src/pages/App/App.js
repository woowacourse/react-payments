import "./App.css";
import { useState } from "react";
import { URL } from "../../constants";
import { Header } from "../../components";
import CardAddition from "../CardAddition/CardAddition";
import CompleteCardAddition from "../CompleteCardAddition/CompleteCardAddition";
import MyCardList from "../MyCardList/MyCardList";
import { Route, Switch, useHistory, useLocation } from "react-router";
import { QUERY_STRING_KEY } from "../../constants.js";

const App = () => {
  const [cardList, setCardList] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const routeTo = (url) => {
    history.replace(url);
  };

  const onNewCardAdd = (card) => {
    const newCard = { cardDescription: null, ...card };

    setCardList((prevCardList) => [...prevCardList, newCard]);
    routeTo(
      URL.COMPLETE_CARD_ADDITION + `?${QUERY_STRING_KEY.ID}=${newCard.cardId}`
    );
  };

  const onCardAdditionComplete = (cardId, cardDescription) => {
    setCardList((prevCardList) =>
      prevCardList.map((card) => {
        if (card.cardId !== cardId) {
          return card;
        }

        card.cardDescription = cardDescription;

        return card;
      })
    );

    routeTo(URL.HOME);
  };

  const PAGE = {
    [URL.HOME]: {
      HEADER_TEXT: "보유카드",
      onPageBack: null,
    },
    [URL.CARD_ADDITION]: {
      HEADER_TEXT: "카드추가",
      onPageBack: () => {
        routeTo(URL.HOME);
      },
    },
    [URL.COMPLETE_CARD_ADDITION]: {
      HEADER_TEXT: "",
      onPageBack: null,
    },
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
            <MyCardList cardList={cardList} routeTo={routeTo} />
          </Route>
          <Route exact path={URL.CARD_ADDITION}>
            <CardAddition onNewCardAdd={onNewCardAdd} />
          </Route>
          <Route exact path={URL.COMPLETE_CARD_ADDITION}>
            <CompleteCardAddition
              onCardAdditionComplete={onCardAdditionComplete}
              card={cardList.find(
                (card) =>
                  String(card.cardId) ===
                  new URLSearchParams(location.search).get(QUERY_STRING_KEY.ID)
              )}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
