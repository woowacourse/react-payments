import GlobalStyles from './global.styles';
import React, { useState } from 'react';
import Card from './common/Card';
import Modal from './common/Modal';
import Nav from './components/Nav';

import { AppWrapper } from './App.styles.js';
import NewCardForm from './components/NewCardForm';
import CardColor from './components/ModalContents/CardColor';
import CVCHelp from './components/ModalContents/CVCHelp';

function App() {
  const [newCardInfo, setNewCardInfo] = useState({
    cardName: 'DEFAULT',
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

  const [openModalContent, setOpenModalContent] = useState({
    isModalOpen: true,
    modalContent: <CVCHelp />,
  });

  const handleCardColor = (name) => {
    setNewCardInfo({
      ...newCardInfo,
      cardName: name,
    });

    handleModalClose();
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

  const modalContentsObject = {
    cardColor: <CardColor handleCardColor={handleCardColor} />,
    cvcHelp: <CVCHelp />,
  };

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Nav />
        <div className='card-wrapper'>
          <Card cardInfo={newCardInfo} handleModalOpen={handleModalOpen} />
        </div>
        <NewCardForm
          cardInfo={newCardInfo}
          setNewCardInfo={setNewCardInfo}
          handleModalOpen={handleModalOpen}
        />
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
