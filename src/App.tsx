import { useState } from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { AddCardPage } from '@pages/AddCardPage';
import { HomePage } from '@pages/HomePage';
import { type CardInfo } from '@type/card';
import { type PageInfo } from '@type/types';
import { LOCAL_STORAGE_CARD_KEY, PAGE_KIND } from '@constants/constant';

export default function App() {
  const [page, setPage] = useState<PageInfo>(PAGE_KIND.HOME);
  const [cardList, setCardList] = useLocalStorage<CardInfo[]>(
    [],
    LOCAL_STORAGE_CARD_KEY
  );

  return (
    <div className="app">
      {page === PAGE_KIND.HOME && (
        <HomePage
          cardList={cardList}
          setCardList={setCardList}
          setPage={setPage}
        />
      )}
      {page === PAGE_KIND.ADD_CARD && (
        <AddCardPage
          cardList={cardList}
          setCardList={setCardList}
          setPage={setPage}
        />
      )}
    </div>
  );
}
