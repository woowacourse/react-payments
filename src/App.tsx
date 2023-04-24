import './styles/index.css';

import { useState } from 'react';
import { LOCAL_STORAGE_CARD_KEY } from './constant';
import { CardInfo, PageInfo } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import Homepage from './pages/HomePage';
import AddCardPage from './pages/AddCardPage';

export default function App() {
  const [page, setPage] = useState<PageInfo>('homePage');
  const [cardList, setCardList] = useLocalStorage<CardInfo[]>(
    [],
    LOCAL_STORAGE_CARD_KEY
  );

  return (
    <div className="app">
      {page === 'homePage' && (
        <Homepage cardList={cardList} onClick={() => setPage('addCardPage')} />
      )}
      {page === 'addCardPage' && (
        <AddCardPage
          cardList={cardList}
          setCardList={setCardList}
          setPage={setPage}
        />
      )}
    </div>
  );
}
