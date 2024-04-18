import { useState } from 'react';
import styled from 'styled-components';

import CardInfo from './CardInfo';
import CardPreview from './CardPreview';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  gap: 48px;
  width: 100%;
  max-width: 375px;
  height: fit-content;
  background-color: white;
`;

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
