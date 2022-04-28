import React from 'react';
import { useState, useEffect } from 'react';

import { CardExpireDateInputForm } from '../components/CardRegister/CardExpireDateInputForm';
import { CardNumbersInputForm } from '../components/CardRegister/CardNumbersInputForm';
import { CardOwnerInputForm } from '../components/CardRegister/CardOwnerInputForm';
import { CardPasswordInputForm } from '../components/CardRegister/CardPasswordInputForm';
import { CVCInputForm } from '../components/CardRegister/CVCInputForm';
import { CardSelectModal } from '../components/CardRegister/CardSelectModal';
import { CVCHelperModal } from '../components/CardRegister/CVCHelperModal';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Modal } from '../components/common/Modal';
import { PageTitle } from '../components/common/PageTitle';

const CARD_TYPES = [
  { name: '포코', color: 'gold' },
  { name: '준', color: '#04c09e' },
  { name: '공원', color: 'green' },
  { name: '후이', color: '#9198e5' },
  { name: '유세지', color: '#AB46D2' },
  { name: '마르코', color: '#E76E9A' },
  { name: '아놀드', color: '#FF5F00' },
  { name: '록바', color: '#FBCD58' },
];

export const CardRegisterPage = () => {
  const [cardNumbers, setCardNumbers] = useState({
    firstNumber: '',
    secondNumber: '',
    thirdNumber: '',
    fourthNumber: '',
  });

  const [expireDate, setExpireDate] = useState({
    month: '',
    year: '',
  });

  const [ownerName, setOwnerName] = useState('');

  const [CVC, setCVC] = useState('');

  const [password, setPassword] = useState({
    firstNumber: '',
    secondNumber: '',
  });

  const [cardType, setCardType] = useState({
    name: '',
    backgroundColor: '',
  });

  const [modalVisible, setModalVisible] = useState('');

  const modalSelector = (subject) => {
    return () => setModalVisible(subject);
  };

  const [checkInputs, setCheckInputs] = useState({
    cardNumbers: false,
    cardExpireDate: false,
    cardCVC: false,
    cardPassword: false,
    cardType: false,
  });

  const checkerFactory = (subject) => {
    const key = subject;

    return (isCompleted) => {
      setCheckInputs((prev) => ({ ...prev, [key]: isCompleted }));
    };
  };

  const [allCompleted, setAllCompleted] = useState(false);

  useEffect(() => {
    setAllCompleted(Object.values(checkInputs).every((check) => check));
  }, [checkInputs]);

  const loadModal = () => {
    switch (modalVisible) {
      case 'cardType':
        return (
          <CardSelectModal
            cardTypes={CARD_TYPES}
            handleVisible={() => setModalVisible('')}
            handleCardType={setCardType}
            handleCardTypeCheck={checkerFactory('cardType')}
          />
        );
      case 'cardCVC':
        return <CVCHelperModal />;
      default:
        return <div>no data</div>;
    }
  };

  return (
    <>
      <PageTitle>카드 추가</PageTitle>
      <Card
        cardType={cardType}
        cardNumbers={cardNumbers}
        expireDate={expireDate}
        ownerName={ownerName}
        handleModalVisible={modalSelector('cardType')}
      />
      <CardNumbersInputForm
        cardType={cardType}
        cardNumbers={cardNumbers}
        handleModalVisible={modalSelector('cardType')}
        handleCardNumbersInput={setCardNumbers}
        handleCardNumberCheck={checkerFactory('cardNumbers')}
      />
      <CardExpireDateInputForm
        expireDate={expireDate}
        handleExpireDateInput={setExpireDate}
        handleCardExpireCheck={checkerFactory('cardExpireDate')}
      />
      <CardOwnerInputForm
        ownerName={ownerName}
        handleOwnerNameInput={setOwnerName}
      />
      <CVCInputForm
        CVC={CVC}
        handleCVCInput={setCVC}
        handleCardCVCCheck={checkerFactory('cardCVC')}
        handleModalVisible={modalSelector('cardCVC')}
      />
      <CardPasswordInputForm
        password={password}
        handlePasswordInput={setPassword}
        handleCardPasswordCheck={checkerFactory('cardPassword')}
      />
      <Modal visible={modalVisible} handleVisible={() => setModalVisible('')}>
        {modalVisible && loadModal()}
      </Modal>

      <Button disabled={allCompleted ? false : true}>다음</Button>
    </>
  );
};
