import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CardInfo from '../../components/CardInfo/CardInfo';
import CardPreview from '../../components/CardPreview/CardPreview';
import PaymentsBottomFixedButton from '../../components/common/PaymentsBottomFixedButton/PaymentsBottomFixedButton';

import { MainContainer } from './RegisterCardInfo.styled';

import cardInfoReducer from '../../store/cardInfoReducer';

import OPTION from '../../constants/option';
import PATH from '../../constants/path';

const INITIAL_CARD_INFO_STATE: CardInfo = {
  cardNumbers: { value: ['', '', '', ''], isComplete: false },
  cardBrand: { value: 'none', isComplete: false },
  cardCompany: { value: '', isComplete: false },
  expiration: { value: ['', ''], isComplete: false },
  name: { value: '', isComplete: false },
  cvc: { value: '', isComplete: false },
  password: { value: '', isComplete: false },
}

const date = new Date();
const year = date.getFullYear().toString().slice(2, 4);
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const now = year + month;


const COMPLETE_CONDITION = {
  cardNumbers: (cardInfo: CardInfo) => cardInfo.cardNumbers.value.every(value => value.length === OPTION.cardNumberMaxLength),
  cardCompany: (cardInfo: CardInfo) => (cardInfo.cardCompany.value as string).length !== 0,
  expiration: (cardInfo: CardInfo) => {
    return cardInfo.expiration.value.every(value => value.length === OPTION.expirationDateMaxLength)
      && +(cardInfo.expiration.value[1] + cardInfo.expiration.value[0]) - (+ now) >= 0
  },
  name: (cardInfo: CardInfo) => cardInfo.name.value.length !== 0,
  cvc: (cardInfo: CardInfo) => cardInfo.cvc.value.length === OPTION.cvcMaxLength,
  password: (cardInfo: CardInfo) => cardInfo.password.value.length === OPTION.passwordMaxLength,
}

const RegisterCardInfo = () => {
  const [cardInfo, dispatchCardInfo] = useReducer(cardInfoReducer, INITIAL_CARD_INFO_STATE);
  const [cardState, setCardState] = useState<CardState>('front');

  const handleCardState = (cardState: CardState) => {
    setCardState(cardState)
  }

  const showSubmitButton = (cardInfo: CardInfo): boolean => Object.values(COMPLETE_CONDITION).every((condition) => condition(cardInfo))

  const navigate = useNavigate();

  const navigateToComplete = () => {
    navigate(PATH.registerComplete, { state: cardInfo });
  };

  return (
    <>
      {!showSubmitButton(cardInfo) || <PaymentsBottomFixedButton text="확인" onClick={navigateToComplete} />}
      <MainContainer>
        <CardPreview cardInfo={cardInfo} cardState={cardState} setCardState={setCardState} />
        <CardInfo cardInfo={cardInfo} dispatchCardInfo={dispatchCardInfo} handleCardState={handleCardState} />
      </MainContainer>
    </>
  );
};

export default RegisterCardInfo;
