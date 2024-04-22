import { useState } from 'react';

import CardInfo from '../CardInfo/CardInfo';
import CardPreview from '../CardPreview/CardPreview';

import { MainContainer } from './MainPage.styled';

const MainPage = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumbers: ['', '', '', ''],
    cardBrand: 'none',
    expirationMonth: '',
    expirationYear: '',
    name: '',
  });

  return (
    <MainContainer>
      <CardPreview {...cardInfo} />
      <CardInfo setCardInfo={setCardInfo} cardInfo={cardInfo} />
    </MainContainer>
  );
};

export default MainPage;
