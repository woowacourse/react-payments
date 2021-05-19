import React, { useState } from 'react';
import PageHost from './components/PageHost';
import CardList from './components/pages/CardList';
import CardRegister from './components/pages/CardRegister';
import CardCompletion from './components/pages/CardCompletion';
import CardEdit from './components/pages/CardEdit';
import { getCardByIdRequest } from './request';
import PAGES from '../src/constants/pages';
import GlobalStyle from './styles/global';

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGES.LIST);
  const [registeringCardData, setRegisteringCardData] = useState({});
  const [editingCardId, setEditingCardId] = useState('');
  const [editingCardData, setEditingCardData] = useState({});

  const handleAddCard = () => {
    setCurrentPage(PAGES.REGISTER);
  };

  const handleGoUpdate = async (cardId) => {
    try {
      const cardData = await getCardByIdRequest(cardId);

      setEditingCardId(cardData.id);
      setEditingCardData(cardData.data());
      setCurrentPage(PAGES.EDITING);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMovePage = (page) => {
    setCurrentPage(page);
  };

  const handleGoBack = (page) => {
    if (currentPage === PAGES.REGISTER) {
      setCurrentPage(PAGES.LIST);
    }
  };

  return (
    <>
      <GlobalStyle />
      <PageHost
        navigationTitle={currentPage.title}
        hasBackButton={currentPage.hasBackButton}
        handleGoBack={handleGoBack}
      >
        {currentPage === PAGES.LIST && <CardList handleAddCard={handleAddCard} handleGoUpdate={handleGoUpdate} />}
        {currentPage === PAGES.REGISTER && (
          <CardRegister setCardData={setRegisteringCardData} handleMovePage={handleMovePage} />
        )}
        {currentPage === PAGES.COMPLETION && (
          <CardCompletion cardData={registeringCardData} handleMovePage={handleMovePage} />
        )}
        {currentPage === PAGES.EDITING && (
          <CardEdit cardData={editingCardData} cardId={editingCardId} handleMovePage={handleMovePage} />
        )}
      </PageHost>
    </>
  );
};

export default App;
