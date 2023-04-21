import { useRef, useState } from 'react';
import styled from 'styled-components';
import { CardNumberInput } from './input/CardNumberInput';
import { ExpirationDateInput } from './input/ExpirationDateInput';
import { OwnerNameInput } from './input/OwnerNameInput';
import { SecurityCodeInput } from './input/SecurityCodeInput';
import { PasswordInput } from './input/PasswordInput';
import { CardViewer } from './CardViewer';
import { cardDataService } from '../domains/cardDataService';
import { useNavigate } from 'react-router-dom';

export const AddNewCardForm = () => {
  const navigate = useNavigate();

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

  const lastCardNumberInputRef = useRef<HTMLInputElement>(null);
  const monthInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);
  const ownerNameInputRef = useRef<HTMLInputElement>(null);
  const securityCodeInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const moveFocusToLastCardNumberInput = () => {
    lastCardNumberInputRef.current?.focus();
  };

  const moveFocusToMonthInput = () => {
    monthInputRef.current?.focus();
  };

  const moveFocusToYearInput = () => {
    yearInputRef.current?.focus();
  };

  const moveFocusToOwnerName = () => {
    ownerNameInputRef.current?.focus();
  };

  const moveFocusToSecurityCode = () => {
    securityCodeInputRef.current?.focus();
  };

  const moveFocusToFirstPassword = () => {
    passwordInputRef.current?.focus();
  };

  const activateNextButton = () => {
    setIsInputFinish(true);
  };

  return (
    <Style.Wrapper
      onSubmit={(e) => {
        e.preventDefault();

        cardDataService.addNewCard({
          cardNumber,
          expirationDate,
          ownerName,
          securityCode,
          password,
        });

        navigate('/');
      }}
    >
      <CardViewer
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        ownerName={ownerName}
      />
      <Style.InputContainer>
        <CardNumberInput
          moveFocusToExpirationDate={moveFocusToMonthInput}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          lastCardNumberInputRef={lastCardNumberInputRef}
        />
        <ExpirationDateInput
          moveFocusToLastCardNumberInput={moveFocusToLastCardNumberInput}
          monthInputRef={monthInputRef}
          yearInputRef={yearInputRef}
          moveFocusToOwnerName={moveFocusToOwnerName}
          expirationDate={expirationDate}
          setExpirationDate={setExpirationDate}
        />
        <OwnerNameInput
          ownerNameInputRef={ownerNameInputRef}
          moveFocusToSecurityCode={moveFocusToSecurityCode}
          ownerName={ownerName}
          setOwnerName={setOwnerName}
          moveFocusToYearInput={moveFocusToYearInput}
        />
        <SecurityCodeInput
          securityCodeInputRef={securityCodeInputRef}
          moveFocusToPassword={moveFocusToFirstPassword}
          securityCode={securityCode}
          setSecurityCode={setSecurityCode}
          moveFocusToOwnerName={moveFocusToOwnerName}
        />
        <PasswordInput
          passwordInputRef={passwordInputRef}
          activateNextButton={activateNextButton}
          password={password}
          setPassword={setPassword}
          moveFocusToSecurityCode={moveFocusToSecurityCode}
        />
      </Style.InputContainer>
      <Style.ButtonContainer>
        {isInputFinish && <Style.NextButton>다음</Style.NextButton>}
      </Style.ButtonContainer>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 19px;

    width: max-content;
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
