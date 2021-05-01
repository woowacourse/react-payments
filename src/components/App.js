import { useState } from "react";

import Header from "../stories/Header";
import CardAddition from "./CardAddition";
import CompleteCardAddition from "./CompleteCardAddition";
import Home from "./Home";

import router from "../router";
import { PAGE } from "../constants";

const initialCardState = {
  cardType: {
    name: "",
    color: "",
  },
  cardNumbers: [],
  expirationDate: {
    month: "",
    year: "",
  },
  username: "",
  secureCode: "",
  password: [],
};

function App() {
  const [page, setPage] = useState({
    id: PAGE.HOME.ID,
    headerText: PAGE.HOME.HEADER_TEXT,
    prevPage: "",
  });
  const [cardList, setCardList] = useState([initialCardState]);
  const [processingCard, setProcessingCard] = useState(initialCardState);

  const routeTo = (pageId) => {
    const pageInfo = router[pageId];

    if (pageInfo) {
      setPage({ ...pageInfo });
    }
  };

  const onCardInfoSubmit = (card) => {
    setProcessingCard(card);
    routeTo(PAGE.COMPLETE_CARD_ADDITION.ID);
  };

  const onCardAdditionComplete = (card) => {
    setCardList((prevCardList) => [...prevCardList, card]);
    routeTo(PAGE.HOME.ID);
  };

  const mainComponent = {
    [PAGE.HOME.ID]: <Home cardList={cardList} routeTo={routeTo} />,
    [PAGE.CARD_ADDITION.ID]: (
      <CardAddition onCardInfoSubmit={onCardInfoSubmit} />
    ),
    [PAGE.COMPLETE_CARD_ADDITION.ID]: (
      <CompleteCardAddition
        onCardAdditionComplete={onCardAdditionComplete}
        card={processingCard}
      />
    ),
  };

  return (
    <div className="app">
      <Header
        title={page.headerText}
        routeTo={routeTo}
        prevPage={page.prevPage}
      />
      <main>{mainComponent[page.id]}</main>
    </div>
  );
}

export default App;
