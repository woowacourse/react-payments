import { useState } from 'react';
import Main from './style/MainPage.style';

import CardInfo from './CardInfo';
import CardPreview from './CardPreview';

const MainPage = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumber: ['', '', '', ''],
    expirationMonth: '',
    expirationYear: '',
    name: '',
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
