import styled from 'styled-components';
// import INPUT_TYPE_CATEGORIES from '../constants/inputType';
import {
  CardBrand,
  CardInfo,
  CardNumbers,
  CVC,
  ExpirationDate,
  Password,
  UserName,
} from '../types/card';
// import InputField from './InputField';
import CardNumberInput from './CardNumberInput';
import ExpirationDateInput from './ExpirationDateInput';
import UserNameInput from './UserNameInput';
import { Dispatch, SetStateAction, useState } from 'react';
import { ShowComponents } from '../types/showCompents';
import CardDropDown from './CardDropDown';
import CVCInput from './CVCInput';
import PasswordInput from './PassWordInput';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface HandleInput {
  setCardNumbers: Dispatch<SetStateAction<CardNumbers>>;
  setExpirationDate: Dispatch<SetStateAction<ExpirationDate>>;
  setUserName: Dispatch<SetStateAction<UserName>>;
  setCardBrand: Dispatch<SetStateAction<CardBrand>>;

  setCVC: Dispatch<SetStateAction<CVC>>;
  setPassword: Dispatch<SetStateAction<Password>>;
}

export default function InputForm({
  cardInfo: { cardNumbers, expirationDate, userName, cardBrand, CVC, password },
  handleInput: {
    setCardNumbers,
    setExpirationDate,
    setUserName,
    setCardBrand,
    setCVC,
    setPassword,
  },
}: {
  cardInfo: CardInfo;
  handleInput: HandleInput;
}) {
  const [showComponent, setShowComponent] = useState<ShowComponents>({
    cardNumberInput: true,
    cardDropDown: false,
    expirationDateInput: false,
    userNameInput: false,
    CVCInput: false,
    passwordInput: false,
  });
  return (
    <FormContainer>
      {showComponent.passwordInput && (
        <PasswordInput
          password={password}
          handleInput={setPassword}
          handleShowComponent={setShowComponent}
        />
      )}
      {showComponent.CVCInput && (
        <CVCInput
          CVC={CVC}
          handleInput={setCVC}
          handleShowComponent={setShowComponent}
        />
      )}
      {showComponent.userNameInput && (
        <UserNameInput
          userName={userName}
          handleInput={setUserName}
          handleShowComponent={setShowComponent}
        />
      )}
      {showComponent.expirationDateInput && (
        <ExpirationDateInput
          expirationDate={expirationDate}
          handleInput={setExpirationDate}
          handleShowComponent={setShowComponent}
        />
      )}
      {showComponent.cardDropDown && (
        <CardDropDown
          cardBrand={cardBrand}
          handleInput={setCardBrand}
          handleShowComponent={setShowComponent}
        />
      )}
      {showComponent.cardNumberInput && (
        <CardNumberInput
          cardNumbers={cardNumbers}
          handleInput={setCardNumbers}
          handleShowComponent={setShowComponent}
        />
      )}
    </FormContainer>
  );
}
