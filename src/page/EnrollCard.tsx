// import { useState } from 'react';
import styled from 'styled-components';
import CardView from '../components/CardView';
import InputForm from '../components/InputForm';
// import { Card } from '../types/card';
import useCardForm from '../hooks/useCardForm';

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
  const {
    cardNumbers,
    setCardNumbers,
    expirationDate,
    setExpirationDate,
    userName,
    setUserName,
  } = useCardForm({});
  console.log({cardNumbers, expirationDate, userName})
  return (
    <Page>
      <Container>
        <CardView cardInfo={{cardNumbers, expirationDate, userName}} />
        <InputForm cardInfo={{cardNumbers, expirationDate, userName}} handleInput={{setCardNumbers, setExpirationDate, setUserName}} />
      </Container>
    </Page>
  );
}
