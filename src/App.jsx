import { useState } from "react";
import GlobalStyle from "globalStyles";

import CardAddPage from "Pages/CardAddPage";
import CardListPage from "Pages/CardListPage";
import { PAGE_NAME } from "utils/constants";

function App() {
  const [page, setPage] = useState(PAGE_NAME.CARD_LIST);

  const router = {
    CardList: <CardListPage setPage={setPage} />,
    CardAdd: <CardAddPage setPage={setPage} />,
  };

  return (
    <div className="App">
      <GlobalStyle />
      {router[page]}
    </div>
  );
}

export default App;
