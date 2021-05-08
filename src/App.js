import React, { useState } from 'react';
import { AppWrapper } from './App.styles.js';
import GlobalStyles from './global.styles';

import NewCardForm from './components/NewCardForm';
import CardAdditionComplete from './components/CardAdditionComplete';
import Nav from './components/mixin/Nav';

import Card from './common/Card';
import { MODAL, PAGE } from './constants/constant';
import CardList from './components/CardList/index.js';
import { db } from './data/firebase.js';

function App() {
  const [page, setPage] = useState(PAGE.CARD_LIST);
  const [openModalContent, setOpenModalContent] = useState({
    isModalOpen: false,
    modalContent: '',
  });
  const [myCards, setMyCards] = useState({});
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
    db.collection('cards')
      .add(newCardInfo)
      .then(() => {
        resetNewCardInfo();
        setPage(PAGE.CARD_LIST);
      });
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
            <Nav onClickBackButton={() => setPage(PAGE.CARD_LIST)}>
              카드 추가
            </Nav>
            <div className='card-wrapper'>
              <Card
                cardInfo={newCardInfo}
                onClickCard={() => onOpenModal(MODAL.CARD_COLOR)}
              />
            </div>
            <NewCardForm
              cardInfo={newCardInfo}
              setNewCardInfo={setNewCardInfo}
              onOpenModal={onOpenModal}
              onCloseModal={onCloseModal}
              setPage={setPage}
              openModalContent={openModalContent}
              setOpenModalContent={setOpenModalContent}
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
        {page === PAGE.CARD_LIST && (
          <>
            <Nav>보유 카드</Nav>
            <CardList
              myCards={myCards}
              setMyCards={setMyCards}
              setPage={setPage}
              setNewCardInfo={setNewCardInfo}
            />
          </>
        )}
      </AppWrapper>
    </>
  );
}

export default App;
