import React from 'react';
import { useState, useEffect, useReducer } from 'react';

import { cardInfoReducer } from '../reducer/cardInfo';

import { COMPONENTS, initialCardInfo } from '../constants/card';

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
  const [cardInfo, dispatch] = useReducer(cardInfoReducer, initialCardInfo);

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
        cardInfo={cardInfo}
        openModal={() => setOpenedModalComponent(COMPONENTS.CARD_TYPE)}
      />
      <CardNumbersInputForm
        cardType={cardInfo.cardType}
        cardNumbers={cardInfo.cardNumbers}
        handleCardNumbersInput={dispatch}
        handleCardNumberCheck={checkerFactory(COMPONENTS.NUMBERS)}
        openModal={() => setOpenedModalComponent(COMPONENTS.CARD_TYPE)}
      />
      <CardExpireDateInputForm
        expireDate={cardInfo.expireDate}
        handleExpireDateInput={dispatch}
        handleCardExpireCheck={checkerFactory(COMPONENTS.EXPIRE_DATE)}
      />
      <CardOwnerInputForm
        ownerName={cardInfo.ownerName}
        handleOwnerNameInput={dispatch}
      />
      <CVCInputForm
        CVC={cardInfo.CVC}
        handleCVCInput={dispatch}
        handleCardCVCCheck={checkerFactory(COMPONENTS.CVC)}
        openModal={() => setOpenedModalComponent(COMPONENTS.CVC)}
      />
      <CardPasswordInputForm
        password={cardInfo.password}
        handlePasswordInput={dispatch}
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
          handleCardType={dispatch}
          handleCardTypeCheck={checkerFactory(COMPONENTS.CARD_TYPE)}
        />
        <CVCHelperModal name={COMPONENTS.CVC} />
      </ModalSelector>

      <Button disabled={allCompleted ? false : true}>다음</Button>
    </>
  );
};
