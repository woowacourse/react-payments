import { useState, useEffect, useReducer } from 'react';

import { cardInfoReducer } from '../reducer/cardInfo';

import { COMPONENTS, initialCardInfo, CARD_TYPES } from '../constants/card';

import { CardExpireDateInput } from '../components/CardRegister/CardExpireDateInput';
import { CardNumbersInput } from '../components/CardRegister/CardNumbersInput';
import { CardOwnerInput } from '../components/CardRegister/CardOwnerInput';
import { CardPasswordInput } from '../components/CardRegister/CardPasswordInput';
import { CVCInput } from '../components/CardRegister/CVCInput';
import { CardSelectModal } from '../components/CardRegister/CardSelectModal';
import { CVCHelperModal } from '../components/CardRegister/CVCHelperModal';
import { Button } from '../components/common/Button';
import { PageTitle } from '../components/common/PageTitle';
import { ModalSelector } from '../components/common/ModalSelector';
import { useModalSelector } from '../hooks/useModalSelector';
import { CardPreview } from '../components/CardRegister/CardPreview';

import { Layout } from '../components/common/styled';

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
    <Layout>
      <PageTitle>카드 추가</PageTitle>
      <CardPreview
        cardInfo={cardInfo}
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

      <Button disabled={allCompleted ? false : true}>다음</Button>
    </Layout>
  );
};
