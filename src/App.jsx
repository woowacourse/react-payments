import { useState } from 'react';
import CardListPage from './pages/CardListPage';
import CardAddPage from './pages/CardAddPage';
import { PAGES } from './constants';

function App() {
  const [page, setPage] = useState('listPage');

  return page === PAGES.LIST ? (
    <CardListPage setPage={setPage} />
  ) : (
    <CardAddPage setPage={setPage} />
  );
}

export default App;
