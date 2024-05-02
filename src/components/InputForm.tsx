import styled from 'styled-components';
import { CardInfo } from '../types/card';
import CardNumberInput from './InputComponent/CardNumberInput';
import ExpirationDateInput from './InputComponent/ExpirationDateInput';
import UserNameInput from './InputComponent/UserNameInput';
import CardDropDown from './CardDropDown';
import CVCInput from './InputComponent/CVCInput';
import PasswordInput from './InputComponent/PasswordInput';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface HandleInput {
  handleUpdateCardNumberInput: (index: number, value: string) => void;
  handleUpdateCardNumberErrorMessages: (
    index: number,
    errorMessage: string,
    isError: boolean
  ) => void;
  handleUpdateExpirationDateInput: (index: number, value: string) => void;
  handleUpdateExpirationDateErrorMessages: (
    index: number,
    errorMessage: string,
    isError: boolean
  ) => void;
  handleUpdateUserNameIsNextPage: () => void;
  handleUpdateUserNameInput: (value: string) => void;
  handleUpdateUserNameErrorMessages: (
    errorMessage: string,
    isError: boolean
  ) => void;
  handleUpdateCardBrand: (brandName: string) => void;
  handleUpdateCardBrandIsNextField: () => void;

  handleUpdateCVCInput: (value: string) => void;
  handleUpdateCVCErrorMessages: (
    errorMessage: string,
    isError: boolean
  ) => void;
  handleUpdatePasswordInput: (value: string) => void;
  handleUpdatePasswordErrorMessages: (
    errorMessage: string,
    isError: boolean
  ) => void;
}

export default function InputForm({
  cardInfo: { cardNumbers, cardBrand, expirationDate, userName, CVC, password },
  handleInput: {
    handleUpdateCardNumberInput,
    handleUpdateCardNumberErrorMessages,
    handleUpdateExpirationDateInput,
    handleUpdateExpirationDateErrorMessages,
    handleUpdateUserNameIsNextPage,
    handleUpdateUserNameInput,
    handleUpdateUserNameErrorMessages,
    handleUpdateCardBrand,
    handleUpdateCardBrandIsNextField,
    handleUpdateCVCInput,
    handleUpdateCVCErrorMessages,
    handleUpdatePasswordInput,
    handleUpdatePasswordErrorMessages,
  },
}: {
  cardInfo: CardInfo;
  handleInput: HandleInput;
}) {
  return (
    <FormContainer>
      {CVC.isNextField && (
        <PasswordInput
          password={password}
          handleInput={{
            handleUpdatePasswordInput,
            handleUpdatePasswordErrorMessages,
          }}
        />
      )}
      {userName.isNextField && (
        <CVCInput
          CVC={CVC}
          handleInput={{ handleUpdateCVCInput, handleUpdateCVCErrorMessages }}
        />
      )}
      {expirationDate.isNextField && (
        <UserNameInput
          userName={userName}
          handleInput={{
            handleUpdateUserNameIsNextPage,
            handleUpdateUserNameInput,
            handleUpdateUserNameErrorMessages,
          }}
        />
      )}
      {cardBrand.isNextField && (
        <ExpirationDateInput
          expirationDate={expirationDate}
          handleInput={{
            handleUpdateExpirationDateInput,
            handleUpdateExpirationDateErrorMessages,
          }}
        />
      )}
      {cardNumbers.isNextField && (
        <CardDropDown
          handleInput={{
            handleUpdateCardBrand,
            handleUpdateCardBrandIsNextField,
          }}
        />
      )}
      <CardNumberInput
        cardNumbers={cardNumbers}
        handleInput={{
          handleUpdateCardNumberInput,
          handleUpdateCardNumberErrorMessages,
        }}
      />
    </FormContainer>
  );
}
