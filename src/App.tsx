import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AddCardPage } from './pages/AddCardPage';
import { HomePage } from './pages/HomePage';
import { type CardInfo, type PageInfo } from '@type/types';
import { LOCAL_STORAGE_CARD_KEY } from './constants/constant';

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
