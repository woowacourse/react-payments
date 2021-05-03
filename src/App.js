import React, { useState } from 'react';
import PageHost from './components/PageHost';
import CardList from './components/pages/CardList';
import CardRegister from './components/pages/CardRegister';
import CardCompletion from './components/pages/CardCompletion';
import GlobalStyle from './styles/global';

const PAGES = {
  LIST: {
    title: '보유카드',
    backButton: false,
  },
  REGISTER: {
    title: '카드추가',
    backButton: true,
  },
  COMPLETION: {
    title: '',
    backButton: false,
  },
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGES.LIST);
  const [currentCardData, setCurrentCardData] = useState({});

  const handleGoNext = () => {
    if (currentPage === PAGES.LIST) {
      setCurrentPage(PAGES.REGISTER);
    } else if (currentPage === PAGES.REGISTER) {
      setCurrentPage(PAGES.COMPLETION);
    } else if (currentPage === PAGES.COMPLETION) {
      setCurrentPage(PAGES.LIST);
    }
  };

  return (
    <>
      <GlobalStyle />
      <PageHost navigationTitle={currentPage.title} hasBackButton={currentPage.backButton}>
        {currentPage === PAGES.LIST && <CardList handleAddCard={handleGoNext} />}
        {currentPage === PAGES.REGISTER && (
          <CardRegister setCardData={setCurrentCardData} handleGoNext={handleGoNext} />
        )}
        {currentPage === PAGES.COMPLETION && <CardCompletion cardData={currentCardData} handleGoNext={handleGoNext} />}
      </PageHost>
    </>
  );
};

export default App;
