import { useState } from "react";
import Header from "../stories/Header";
import CardAddition from "./CardAddition";

const PAGE = {
  HOME: {
    ID: "HOME",
    NAME: "보유카드",
  },
  CARD_ADDITION: {
    ID: "CARD_ADDITION",
    NAME: "카드추가",
  },
  SUCCESS_CARD_ADDITION: {
    ID: "SUCCESS_CARD_ADDITION",
    NAME: "",
  },
};

function App() {
  const [page, setPage] = useState(PAGE.HOME);
  const pageHandler = {
    [PAGE.HOME.ID]: null,
    [PAGE.CARD_ADDITION.ID]: () => setPage(PAGE.HOME),
    [PAGE.SUCCESS_CARD_ADDITION.ID]: null,
  };
  const mainComponent = {
    [PAGE.HOME.ID]: (
      <div>
        home
        <button onClick={() => setPage(PAGE.CARD_ADDITION)}>
          go card addition
        </button>
      </div>
    ),
    [PAGE.CARD_ADDITION.ID]: <CardAddition />,
    [PAGE.SUCCESS_CARD_ADDITION.ID]: "",
  };

  return (
    <div className="app">
      <Header title={page.NAME} onPageBack={pageHandler[page.ID]} />
      <main>{mainComponent[page.ID]}</main>
    </div>
  );
}

export default App;
