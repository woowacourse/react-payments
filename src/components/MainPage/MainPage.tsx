import { useEffect, useReducer, useState } from 'react';

import CardInfo from '../CardInfo/CardInfo';
import CardPreview from '../CardPreview/CardPreview';

import { MainContainer } from './MainPage.styled';
import cardInfoReducer from '../../store/cardInfoReducer';
import PaymentsBottomFixedButton from '../common/PaymentsBottomFixedButton/PaymentsBottomFixedButton';
import OPTION from '../../constants/option';

const INITIAL_CARD_INFO_STATE: CardInfo = {
  cardNumbers: { value: ['', '', '', ''], isComplete: false },
  cardBrand: { value: 'none', isComplete: false },
  cardCompany: { value: '', isComplete: false },
  expiration: { value: ['', ''], isComplete: false },
  name: { value: '', isComplete: false },
  cvc: { value: '', isComplete: false },
  password: { value: '', isComplete: false },
}

const COMPLETE_CONDITION = {
  cardNumbers: (values: string[]) => values.every(value => value.length === OPTION.cardNumberMaxLength),
  cardBrand: true,
  cardCompany: (value: CardCompany) => (value as string).length !== 0,
  expiration: (values: string[]) => values.every(value => value.length === OPTION.expirationDateMaxLength),
  name: (value: string) => value.length !== 0,
  cvc: (value: string) => value.length === OPTION.cvcMaxLength,
  password: (value: string) => value.length === OPTION.passwordMaxLength,
}

const MainPage = () => {
  const [cardInfo, dispatchCardInfo] = useReducer(cardInfoReducer, INITIAL_CARD_INFO_STATE);
  const [cardState, setCardState] = useState<CardState>('front');

  const handleCardState = (cardState: CardState) => {
    setCardState(cardState)
  }

  const showSubmitButton = (cardInfo: CardInfo): boolean => {
    return (
      COMPLETE_CONDITION.cardNumbers(cardInfo.cardNumbers.value) &&
      COMPLETE_CONDITION.cardBrand &&
      COMPLETE_CONDITION.cardCompany(cardInfo.cardCompany.value) &&
      COMPLETE_CONDITION.expiration(cardInfo.expiration.value) &&
      COMPLETE_CONDITION.name(cardInfo.name.value) &&
      COMPLETE_CONDITION.cvc(cardInfo.cvc.value) &&
      COMPLETE_CONDITION.password(cardInfo.password.value)
    );
  }

  return (
    <>
      {!showSubmitButton(cardInfo) || <PaymentsBottomFixedButton text="확인" onClick={() => { }} />}
      <MainContainer>
        <CardPreview cardInfo={cardInfo} cardState={cardState} setCardState={setCardState} />
        <CardInfo cardInfo={cardInfo} dispatchCardInfo={dispatchCardInfo} handleCardState={handleCardState} />
      </MainContainer>
    </>
  );
};

export default MainPage;
