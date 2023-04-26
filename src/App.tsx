import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Card, CardContext } from './context/CardContext';

import { getLocalStorage } from './utils/localStorage';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import { LOCAL_STORAGE_KEY } from './constants';

function App() {
  const [cardList, setCardList] = useState(
    getLocalStorage<Card[]>(LOCAL_STORAGE_KEY.CARD_LIST, []),
  );

  return (
    <CardContext.Provider value={{ cardList, setCardList }}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </CardContext.Provider>
  );
}

export default App;
