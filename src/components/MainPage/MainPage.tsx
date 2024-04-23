import { useState } from 'react';

import CardInfo from '../CardInfo/CardInfo';
import CardPreview from '../CardPreview/CardPreview';

import { MainContainer } from './MainPage.styled';

const MainPage = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumbers: { value: ['', '', '', ''], isComplete: false },
    cardBrand: { value: 'none', isComplete: false },
    cardCompany: { value: '', isComplete: false },
    expiration: { value: { month: '', year: '' }, isComplete: false },
    name: { value: '', isComplete: false },
    cvc: { value: '', isComplete: false },
    password: { value: '', isComplete: false },
  });

  return (
    <MainContainer>
      <CardPreview {...cardInfo} />
      <CardInfo setCardInfo={setCardInfo} cardInfo={cardInfo} />
    </MainContainer>
  );
};

export default MainPage;
