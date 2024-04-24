import { useReducer, useState } from 'react';

import CardInfo from '../CardInfo/CardInfo';
import CardPreview from '../CardPreview/CardPreview';

import { MainContainer } from './MainPage.styled';
import cardInfoReducer from '../../store/cardInfoReducer';

const INITIAL_CARD_INFO_STATE: CardInfo = {
  cardNumbers: { value: ['', '', '', ''], isComplete: false, errorMessage: '' },
  cardBrand: { value: 'none', isComplete: false, errorMessage: '' },
  cardCompany: { value: '', isComplete: false, errorMessage: '' },
  expiration: { value: { month: '', year: '' }, isComplete: false, errorMessage: '' },
  name: { value: '', isComplete: false, errorMessage: '' },
  cvc: { value: '', isComplete: false, errorMessage: '' },
  password: { value: '', isComplete: false, errorMessage: '' },
}

const MainPage = () => {
  const [cardInfo, dispatchCardInfo] = useReducer(cardInfoReducer, INITIAL_CARD_INFO_STATE);
  const [cardState, setCardState] = useState<CardState>('front');

  const handleCardState = (cardState: CardState) => {
    setCardState(cardState)
  }

  return (
    <MainContainer>
      <CardPreview cardInfo={cardInfo} cardState={cardState} setCardState={setCardState} />
      <CardInfo cardInfo={cardInfo} dispatchCardInfo={dispatchCardInfo} handleCardState={handleCardState} />
    </MainContainer>
  );
};

export default MainPage;
