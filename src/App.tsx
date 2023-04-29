import GlobalStyle from './GlobalStyle';
import CardList from './pages/CardList';
import CardRegistration from './pages/CardRegistration';
import { useState } from 'react';
import { CardListProvider } from './contexts/CardListContexts';

const PAGE = {
  CARD_LIST: 'card-list',
  CARD_REGISTRATION: 'card-registration',
};

function App() {
  const [page, setPage] = useState(PAGE.CARD_LIST);

  return (
    <>
      <GlobalStyle />
      <CardListProvider>
        {page === PAGE.CARD_LIST && <CardList setPageCardRegistration={() => setPage(PAGE.CARD_REGISTRATION)} />}
        {page === PAGE.CARD_REGISTRATION && <CardRegistration setPageCardList={() => setPage(PAGE.CARD_LIST)} />}
      </CardListProvider>
    </>
  );
}

export default App;
