import Card from '../component/card/Card';
import Description from '../component/Description';
import styled from 'styled-components';
import Input from '../component/Input';
import { useState } from 'react';
import InputGroup from '../component/InputGroup';
import { CardInputProps } from '../types/CardInputTypes';
import {
  validateCardNumber,
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
  validateCardCVC,
} from '../validation/validation';
import { justifyBrandLogo } from './util/justifyBrandLogo';
import { CardNumberInput } from '../component/cardDetails/CardNumberInput';
import { ExpiryDateInput } from '../component/cardDetails/ExpiryDateInput';

type ErrorMessagesType = {
  first: string;
  second: string;
  third: string;
  fourth: string;
  MM: string;
  YY: string;
  CVC: string;
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 376px;
  padding: 30px;
  background-color: var(--color-white);
  padding-top: 77px;
  height: 700px;
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
  });

  const [errorMessages, setErrorMessages] = useState<ErrorMessagesType>({
    first: '',
    second: '',
    third: '',
    fourth: '',
    MM: '',
    YY: '',
    CVC: '',
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
    <Wrap>
      <Card
        cardNumber={cardInput}
        cardType={
          cardInput.first ? justifyBrandLogo(cardInput.first) : 'default'
        }
      />
      <Form>
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
        <Description headText="CVC 번호를 입력해 주세요" />
        <InputGroup label="CVC" errorMessages={errorMessages.CVC}>
          <Input
            maxLength={3}
            placeholder="123"
            validate={validateCardCVC}
            setCardInput={setCardInput}
            inputKey="CVC"
            handleErrorMessage={message => handleErrorMessages('CVC', message)}
          />
        </InputGroup>
      </Form>
    </Wrap>
  );
};

export default AddCard;
