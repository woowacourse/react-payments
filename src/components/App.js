import { useState, useEffect } from "react";
import { PAGE } from "../constants";
import Header from "../stories/Header";
import CardAddition from "./CardAddition";
import CompleteCardAddition from "./CompleteCardAddition";
import Home from "./Home";

function App() {
  //TODO: name의 네이밍이 애매함, 없는 경우도 있기 때문에
  const [page, setPage] = useState({
    id: PAGE.HOME.ID,
    name: PAGE.HOME.NAME,
  });
  const [cardList, setCardList] = useState([]);
  const [processingCard, setProcessingCard] = useState({});

  const routeTo = {
    [PAGE.HOME.ID]: () =>
      setPage({
        id: PAGE.HOME.ID,
        name: PAGE.HOME.NAME,
      }),
    [PAGE.CARD_ADDITION.ID]: () =>
      setPage({
        id: PAGE.CARD_ADDITION.ID,
        name: PAGE.CARD_ADDITION.NAME,
      }),
    [PAGE.COMPLETE_CARD_ADDITION.ID]: () =>
      setPage({
        id: PAGE.COMPLETE_CARD_ADDITION.ID,
        name: PAGE.COMPLETE_CARD_ADDITION.NAME,
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
      <Header title={page.name} onPageBack={routeTo[PAGE.HOME.ID]} />
      <main>{mainComponent[page.id]}</main>
    </div>
  );
}

export default App;
