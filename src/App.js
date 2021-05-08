import React, { useState, useContext } from 'react';
import { AppWrapper } from './App.styles.js';
import GlobalStyles from './global.styles';

import NewCardForm from './components/NewCardForm';
import CardAdditionComplete from './components/CardAdditionComplete';
import Nav from './components/mixin/Nav';

import Card from './common/Card';
import { MODAL, PAGE } from './constants/constant';
import CardList from './components/CardList/index.js';

import { CardListProvider } from './data/context/CardListContext.js';
import { PageContext } from './data/context/PageContext.js';

function App() {
  const { page } = useContext(PageContext);

  const [openModalContent, setOpenModalContent] = useState({
    isModalOpen: false,
    modalContent: '',
  });
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

  // const resetNewCardInfo = () => {
  //   setNewCardInfo({
  //     cardName: '',
  //     cardNickName: '',
  //     numbers: {
  //       first: '',
  //       second: '',
  //       third: '',
  //       fourth: '',
  //     },
  //     user: '',
  //     expireDate: {
  //       month: '',
  //       year: '',
  //     },
  //     cvc: '',
  //     password: {
  //       first: '',
  //       second: '',
  //     },
  //   });
  // };

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
      <CardListProvider>
        <AppWrapper>
          {page === PAGE.ADD_CARD && (
            <>
              <Nav>카드 추가</Nav>
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
                openModalContent={openModalContent}
                setOpenModalContent={setOpenModalContent}
              />
            </>
          )}
          {page === PAGE.CARD_COMPLETE && (
            <CardAdditionComplete
              newCardInfo={newCardInfo}
              setNewCardInfo={setNewCardInfo}
            />
          )}
          {page === PAGE.CARD_LIST && (
            <>
              <Nav>보유 카드</Nav>
              <CardList setNewCardInfo={setNewCardInfo} />
            </>
          )}
        </AppWrapper>
      </CardListProvider>
    </>
  );
}

export default App;
