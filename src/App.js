import React, { useState } from 'react';
import { AppWrapper } from './App.styles.js';
import GlobalStyles from './global.styles';

import NewCardForm from './components/NewCardForm';
import CardAdditionComplete from './components/CardAdditionComplete';
import Nav from './components/mixin/Nav';
import CardColor from './components/ModalContents/CardColor';
import CVCHelp from './components/ModalContents/CVCHelp';

import Card from './common/Card';
import Modal from './common/Modal';

import { MODAL, PAGE } from './constants/constant';

function App() {
  const [page, setPage] = useState(PAGE.ADD_CARD);
  const [openModalContent, setOpenModalContent] = useState({
    isModalOpen: true,
    modalContent: MODAL.CARD_COLOR,
  });
  const [myCards, setMyCards] = useState([]);
  const [newCardInfo, setNewCardInfo] = useState({
    cardName: '',
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

  const addNewCard = () => {
    setMyCards([...myCards, newCardInfo]);
    resetNewCardInfo();
  };

  const addCardColor = (name) => {
    setNewCardInfo({
      ...newCardInfo,
      cardName: name,
    });
    onCloseModal();
  };

  const resetNewCardInfo = () => {
    setNewCardInfo({
      cardName: '',
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

  const onOpenModal = (modalContent) => {
    setOpenModalContent({
      isModalOpen: true,
      modalContent,
    });
  };

  const onCloseModal = () => {
    setOpenModalContent({
      isModalOpen: false,
      modalContent: '',
    });
  };

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        {page === PAGE.ADD_CARD && (
          <>
            <Nav />
            <div className='card-wrapper'>
              <Card cardInfo={newCardInfo} onOpenModal={onOpenModal} />
            </div>
            <NewCardForm
              cardInfo={newCardInfo}
              setNewCardInfo={setNewCardInfo}
              onOpenModal={onOpenModal}
              setPage={setPage}
            />
          </>
        )}
        {page === PAGE.CARD_COMPLETE && (
          <CardAdditionComplete
            newCardInfo={newCardInfo}
            setNewCardInfo={setNewCardInfo}
            addNewCard={addNewCard}
          />
        )}

        {openModalContent.isModalOpen && (
          <Modal onCloseModal={onCloseModal}>
            <>
              {openModalContent.modalContent === MODAL.CARD_COLOR && (
                <CardColor addCardColor={addCardColor} />
              )}
              {openModalContent.modalContent === MODAL.CVC_HELP && <CVCHelp />}
            </>
          </Modal>
        )}
      </AppWrapper>
    </>
  );
}

export default App;
