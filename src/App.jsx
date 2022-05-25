import { useState } from "react";
import GlobalStyle from "globalStyles.jsx";

import CardAddPage from "Pages/CardAddPage";
import CardListPage from "Pages/CardListPage.jsx";
import { PAGE_NAME } from "utils/constants.js";

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
