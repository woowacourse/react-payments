// import { useState } from 'react';
import styled from 'styled-components';
import CardView from '../components/CardView';
import InputForm from '../components/InputForm';
// import { Card } from '../types/card';
import useCardForm from '../hooks/useCardForm';
import { useEffect, useState } from 'react';
import { validateCarNumbers, validateExpirationDate } from '../domain/InputValidation';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.form`
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

  const [submitButtonFlag, setSubmitButtonFlag] = useState(false);
  useEffect(() => {
    try {
      
      validateCarNumbers(cardNumbers);
      validateExpirationDate(expirationDate);
      
      setSubmitButtonFlag(true);
    } catch (error) {
      console.log(error);
      setSubmitButtonFlag(false);
    }
  }, [cardNumbers, expirationDate, userName])

  return (
    <Page>
      <Container>
        <CardView cardInfo={{cardNumbers, expirationDate, userName}} />
        <InputForm cardInfo={{cardNumbers, expirationDate, userName}} handleInput={{setCardNumbers, setExpirationDate, setUserName}} />
        {submitButtonFlag && <button>제출</button>}
      </Container>
    </Page>
  );
}
