import GlobalStyles from './global.styles';
import React, { useState } from 'react';
import Card from './common/Card';
import Modal from './common/Modal';
import Nav from './components/Nav';

import { AppWrapper } from './App.styles.js';
import NewCardForm from './components/NewCardForm';
import CardColor from './components/ModalContents/CardColor';
import CVCHelp from './components/ModalContents/CVCHelp';
import CardAdditionComplete from './components/CardAdditionComplete';

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
          <>
            <Nav />
            <div className='card-wrapper'>
              <Card cardInfo={newCardInfo} handleModalOpen={handleModalOpen} />
            </div>
            <NewCardForm
              cardInfo={newCardInfo}
              setNewCardInfo={setNewCardInfo}
              handleModalOpen={handleModalOpen}
              setPage={setPage}
            />
          </>
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
