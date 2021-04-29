import { useState } from "react";
import { PAGE } from "../constants";
import { Header } from "./common";
import CardAddition from "./CardAddition";
import CompleteCardAddition from "./CompleteCardAddition";
import Home from "./Home";

function App() {
  const [page, setPage] = useState({
    id: PAGE.HOME.ID,
    headerText: PAGE.HOME.HEADER_TEXT,
    onPageBack: null,
  });
  const [cardList, setCardList] = useState([]);
  const [processingCard, setProcessingCard] = useState({});

  const routeTo = {
    [PAGE.HOME.ID]: () =>
      setPage({
        id: PAGE.HOME.ID,
        headerText: PAGE.HOME.HEADER_TEXT,
        onPageBack: null,
      }),
    [PAGE.CARD_ADDITION.ID]: () =>
      setPage({
        id: PAGE.CARD_ADDITION.ID,
        headerText: PAGE.CARD_ADDITION.HEADER_TEXT,
        onPageBack: routeTo[PAGE.HOME.ID],
      }),
    [PAGE.COMPLETE_CARD_ADDITION.ID]: () =>
      setPage({
        id: PAGE.COMPLETE_CARD_ADDITION.ID,
        headerText: PAGE.COMPLETE_CARD_ADDITION.HEADER_TEXT,
        onPageBack: null,
      }),
  };

  const onCardInfoSubmit = (card) => {
    setProcessingCard(card);
    routeTo[PAGE.COMPLETE_CARD_ADDITION.ID]();
  };

  const onCardAdditionComplete = (card) => {
    setCardList((prevCardList) => [...prevCardList, card]);
    routeTo[PAGE.HOME.ID]();
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
      <Header title={page.headerText} onPageBack={page.onPageBack} />
      <main>{mainComponent[page.id]}</main>
    </div>
  );
}

export default App;
