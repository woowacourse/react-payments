import React, { useState } from 'react';
import Modal from './common/Modal';
import CardColor from './components/ModalContents/CardColor';
import CVCHelp from './components/ModalContents/CVCHelp';
import CardAdditionComplete from './components/CardAdditionComplete';
import AddCard from './page/AddCard';
import AppWrapper from './App.styles.js';
import GlobalStyles from './global.styles';

function App() {
  const [page, setPage] = useState('addCard');
  const [myCards, setMyCards] = useState([]);
  const [newCardInfo, setNewCardInfo] = useState({
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
  });

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
    setNewCardInfo({
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
    });
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
          />
        )}

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
