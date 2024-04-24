import { useState } from 'react';
import Main from './style/MainPage.style';

import CardInfo from './CardInfo';
import CardPreview from './CardPreview';

const MainPage = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardCompany: null,
    cardNumber: ['', '', '', ''],
    expirationMonth: '',
    expirationYear: '',
    name: '',
    cvc: '',
    password: '',
  });

  const changeCardInfo = (cardInfo: CardInfo) => {
    setCardInfo(cardInfo);
  };

  return (
    <Main>
      <CardPreview {...cardInfo} />
      <CardInfo changeCardInfo={changeCardInfo} />
    </Main>
  );
};

export default MainPage;
