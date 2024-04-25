// import { useState } from 'react';
import styled from 'styled-components';
import CardView from '../components/CardView';
import InputForm from '../components/InputForm';
// import { Card } from '../types/card';
import useCardForm from '../hooks/useCardForm';
import { useEffect, useState } from 'react';
import { validateCarNumbers, validateCVC, validateExpirationDate, validatePassword, validateUserName } from '../domain/InputValidation';
import BottomButton from '../components/BottomButton';


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
    CVC,
    setCVC,
    password,
    setPassword
  } = useCardForm({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

  };

  const [submitButtonFlag, setSubmitButtonFlag] = useState(false);
  useEffect(() => {
    try {
      validateCarNumbers(cardNumbers);
      validateExpirationDate(expirationDate);
      validateUserName(userName);
      validateCVC(CVC);
      validatePassword(password);
      setSubmitButtonFlag(true);
    } catch (error) {
      setSubmitButtonFlag(false);
    }
  }, [cardNumbers, expirationDate, userName, cardBrand, CVC, password])

  return (
    <Page>
      <Container onSubmit={handleSubmit}>
        <CardView cardInfo={{cardNumbers, expirationDate, userName, cardBrand, CVC, password}} />
        <InputForm cardInfo={{cardNumbers, expirationDate, userName, cardBrand, CVC, password}} handleInput={{setCardNumbers, setExpirationDate, setUserName, setCardBrand, setCVC, setPassword}} />
        {submitButtonFlag && <BottomButton value={'제출'}></BottomButton>}
      </Container>
    </Page>
  );
}
