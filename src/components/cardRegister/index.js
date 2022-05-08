import { memo } from 'react';
import { useState, useEffect, useReducer } from 'react';

import styled from 'styled-components';
import { CARD_TYPES, COMPONENTS, initialCardInfo } from '../../constants/card';
import { useModalSelector } from '../../hooks/useModalSelector';
import { cardInfoReducer } from '../../reducer/cardInfo';

import { Button } from '../common/Button';
import { ModalSelector } from '../common/ModalSelector';
import { PageTitle } from '../common/PageTitle';
import { CardExpireDateInput } from './CardExpireDateInput';
import { CardNumbersInput } from './CardNumbersInput';
import { CardOwnerInput } from './CardOwnerInput';
import { CardPasswordInput } from './CardPasswordInput';
import { CardPreview } from './CardPreview';
import { CardSelectModal } from './CardSelectModal';
import { CVCHelperModal } from './CVCHelperModal';
import { CVCInput } from './CVCInput';

export const CardRegister = memo(({ onSubmit }) => {
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
        cardInfo={initialCardInfo}
        onClickCard={() => openModal(COMPONENTS.CARD_TYPE)}
      />
      <CardNumbersInput
        cardType={cardInfo.cardType}
        cardNumbers={cardInfo.cardNumbers}
        onCardNumbersInput={dispatch}
        onCardNumberCheck={checkerFactory(COMPONENTS.NUMBERS)}
        openModal={() => openModal(COMPONENTS.CARD_TYPE)}
      />
      <CardExpireDateInput
        expireDate={cardInfo.expireDate}
        onExpireDateInput={dispatch}
        onCardExpireCheck={checkerFactory(COMPONENTS.EXPIRE_DATE)}
      />
      <CardOwnerInput
        ownerName={cardInfo.ownerName}
        onOwnerNameInput={dispatch}
      />
      <CVCInput
        CVC={cardInfo.CVC}
        onCVCInput={dispatch}
        onCardCVCCheck={checkerFactory(COMPONENTS.CVC)}
        openModal={() => openModal(COMPONENTS.CVC)}
      />
      <CardPasswordInput
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

      <Style.ButtonWrapper>
        <Button disabled={allCompleted ? false : true} onClick={onSubmit}>
          다음
        </Button>
      </Style.ButtonWrapper>
    </>
  );
});

const Style = {
  ButtonWrapper: styled.div`
    width: 100%;
    text-align: right;
  `,
};
