import { useState } from 'react';
import CardListPage from './pages/CardListPage';
import CardAddPage from './pages/CardAddPage';

function App() {
  const [page, setPage] = useState('listPage');

  return page === 'listPage' ? (
    <CardListPage setPage={setPage} />
  ) : (
    <CardAddPage setPage={setPage} />
  );
}

export default App;
