import { useState } from "react";
import Header from "../stories/Header";
import CardAddition from "./CardAddition";
import CompleteCardAddition from "./CompleteCardAddition";

const PAGE = {
  HOME: {
    ID: "HOME",
    NAME: "보유카드",
  },
  CARD_ADDITION: {
    ID: "CARD_ADDITION",
    NAME: "카드추가",
  },
  COMPLETE_CARD_ADDITION: {
    ID: "COMPLETE_CARD_ADDITION",
    NAME: "",
  },
};

function App() {
  const [page, setPage] = useState({
    id: PAGE.HOME.ID,
    props: {},
  });
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
      <div>
        home
        <button
          onClick={() =>
            setPage({
              name: PAGE.CARD_ADDITION.NAME,
              id: PAGE.CARD_ADDITION.ID,
            })
          }
        >
          go card addition
        </button>
      </div>
    ),
    [PAGE.CARD_ADDITION.ID]: (props) => (
      <CardAddition onCardInfoSubmit={onCardInfoSubmit} {...props} />
    ),
    [PAGE.COMPLETE_CARD_ADDITION.ID]: (props) => (
      <CompleteCardAddition {...props} />
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

  return (
    <div className="app">
      <Header title={page.name} onPageBack={pageHandler[page.id]} />
      <main>{mainComponent[page.id](page.props)}</main>
    </div>
  );
}

export default App;
