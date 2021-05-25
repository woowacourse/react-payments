import { useState } from "react";

import Header from "./shared/Header";
import CardAddition from "./CardAddition";
import CompleteCardAddition from "./CompleteCardAddition";
import Home from "./Home";

import router from "../router";
import { PAGE } from "../constants";
import apiRequest from "../APIs";

const App = () => {
  const [page, setPage] = useState({
    id: PAGE.HOME.ID,
    headerText: PAGE.HOME.HEADER_TEXT,
    prevPage: "",
  });
  const [processingCard, setProcessingCard] = useState({});

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

  const onCardAdditionComplete = async (card) => {
    const { isSucceeded, message } = await apiRequest.cardList.post(card);

    if (!isSucceeded) {
      alert(message);

      return;
    }

    routeTo(PAGE.HOME.ID);
  };

  const getMainComponent = (pageId) => {
    switch (pageId) {
      case PAGE.HOME.ID:
        return <Home routeTo={routeTo} />;
      case PAGE.CARD_ADDITION.ID:
        return <CardAddition onCardInfoSubmit={onCardInfoSubmit} />;
      case PAGE.COMPLETE_CARD_ADDITION.ID:
        return (
          <CompleteCardAddition
            onCardAdditionComplete={onCardAdditionComplete}
            card={processingCard}
          />
        );
      default:
        return <p>404: Page Not Found</p>;
    }
  };

  return (
    <div className="app">
      <Header
        title={page.headerText}
        routeTo={routeTo}
        prevPage={page.prevPage}
      />
      <main>{getMainComponent(page.id)}</main>
    </div>
  );
};

export default App;
