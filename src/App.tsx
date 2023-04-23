import './styles/index.css';

import { useState } from 'react';
import { ADD_CARD_PAGE, HOME_PAGE, LOCAL_STORAGE_CARD_KEY } from './constant';
import { CardInfo, PageInfo } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import Homepage from './pages/HomePage';
import AddCardPage from './pages/AddCardPage';

export default function App() {
  const [page, setPage] = useState<PageInfo>(HOME_PAGE);
  const [cardList, setCardList] = useLocalStorage<CardInfo[]>(
    [],
    LOCAL_STORAGE_CARD_KEY
  );

  return (
    <div className="app">
      {page === HOME_PAGE && (
        <Homepage cardList={cardList} onClick={() => setPage(ADD_CARD_PAGE)} />
      )}
      {page === ADD_CARD_PAGE && (
        <AddCardPage
          cardList={cardList}
          onClick={() => setPage(HOME_PAGE)}
          setCardList={setCardList}
          setPage={setPage}
        />
      )}
    </div>
  );
}
