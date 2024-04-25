// import { useState } from 'react';
import styled from 'styled-components';
import CardView from '../components/CardView';
import InputForm from '../components/InputForm';
// import { Card } from '../types/card';
import useCardForm from '../hooks/useCardForm';
import { useEffect, useState } from 'react';
import { validateCarNumbers, validateExpirationDate, validateUserName } from '../domain/InputValidation';
import CardDropDown from '../components/CardDropDown';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.form`
  margin : 50px;
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
    cardBrand,
    setCardBrand,
  } = useCardForm({});

  const [submitButtonFlag, setSubmitButtonFlag] = useState(false);
  useEffect(() => {
    try {
      validateCarNumbers(cardNumbers);
      validateExpirationDate(expirationDate);
      validateUserName(userName);
      setSubmitButtonFlag(true);
    } catch (error) {
      setSubmitButtonFlag(false);
    }
    console.log(cardBrand)
  }, [cardNumbers, expirationDate, userName, cardBrand])

  return (
    <Page>
      <Container>
        <CardView cardInfo={{cardNumbers, expirationDate, userName, cardBrand}} />
        <InputForm cardInfo={{cardNumbers, expirationDate, userName, cardBrand}} handleInput={{setCardNumbers, setExpirationDate, setUserName, setCardBrand}} />
        {submitButtonFlag && <button>제출</button>}
      </Container>
    </Page>
  );
}
