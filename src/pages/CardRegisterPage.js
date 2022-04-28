import React from 'react';
import { useState, useEffect } from 'react';

import { Card } from '../components/common/Card';
import { CardExpireDateInputForm } from '../components/cardRegister/CardExpireDateInputForm';
import { CardNumbersInputForm } from '../components/cardRegister/CardNumbersInputForm';
import { CardOwnerInputForm } from '../components/cardRegister/CardOwnerInputForm';
import { CardPasswordInputForm } from '../components/cardRegister/CardPasswordInputForm';
import { CVCInputForm } from '../components/cardRegister/CVCInputForm';
import { CardSelectModal } from '../components/cardRegister/CardSelectModal';
import { Button } from '../components/common/Button';

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

  const [modalVisible, setModalVisible] = useState(false);

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

  return (
    <>
      <Card
        cardType={cardType}
        cardNumbers={cardNumbers}
        expireDate={expireDate}
        ownerName={ownerName}
        handleModalVisible={() => setModalVisible(true)}
      />
      <CardNumbersInputForm
        cardNumbers={cardNumbers}
        handleModalVisible={() => setModalVisible(true)}
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
      />
      <CardPasswordInputForm
        password={password}
        handlePasswordInput={setPassword}
        handleCardPasswordCheck={checkerFactory('cardPassword')}
      />
      <CardSelectModal
        visible={modalVisible}
        setVisible={setModalVisible}
        cardTypes={CARD_TYPES}
        handleCardType={setCardType}
        handleCardTypeCheck={checkerFactory('cardType')}
      />
      <Button disabled={allCompleted ? false : true}>다음</Button>
    </>
  );
};
