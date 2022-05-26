import { useState } from "react";
import GlobalStyle from "globalStyles";

import CardAddPage from "Pages/CardAddPage";
import CardListPage from "Pages/CardListPage";
import { PAGE_NAME } from "utils/constants";

import CardInfoContextProvider from "context/CardInfoContextProvider";

export type PageType = "CardList" | "CardAdd";

function App() {
  const [page, setPage] = useState<PageType>(PAGE_NAME.CARD_LIST);

  const router = {
    CardList: <CardListPage setPage={setPage} />,
    CardAdd: <CardAddPage setPage={setPage} />,
  };

  return (
    <div className="App">
      <GlobalStyle />
      <CardInfoContextProvider>{router[page]}</CardInfoContextProvider>
    </div>
  );
}

export default App;
