import GlobalStyles from './global.styles';
import React, { useState } from 'react';
import Card from './common/Card';
import Modal from './common/Modal';
import Nav from './components/Nav';

import { AppWrapper } from './App.styles.js';
import NewCardForm from './components/NewCardForm';

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
    isModalOpen: false,
    modalContent: '',
  });

  // const modalContentObject = {
  //   cardColorModal: <CardColor />,
  // };

  const handleModalOpen = (content) => {
    setOpenModalContent({
      isModalOpen: true,
      modalContent: content,
    });
    console.log(content);
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
        {console.log(newCardInfo)}
        <Nav />
        <div className='card-wrapper'>
          <Card cardInfo={newCardInfo} />
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
