import styled from 'styled-components';
import {
  CardBrand,
  CardInfo,
  CardNumbers,
  CVC,
  ExpirationDate,
  Password,
  UserName,
} from '../types/card';
import CardNumberInput from './InputComponent/CardNumberInput';
import ExpirationDateInput from './InputComponent/ExpirationDateInput';
import UserNameInput from './InputComponent/UserNameInput';
import { Dispatch, SetStateAction, useState } from 'react';
import { ShowComponents } from '../types/showComponents';
import CardDropDown from './CardDropDown';
import CVCInput from './InputComponent/CVCInput';
import PasswordInput from './InputComponent/PasswordInput';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface HandleInput {
  updateCardNumberIsNextField : () => void
  handleUpdateCardNumberInput:  (index: number, value: string) => void
  handleUpdateCardNumberErrorMessages : (index: number, errorMessage: string, isError: boolean) => void;
  setExpirationDate: Dispatch<SetStateAction<ExpirationDate>>;
  setUserName: Dispatch<SetStateAction<UserName>>;
  setCardBrand: Dispatch<SetStateAction<CardBrand>>;

  setCVC: Dispatch<SetStateAction<CVC>>;
  setPassword: Dispatch<SetStateAction<Password>>;
}

export default function InputForm({
  cardInfo: { cardNumbers, expirationDate, userName, cardBrand, CVC, password },
  handleInput: {
    updateCardNumberIsNextField,
    handleUpdateCardNumberInput,
    handleUpdateCardNumberErrorMessages,
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
      {cardNumbers.isNextField && (
        <CardDropDown
          handleInput={setCardBrand}
          handleShowComponent={setShowComponent}
        />
      )}
        <CardNumberInput
          cardNumbers={cardNumbers}
          handleInput={{updateCardNumberIsNextField, handleUpdateCardNumberInput ,handleUpdateCardNumberErrorMessages}}
        />
    </FormContainer>
  );
}
