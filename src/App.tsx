import GlobalStyle from './GlobalStyle';
import CardList from './pages/CardList';
import CardRegistration from './pages/CardRegistration';
import { useState } from 'react';
import { CardListProvider } from './contexts/CardListContexts';
import CardAlias from './pages/CardAlias';
import { PortalProvider } from './components/ModalPortal';

const enum PAGE {
  CARD_LIST = 'card-list',
  CARD_REGISTRATION = 'card-registration',
  CARD_ALIAS = 'card-alias',
}

function App() {
  const [page, setPage] = useState<PAGE>(PAGE.CARD_LIST);
  const [currentId, setCurrentId] = useState(0);

  return (
    <>
      <GlobalStyle />
      <CardListProvider>
        {page === PAGE.CARD_LIST && <CardList setPageCardRegistration={() => setPage(PAGE.CARD_REGISTRATION)} />}
        {page === PAGE.CARD_REGISTRATION && (
          <CardRegistration
            setPageCardAlias={() => setPage(PAGE.CARD_ALIAS)}
            setPageCardList={() => setPage(PAGE.CARD_LIST)}
            setCurrentId={setCurrentId}
          />
        )}
        {page === PAGE.CARD_ALIAS && (
          <CardAlias setPageCardList={() => setPage(PAGE.CARD_LIST)} currentId={currentId} />
        )}
      </CardListProvider>
      <PortalProvider />
    </>
  );
}

export default App;
