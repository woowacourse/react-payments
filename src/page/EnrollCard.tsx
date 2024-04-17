import { useState } from 'react';
import CardView from '../components/Card';
import InputForm from '../components/InputForm';
import { Card } from '../types/card';
import styled from 'styled-components';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 500px) {
    width: 85vw;
  }
`;

export default function EnrollCard() {
  const [cardInfo, setCardInfo] = useState<Card>({
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
    month: '',
    year: '',
    userName: '',
  });
  return (
    <Page>
      <Container>
        <CardView cardInfo={cardInfo} />
        <InputForm cardInfo={cardInfo} handleInput={setCardInfo} />
      </Container>
    </Page>
  );
}
