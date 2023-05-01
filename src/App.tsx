import './styles/index.css';

import { useState } from 'react';
import { LOCAL_STORAGE_CARD_KEY } from './constant';
import { CardInfo, PageInfo } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AddCardPage } from './pages/AddCardPage';
import { HomePage } from './pages/HomePage';

export default function App() {
  const [page, setPage] = useState<PageInfo>('homePage');
  const [cardList, setCardList] = useLocalStorage<CardInfo[]>(
    [],
    LOCAL_STORAGE_CARD_KEY
  );

  return (
    <div className="app">
      {page === 'homePage' && (
        <HomePage
          cardList={cardList}
          setCardList={setCardList}
          setPage={setPage}
        />
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
