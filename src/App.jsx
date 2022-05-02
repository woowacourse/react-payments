import { useState } from 'react';
import CardListPage from 'pages/CardListPage';
import CardAddPage from 'pages/CardAddPage';
import { PAGES } from 'constants';

function App() {
  const [page, setPage] = useState(PAGES.LIST);

  return page === PAGES.LIST ? (
    <CardListPage setPage={setPage} />
  ) : (
    <CardAddPage setPage={setPage} page={page} />
  );
}

export default App;
