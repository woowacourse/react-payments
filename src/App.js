import { useContext } from 'react';

import { Header } from './components/Page/Header';
import { Page } from './components/Page';
import { CardList } from './components/Page/Body/CardList';
import { CardRegister } from './components/Page/Body/CardRegister';
import { CardRegistered } from './components/Page/Body/CardRegistered';

import { PAGE_TITLE } from './utils/constants/messages';
import { PageContext } from './contexts/PageContextProvider';

import * as Styled from './style';

function App() {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  const pages = {
    cardRegister: [
      <Header>
        <Styled.Button onClick={() => setCurrentPage('cardList')}>{'◀︎'}</Styled.Button>
        <Styled.Title>{PAGE_TITLE.CARD_REGISTER}</Styled.Title>
      </Header>,
      <CardRegister />,
    ],
    cardRegistered: [<CardRegistered />],
    cardList: [
      <Header>
        <Styled.Title>{PAGE_TITLE.CARD_LIST}</Styled.Title>
      </Header>,
      <CardList />,
    ],
  };

  return (
    <div className="App">
      <Page>{pages[currentPage]}</Page>
    </div>
  );
}

export default App;
