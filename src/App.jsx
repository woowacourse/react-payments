import { useState } from 'react';
import CardListPage from './components/CardListPage/CardListPage';
import CardAddPage from './components/CardAddPage/CardAddPage';

function App() {
  const [page, setPage] = useState('listPage');

  return page === 'listPage' ? (
    <CardListPage setPage={setPage} />
  ) : (
    <CardAddPage setPage={setPage} />
  );
}

export default App;
