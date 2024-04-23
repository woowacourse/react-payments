import { useReducer } from 'react';

import CardInfo from '../CardInfo/CardInfo';
import CardPreview from '../CardPreview/CardPreview';

import { MainContainer } from './MainPage.styled';
import cardInfoReducer from '../../store/cardInfoReducer';

const INITIAL_CARD_INFO_STATE: CardInfo = {
  cardNumbers: { value: ['', '', '', ''], isComplete: false },
  cardBrand: { value: 'none', isComplete: false },
  cardCompany: { value: '', isComplete: false },
  expiration: { value: { month: '', year: '' }, isComplete: false },
  name: { value: '', isComplete: false },
  cvc: { value: '', isComplete: false },
  password: { value: '', isComplete: false },
}

const MainPage = () => {
  const [cardInfo, dispatchCardInfo] = useReducer(cardInfoReducer, INITIAL_CARD_INFO_STATE);

  return (
    <MainContainer>
      <CardPreview {...cardInfo} />
      <CardInfo cardInfo={cardInfo} dispatchCardInfo={dispatchCardInfo} />
    </MainContainer>
  );
};

export default MainPage;
