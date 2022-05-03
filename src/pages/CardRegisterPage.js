import React, { useState, useEffect, useReducer } from 'react';

import { cardInfoReducer } from '../reducer/cardInfo';

import { COMPONENTS, initialCardInfo, CARD_TYPES } from '../constants/card';

import { CardExpireDateInputForm } from '../components/CardRegister/CardExpireDateInputForm';
import { CardNumbersInputForm } from '../components/CardRegister/CardNumbersInputForm';
import { CardOwnerInputForm } from '../components/CardRegister/CardOwnerInputForm';
import { CardPasswordInputForm } from '../components/CardRegister/CardPasswordInputForm';
import { CVCInputForm } from '../components/CardRegister/CVCInputForm';
import { CardSelectModal } from '../components/CardRegister/CardSelectModal';
import { CVCHelperModal } from '../components/CardRegister/CVCHelperModal';
import { Button } from '../components/common/Button';
import { PageTitle } from '../components/common/PageTitle';
import { ModalSelector } from '../components/common/ModalSelector';
import { useModalSelector } from '../hooks/useModalSelector';
import { CardPreview } from '../components/CardRegister/CardPreview';

export const CardRegisterPage = () => {
  const [cardInfo, dispatch] = useReducer(cardInfoReducer, initialCardInfo);

  const [openedModalComponent, openModal, closeModal] = useModalSelector();

  const [checkInputCompleted, setCheckInputCompleted] = useState({
    cardNumbers: false,
    cardExpireDate: false,
    cardCVC: false,
    cardPassword: false,
    cardType: false,
  });

  const [allCompleted, setAllCompleted] = useState(false);

  const checkerFactory = (subject) => {
    return (isCompleted) => {
      setCheckInputCompleted((prev) => ({ ...prev, [subject]: isCompleted }));
    };
  };

  useEffect(() => {
    setAllCompleted(Object.values(checkInputCompleted).every((check) => check));
  }, [checkInputCompleted]);

  return (
    <>
      <PageTitle>카드 추가</PageTitle>
      <CardPreview
        cardInfo={cardInfo}
        onClick={() => openModal(COMPONENTS.CARD_TYPE)}
      />
      <CardNumbersInputForm
        cardType={cardInfo.cardType}
        cardNumbers={cardInfo.cardNumbers}
        onCardNumbersInput={dispatch}
        onCardNumberCheck={checkerFactory(COMPONENTS.NUMBERS)}
        openModal={() => openModal(COMPONENTS.CARD_TYPE)}
      />
      <CardExpireDateInputForm
        expireDate={cardInfo.expireDate}
        onExpireDateInput={dispatch}
        onCardExpireCheck={checkerFactory(COMPONENTS.EXPIRE_DATE)}
      />
      <CardOwnerInputForm
        ownerName={cardInfo.ownerName}
        onOwnerNameInput={dispatch}
      />
      <CVCInputForm
        CVC={cardInfo.CVC}
        onCVCInput={dispatch}
        onCardCVCCheck={checkerFactory(COMPONENTS.CVC)}
        openModal={() => openModal(COMPONENTS.CVC)}
      />
      <CardPasswordInputForm
        password={cardInfo.password}
        onPasswordInput={dispatch}
        onCardPasswordCheck={checkerFactory(COMPONENTS.PASSWORD)}
      />
      <ModalSelector selected={openedModalComponent} closeModal={closeModal}>
        <CardSelectModal
          name={COMPONENTS.CARD_TYPE}
          cardTypes={CARD_TYPES}
          closeModal={closeModal}
          onCardType={dispatch}
          onCardTypeCheck={checkerFactory(COMPONENTS.CARD_TYPE)}
        />
        <CVCHelperModal name={COMPONENTS.CVC} />
      </ModalSelector>

      <Button disabled={allCompleted ? false : true}>다음</Button>
    </>
  );
};
