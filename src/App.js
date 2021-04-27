import GlobalStyles from './global.styles';
import React, { useState, useEffect } from 'react';
import Card from './common/Card';
import Modal from './common/Modal';
import Nav from './components/Nav';

import { AppWrapper } from './App.styles.js';
import NewCardForm from './components/NewCardForm';
import CardColor from './components/ModalContents/CardColor';
import Keyboard from './components/ModalContents/Keyboard';

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
    modalContent: <Keyboard />,
  });

  const [keyboardTarget, setKeyboardTarget] = useState('');

  // const modalContentObject = {
  //   cardColorModal: <CardColor />,
  // };

  const handleCardColor = (name) => {
    setNewCardInfo({
      ...newCardInfo,
      cardName: name,
    });

    handleModalClose();
  };

  const handleKeyboardInput = (number) => {
    // TODO : value가 4글자면 모달 닫기
    // TODO : 다시 클릭하면 input value 지워주기 (확인은 그냥 모달 창 닫기)

    if (keyboardTarget === '') return;

    setNewCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      numbers: {
        ...prevCardInfo.numbers,
        [keyboardTarget]: prevCardInfo.numbers[keyboardTarget] + String(number),
      },
    }));
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
    setKeyboardTarget('');
  };

  useEffect(() => {
    if (keyboardTarget === '') return;
    handleModalOpen('keyboard');
  }, [keyboardTarget]);

  const modalContentsObject = {
    cardColor: <CardColor handleCardColor={handleCardColor} />,
    keyboard: <Keyboard handleKeyboardInput={handleKeyboardInput} />,
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
          setKeyboardTarget={setKeyboardTarget}
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
