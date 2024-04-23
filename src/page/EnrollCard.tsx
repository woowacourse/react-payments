import { useState } from 'react';
import styled from 'styled-components';
import CardView from '../components/CardView';
import InputForm from '../components/InputForm';
import { Card } from '../types/card';
import { DEFAULT_CARD } from '../constants/card';
import CardBackView from '../components/CardBackView';

export default function EnrollCard() {
  const [cardInfo, setCardInfo] = useState<Card>(DEFAULT_CARD);
  return (
    <Page>
      <Container>
        <CardView cardInfo={cardInfo} />
        <CardBackView cvc={cardInfo.cvc} />
        <InputForm cardInfo={cardInfo} handleInput={setCardInfo} />
      </Container>
    </Page>
  );
}

const Page = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: 50px 0px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 500px) {
    width: 85vw;
  }
`;
