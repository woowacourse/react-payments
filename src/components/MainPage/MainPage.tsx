import { useState } from 'react';

import CardInfo from '../CardInfo/CardInfo';
import CardPreview from '../CardPreview/CardPreview';

import { MainContainer } from './MainPage.styled';

const MainPage = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumber: ['', '', '', ''],
    cardBrand: 'none',
    expirationMonth: '',
    expirationYear: '',
    name: '',
  });

  const changeCardInfo = (cardInfo: CardInfo) => {
    setCardInfo(cardInfo);
  };

  return (
    <MainContainer>
      <CardPreview {...cardInfo} />
      <CardInfo changeCardInfo={changeCardInfo} />
    </MainContainer>
  );
};

export default MainPage;
