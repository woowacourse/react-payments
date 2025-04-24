import Card from '../component/card/Card';

import styled from 'styled-components';

import { useState } from 'react';

import { CardInputProps } from '../types/CardInputTypes';
import {
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
  validateCardCVC,
} from '../validation/validation';
import { justifyBrandLogo } from './util/justifyBrandLogo';
import { CardNumberInput } from '../component/cardDetails/CardNumberInput';
import { ExpiryDateInput } from '../component/cardDetails/ExpiryDateInput';
import { CVCInput } from '../component/cardDetails/CVCInput';
import { ErrorMessagesType } from '../types/ErrorMessagesType';
import CardBrandSelect from '../component/cardDetails/CardBrandSelect';
import { SecretNumberInput } from '../component/cardDetails/SecretNumberInput';
import { SubmitButton } from '../component/SubmitButton';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 376px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 77px;
  height: 100%;
  gap: 45px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`;

const AddCard = () => {
  const [cardInput, setCardInput] = useState<CardInputProps>({
    first: null,
    second: null,
    third: null,
    fourth: null,
    MM: null,
    YY: null,
    CVC: null,
    secretNumber: null,
  });

  const [errorMessages, setErrorMessages] = useState<ErrorMessagesType>({
    first: '',
    second: '',
    third: '',
    fourth: '',
    MM: '',
    YY: '',
    CVC: '',
    cardBrand: '',
    secretNumber: '',
  });

  const handleErrorMessages = (
    key: keyof ErrorMessagesType,
    message: string,
  ) => {
    setErrorMessages(prev => ({
      ...prev,
      [key]: message,
    }));
  };

  const handleCardNumberErrorMessages = () => {
    const filterErrorMessage = [
      errorMessages.first,
      errorMessages.second,
      errorMessages.third,
      errorMessages.fourth,
    ].filter(message => message.length !== 0);
    return filterErrorMessage[0];
  };

  const handlePeriodErrorMessages = () => {
    const filterErrorMessage = [errorMessages.YY, errorMessages.MM].filter(
      message => message.length !== 0,
    );
    return filterErrorMessage[0];
  };

  return (
    <>
      <Wrap>
        <Card
          cardNumber={cardInput}
          cardType={
            cardInput.first ? justifyBrandLogo(cardInput.first) : 'default'
          }
          cardColor={cardInput.cardBrand}
        />
        <Form>
          <SecretNumberInput
            errorMessages={errorMessages}
            setCardInput={setCardInput}
            handleErrorMessages={handleErrorMessages}
          />
          <CardBrandSelect
            setCardInput={setCardInput}
            onColorChange={color => {
              setCardInput(prev => ({
                ...prev,
                cardBrand: color,
              }));
            }}
          />
          <CardNumberInput
            cardInput={cardInput}
            setCardInput={setCardInput}
            errorMessages={errorMessages}
            handleErrorMessages={handleErrorMessages}
            handleCardNumberErrorMessages={handleCardNumberErrorMessages}
          />

          <ExpiryDateInput
            handlePeriodErrorMessages={handlePeriodErrorMessages}
            validateCardExpirationDateMM={validateCardExpirationDateMM}
            validateCardExpirationDateYY={validateCardExpirationDateYY}
            setCardInput={setCardInput}
            handleErrorMessages={handleErrorMessages}
          />
          <CVCInput
            validateCardCVC={validateCardCVC}
            setCardInput={setCardInput}
            handleErrorMessages={handleErrorMessages}
            errorMessages={errorMessages}
          />
        </Form>
      </Wrap>
      <SubmitButton />
    </>
  );
};

export default AddCard;
