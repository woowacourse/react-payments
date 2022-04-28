import React from 'react';
import { useState, useEffect } from 'react';

import { COMPONENTS } from '../constants/card';

import { CardExpireDateInputForm } from '../components/CardRegister/CardExpireDateInputForm';
import { CardNumbersInputForm } from '../components/CardRegister/CardNumbersInputForm';
import { CardOwnerInputForm } from '../components/CardRegister/CardOwnerInputForm';
import { CardPasswordInputForm } from '../components/CardRegister/CardPasswordInputForm';
import { CVCInputForm } from '../components/CardRegister/CVCInputForm';
import { CardSelectModal } from '../components/CardRegister/CardSelectModal';
import { CVCHelperModal } from '../components/CardRegister/CVCHelperModal';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { PageTitle } from '../components/common/PageTitle';
import { ModalSelector } from '../components/common/ModalSelector';

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

  const [openedModalComponent, setOpenedModalComponent] = useState('');

  const [checkInputCompleted, setCheckInputCompleted] = useState({
    cardNumbers: false,
    cardExpireDate: false,
    cardCVC: false,
    cardPassword: false,
    cardType: false,
  });
  const checkerFactory = (subject) => {
    const key = subject;

    return (isCompleted) => {
      setCheckInputCompleted((prev) => ({ ...prev, [key]: isCompleted }));
    };
  };

  const [allCompleted, setAllCompleted] = useState(false);
  useEffect(() => {
    setAllCompleted(Object.values(checkInputCompleted).every((check) => check));
  }, [checkInputCompleted]);

  return (
    <>
      <PageTitle>카드 추가</PageTitle>
      <Card
        cardType={cardType}
        cardNumbers={cardNumbers}
        expireDate={expireDate}
        ownerName={ownerName}
        openModal={() => setOpenedModalComponent(COMPONENTS.CARD_TYPE)}
      />
      <CardNumbersInputForm
        cardType={cardType}
        cardNumbers={cardNumbers}
        handleCardNumbersInput={setCardNumbers}
        handleCardNumberCheck={checkerFactory(COMPONENTS.NUMBERS)}
        openModal={() => setOpenedModalComponent(COMPONENTS.CARD_TYPE)}
      />
      <CardExpireDateInputForm
        expireDate={expireDate}
        handleExpireDateInput={setExpireDate}
        handleCardExpireCheck={checkerFactory(COMPONENTS.EXPIRE_DATE)}
      />
      <CardOwnerInputForm
        ownerName={ownerName}
        handleOwnerNameInput={setOwnerName}
      />
      <CVCInputForm
        CVC={CVC}
        handleCVCInput={setCVC}
        handleCardCVCCheck={checkerFactory(COMPONENTS.CVC)}
        openModal={() => setOpenedModalComponent(COMPONENTS.CVC)}
      />
      <CardPasswordInputForm
        password={password}
        handlePasswordInput={setPassword}
        handleCardPasswordCheck={checkerFactory(COMPONENTS.PASSWORD)}
      />
      <ModalSelector
        selected={openedModalComponent}
        closeModal={() => {
          setOpenedModalComponent('');
        }}
      >
        <CardSelectModal
          name={COMPONENTS.CARD_TYPE}
          cardTypes={CARD_TYPES}
          closeModal={() => setOpenedModalComponent('')}
          handleCardType={setCardType}
          handleCardTypeCheck={checkerFactory(COMPONENTS.CARD_TYPE)}
        />
        <CVCHelperModal name={COMPONENTS.CVC} />
      </ModalSelector>

      <Button disabled={allCompleted ? false : true}>다음</Button>
    </>
  );
};
