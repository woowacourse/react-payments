import { useReducer, useState } from 'react';

import CardInfo from '../CardInfo/CardInfo';
import CardPreview from '../CardPreview/CardPreview';

import { MainContainer } from './MainPage.styled';
import cardInfoReducer from '../../store/cardInfoReducer';
import PaymentsBottomFixedButton from '../common/PaymentsBottomFixedButton/PaymentsBottomFixedButton';

const INITIAL_CARD_INFO_STATE: CardInfo = {
  cardNumbers: { value: ['', '', '', ''], isComplete: false },
  cardBrand: { value: 'none', isComplete: false },
  cardCompany: { value: '', isComplete: false },
  expiration: { value: ['', ''], isComplete: false },
  name: { value: '', isComplete: false },
  cvc: { value: '', isComplete: false },
  password: { value: '', isComplete: false },
}

const MainPage = () => {
  const [cardInfo, dispatchCardInfo] = useReducer(cardInfoReducer, INITIAL_CARD_INFO_STATE);
  const [cardState, setCardState] = useState<CardState>('front');

  const handleCardState = (cardState: CardState) => {
    setCardState(cardState)
  }

  const showSubmitButton = true

  return (
    <>
      {!showSubmitButton || <PaymentsBottomFixedButton text="확인" onClick={() => { }} />}
      <MainContainer>
        <CardPreview cardInfo={cardInfo} cardState={cardState} setCardState={setCardState} />
        <CardInfo cardInfo={cardInfo} dispatchCardInfo={dispatchCardInfo} handleCardState={handleCardState} />
      </MainContainer>
    </>
  );
};

export default MainPage;
