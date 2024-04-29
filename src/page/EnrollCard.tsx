import styled from 'styled-components';
import CardView from '../components/CardView';
import InputForm from '../components/InputForm';
import useCardForm from '../hooks/useCardForm';
import { useEffect, useState } from 'react';
import {
  validateCarNumbers,
  validateCVC,
  validateExpirationDate,
  validatePassword,
  validateUserName,
} from '../domain/InputValidation';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.form`
  margin: 50px;
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
    handleUpdateCardNumberInput,
    handleUpdateCardNumberErrorMessages,
    expirationDate,
    setExpirationDate,
    userName,
    setUserName,
    cardBrand, 
    handleUpdateCardBrand, 
    handleUpdateCardBrandIsNextField,
    CVC,
    setCVC,
    password,
    setPassword,
  } = useCardForm({});
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/card-registration-confirmation', {
      state: { ...cardNumbers, ...cardBrand },
    });
  };

  // const [submitButtonFlag, setSubmitButtonFlag] = useState(false);
  // useEffect(() => {
  //   try {
  //     validateCarNumbers(cardNumbers);
  //     validateExpirationDate(expirationDate);
  //     validateUserName(userName);
  //     validateCVC(CVC);
  //     validatePassword(password);
  //     setSubmitButtonFlag(true);
  //   } catch (error) {
  //     setSubmitButtonFlag(false);
  //   }
  // }, [cardNumbers, expirationDate, userName, cardBrand, CVC, password]);

  return (
    <Page>
      <Container onSubmit={handleSubmit}>
        <CardView
          cardNumbers={cardNumbers}
          expirationDate={expirationDate}
          userName={userName}
          cardBrand={cardBrand}
          CVC={CVC}
        />
        <InputForm
          cardInfo={{
            cardNumbers,
            expirationDate,
            userName,
            cardBrand,
            CVC,
            password,
          }}
          handleInput={{
            handleUpdateCardNumberInput,
            handleUpdateCardNumberErrorMessages,
            setExpirationDate,
            setUserName, 
            handleUpdateCardBrand, 
            handleUpdateCardBrandIsNextField,
            setCVC,
            setPassword,
          }}
        />
        {/* {submitButtonFlag && (
          <Button
            value={'제출'}
            layoutType='bottom'
          ></Button>
        )} */}
      </Container>
    </Page>
  );
}
