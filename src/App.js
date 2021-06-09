import React, { useState } from 'react';

import Modal from './common/Modal';
import CardColor from './components/ModalContents/CardColor';
import CVCHelp from './components/ModalContents/CVCHelp';
import CardAdditionComplete from './components/CardAdditionComplete';
import AddCard from './components/AddCard';
import AppWrapper from './App.styles.js';
import GlobalStyles from './global.styles';
import CardList from './components/CardList';

function App() {
  const defaultCardInfo = {
    cardName: 'DEFAULT',
    cardNickName: '',
    numbers: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    user: '',
    expireDate: {
      month: '',
      year: '',
    },
    cvc: '',
    password: {
      first: '',
      second: '',
    },
  };
  const [page, setPage] = useState('addCard');
  const [myCards, setMyCards] = useState([]);
  const [newCardInfo, setNewCardInfo] = useState(defaultCardInfo);

  const handleCardColor = (name) => {
    setNewCardInfo({
      ...newCardInfo,
      cardName: name,
    });
    handleModalClose();
  };

  const modalContentsObject = {
    cardColor: <CardColor handleCardColor={handleCardColor} />,
    cvcHelp: <CVCHelp />,
  };

  const [openModalContent, setOpenModalContent] = useState({
    isModalOpen: true,
    modalContent: modalContentsObject.cardColor,
  });

  const resetNewCardInfo = () => {
    setNewCardInfo(defaultCardInfo);
  };

  const addNewCard = () => {
    setMyCards([...myCards, newCardInfo]);
    resetNewCardInfo();
  };

  const handleModalOpen = (content) => {
    setOpenModalContent({
      isModalOpen: true,
      modalContent: modalContentsObject[content],
    });
  };

  const handleModalClose = () => {
    setOpenModalContent({
      isModalOpen: false,
      modalContent: '',
    });
  };

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        {page === 'addCard' && (
          <AddCard
            newCardInfo={newCardInfo}
            handleModalOpen={handleModalOpen}
            setNewCardInfo={setNewCardInfo}
            setPage={setPage}
          />
        )}
        {page === 'cardComplete' && (
          <CardAdditionComplete
            newCardInfo={newCardInfo}
            setNewCardInfo={setNewCardInfo}
            addNewCard={addNewCard}
            setPage={setPage}
          />
        )}

        {page === 'cardList' && <CardList />}

        {openModalContent.isModalOpen && (
          <Modal handleModalClose={handleModalClose}>
            {openModalContent.modalContent}
          </Modal>
        )}
      </AppWrapper>
    </>
  );
}

export default App;
