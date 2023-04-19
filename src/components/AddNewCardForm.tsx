import { useRef, useState } from 'react';
import styled from 'styled-components';
import { CardNumberInput } from './input/CardNumberInput';
import { ExpirationDateInput } from './input/ExpirationDateInput';
import { OwnerNameInput } from './input/OwnerNameInput';
import { SecurityCodeInput } from './input/SecurityCodeInput';
import { PasswordInput } from './input/PasswordInput';
import { CardViewer } from './CardViewer';

export const AddNewCardForm = () => {
  const [isInputFinish, setIsInputFinish] = useState(false);

  const [cardNumber, setCardNumber] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
  });

  const [expirationDate, setExpirationDate] = useState({
    month: '',
    year: '',
  });

  const [ownerName, setOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const [password, setPassword] = useState({
    firstPassword: '',
    secondPassword: '',
  });

  const monthInputRef = useRef<HTMLInputElement>(null);
  const ownerNameInputRef = useRef<HTMLInputElement>(null);
  const securityCodeInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

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

  const activateNextButton = () => {
    setIsInputFinish(true);
  };

  return (
    <Style.Wrapper
      onSubmit={(e) => {
        e.preventDefault();

        console.log(
          cardNumber,
          expirationDate,
          ownerName,
          securityCode,
          password
        );
      }}
    >
      <CardViewer
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        ownerName={ownerName}
      />
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
        activateNextButton={activateNextButton}
        password={password}
        setPassword={setPassword}
      />
      <Style.ButtonContainer>
        <Style.NextButton disabled={!isInputFinish}>다음</Style.NextButton>
      </Style.ButtonContainer>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.form`
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
    /* all: unset; */
  `,
};
