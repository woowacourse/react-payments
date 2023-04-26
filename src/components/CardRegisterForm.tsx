import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { CardViewer } from './CardViewer';
import { CardNumberInput } from './input/CardNumberInput';
import { ExpirationDateInput } from './input/ExpirationDateInput';
import { OwnerNameInput } from './input/OwnerNameInput';
import { SecurityCodeInput } from './input/SecurityCodeInput';
import { PasswordInput } from './input/PasswordInput';
import { cardDataService } from '../domains/cardDataService';
import { useCardRegisterForm } from '../hooks/useCardRegisterForm';

export function CardRegisterForm() {
  const navigate = useNavigate();
  const {
    cardNumber,
    expirationDate,
    ownerName,
    securityCode,
    password,
    setCardNumber,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
    isValidCardForm,
  } = useCardRegisterForm();

  const monthInputRef = useRef<HTMLInputElement>(null);
  const ownerNameInputRef = useRef<HTMLInputElement>(null);
  const securityCodeInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleCardInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    cardDataService.addNewCard({
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      password,
    });

    navigate('/');
  };

  const moveFocusToExpirationDate = () => {
    monthInputRef.current?.focus();
  };

  const moveFocusToOwnerName = () => {
    ownerNameInputRef.current?.focus();
  };

  const moveFocusToSecurityCode = () => {
    securityCodeInputRef.current?.focus();
  };

  const moveFocusToPassword = () => {
    passwordInputRef.current?.focus();
  };

  return (
    <Style.Wrapper onSubmit={handleCardInfoSubmit}>
      <CardViewer cardNumber={cardNumber} expirationDate={expirationDate} ownerName={ownerName} />
      <Style.InputContainer>
        <CardNumberInput
          moveFocusToExpirationDate={moveFocusToExpirationDate}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
        />
        <ExpirationDateInput
          monthInputRef={monthInputRef}
          moveFocusToOwnerName={moveFocusToOwnerName}
          expirationDate={expirationDate}
          setExpirationDate={setExpirationDate}
        />
        <OwnerNameInput
          ownerNameInputRef={ownerNameInputRef}
          moveFocusToSecurityCode={moveFocusToSecurityCode}
          ownerName={ownerName}
          setOwnerName={setOwnerName}
        />
        <SecurityCodeInput
          securityCodeInputRef={securityCodeInputRef}
          moveFocusToPassword={moveFocusToPassword}
          securityCode={securityCode}
          setSecurityCode={setSecurityCode}
        />
        <PasswordInput
          passwordInputRef={passwordInputRef}
          password={password}
          setPassword={setPassword}
        />
      </Style.InputContainer>
      <Style.ButtonContainer>
        {isValidCardForm && <Style.NextButton>다음</Style.NextButton>}
      </Style.ButtonContainer>
    </Style.Wrapper>
  );
}

const Style = {
  Wrapper: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: max-content;

    gap: 19px;
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;

    width: max-content;

    gap: 19px;
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;
  `,

  NextButton: styled.button`
    all: unset;

    font-weight: bold;
    cursor: pointer;
  `,
};
