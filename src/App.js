import React, { useContext } from 'react';
import { AppWrapper } from './App.styles.js';
import GlobalStyles from './global.styles';

import CardAdditionComplete from './components/CardAdditionComplete';
import Nav from './components/mixin/Nav';

import { PAGE } from './constants/constant';
import CardList from './components/CardList/index.js';

import { CardListProvider } from './data/context/CardListContext.js';
import { PageContext } from './data/context/PageContext.js';
import { CardProvider } from './data/context/CardContext.js';
import AddCard from './components/AddCard/index.js';

function App() {
  const { page } = useContext(PageContext);

  return (
    <>
      <GlobalStyles />
      <CardListProvider>
        <CardProvider>
          <AppWrapper>
            {page === PAGE.ADD_CARD && <AddCard />}
            {page === PAGE.CARD_COMPLETE && <CardAdditionComplete />}
            {page === PAGE.CARD_LIST && (
              <>
                <Nav>보유 카드</Nav>
                <CardList />
              </>
            )}
          </AppWrapper>
        </CardProvider>
      </CardListProvider>
    </>
  );
}

export default App;
