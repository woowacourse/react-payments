import { useState, useEffect } from "react";
import { PAGE } from "../constants";
import Header from "../stories/Header";
import CardAddition from "./CardAddition";
import CompleteCardAddition from "./CompleteCardAddition";
import Home from "./Home";

function App() {
  const [page, setPage] = useState({
    id: PAGE.HOME.ID,
    props: {},
  });
  const [cardList, setCardList] = useState([]);

  //TODO: 네이밍 고민해보기
  const pageHandler = {
    [PAGE.HOME.ID]: null,
    [PAGE.CARD_ADDITION.ID]: () =>
      setPage({
        name: PAGE.HOME.NAME,
        id: PAGE.HOME.ID,
      }),
    [PAGE.COMPLETE_CARD_ADDITION.ID]: null,
  };
  const mainComponent = {
    [PAGE.HOME.ID]: (props) => (
      <Home cardList={cardList} routeTo={setPage} {...props} />
    ),
    [PAGE.CARD_ADDITION.ID]: (props) => (
      <CardAddition onCardInfoSubmit={onCardInfoSubmit} {...props} />
    ),
    [PAGE.COMPLETE_CARD_ADDITION.ID]: (props) => (
      <CompleteCardAddition
        onCardAdditionComplete={onCardAdditionComplete}
        {...props}
      />
    ),
  };

  const onCardInfoSubmit = (card) => {
    setPage({
      //TODO: name의 네이밍이 애매함, 없는 경우도 있기 때문에
      id: PAGE.COMPLETE_CARD_ADDITION.ID,
      props: {
        card,
      },
    });
  };

  const onCardAdditionComplete = (card) => {
    setCardList((prevCardList) => [...prevCardList, card]);
  };

  //TODO: cardList가 변하면 모두 홈으로 돌아가는 현상에 대해서 논의하기
  useEffect(() => {
    setPage({
      id: PAGE.HOME.ID,
      props: {
        cardList,
      },
    });
  }, [cardList]);

  return (
    <div className="app">
      <Header title={page.name} onPageBack={pageHandler[page.id]} />
      <main>{mainComponent[page.id](page.props)}</main>
    </div>
  );
}

export default App;
