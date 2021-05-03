import React, { useState } from 'react';
import PageHost from './components/PageHost';
import CardList from './components/pages/CardList';
import CardRegister from './components/pages/CardRegister';
import CardCompletion from './components/pages/CardCompletion';
import { firestore } from './firebase';
import GlobalStyle from './styles/global';

const PAGES = {
  LIST: {
    title: '보유카드',
    hasBackButton: false,
  },
  REGISTER: {
    title: '카드추가',
    hasBackButton: true,
  },
  COMPLETION: {
    title: '',
    hasBackButton: false,
  },
  EDITING: {
    title: '',
    hasBackButton: true,
  },
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGES.LIST);
  const [currentCardId, setCurrentCardId] = useState('');
  const [currentCardData, setCurrentCardData] = useState({});

  const handleConfirmPage = () => {
    if (currentPage === PAGES.REGISTER) {
      setCurrentPage(PAGES.COMPLETION);
    } else if (currentPage === PAGES.COMPLETION || currentPage === PAGES.EDITING) {
      setCurrentPage(PAGES.LIST);
    }
  };

  const handleAddCard = () => {
    setCurrentPage(PAGES.REGISTER);
  };

  const handleGoUpdate = async (cardId) => {
    const cardData = await firestore.collection('cards').doc(cardId).get();

    setCurrentCardId(cardData.id);
    setCurrentCardData(cardData.data());
    setCurrentPage(PAGES.EDITING);
  };

  return (
    <>
      <GlobalStyle />
      <PageHost navigationTitle={currentPage.title} hasBackButton={currentPage.hasBackButton}>
        {currentPage === PAGES.LIST && <CardList handleAddCard={handleAddCard} handleGoUpdate={handleGoUpdate} />}
        {currentPage === PAGES.REGISTER && (
          <CardRegister setCardData={setCurrentCardData} handleGoNext={handleConfirmPage} />
        )}
        {currentPage === PAGES.COMPLETION && (
          <CardCompletion cardData={currentCardData} handleConfirmPage={handleConfirmPage} />
        )}
        {currentPage === PAGES.EDITING && (
          <CardCompletion
            cardData={currentCardData}
            handleConfirmPage={handleConfirmPage}
            isEditing={true}
            cardId={currentCardId}
          />
        )}
      </PageHost>
    </>
  );
};

export default App;
