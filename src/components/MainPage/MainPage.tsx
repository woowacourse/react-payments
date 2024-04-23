import { useState } from 'react';

import CardInfo from '../CardInfo/CardInfo';
import CardPreview from '../CardPreview/CardPreview';

import { MainContainer } from './MainPage.styled';

const MainPage = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumbers: ['', '', '', ''],
    cardBrand: 'none',
    cardCompany: '',
    expirationMonth: '',
    expirationYear: '',
    name: '',
    cvc: '',
    password: ','
  });

  return (
    <MainContainer>
      <CardPreview {...cardInfo} />
      <CardInfo setCardInfo={setCardInfo} cardInfo={cardInfo} />
    </MainContainer>
  );
};

export default MainPage;
