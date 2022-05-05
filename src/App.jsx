import { useState } from "react";
import GlobalStyle from "./globalStyles.jsx";

import CardAddPage from "./Pages/CardAddPage.jsx";
import CardListPage from "./Pages/CardListPage.jsx";

function App() {
  const [page, setPage] = useState("CardList");

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
