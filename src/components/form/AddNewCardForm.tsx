import { useRef, useState } from 'react';
import styled from 'styled-components';
import { CardNumberInput } from '../input/CardNumberInput';
import { ExpirationDateInput } from '../input/ExpirationDateInput';
import { OwnerNameInput } from '../input/OwnerNameInput';
import { SecurityCodeInput } from '../input/SecurityCodeInput';
import { PasswordInput } from '../input/PasswordInput';
import { CardViewer } from '../cardViewer';
import { cardDataService } from '../../domains/cardDataService';
import { useNavigate } from 'react-router-dom';
import { useFocus } from '../../hooks/useFocus';

export const AddNewCardForm = () => {
  const navigate = useNavigate();

  const [isInputFinish, setIsInputFinish] = useState(false);

  const [cardNumber, setCardNumber] = useState(['', '', '', '']);

  const [expirationDate, setExpirationDate] = useState({
    month: '',
    year: '',
  });

  const [ownerName, setOwnerName] = useState('');

  const [securityCode, setSecurityCode] = useState('');

  const [password, setPassword] = useState(['', '']);

  const {
    inputRefs: cardNumberInputRefs,
    focusInputByIndex: focusCardNumberInputByIndex,
    autoFocusFirstInput: focusFirstCardNumberInput,
  } = useFocus();

  const {
    inputRefs: expirationDateInputRefs,
    focusInputByIndex: focusExpirationDateInputByIndex,
    autoFocusFirstInput: focusExpirationDateInput,
  } = useFocus();

  const {
    inputRefs: ownerNameInputRefs,
    autoFocusFirstInput: focusFirstOwnerNameInput,
  } = useFocus();

  const {
    inputRefs: securityCodeInputRefs,
    autoFocusFirstInput: focusFirstSecurityCodeInput,
  } = useFocus();

  const {
    inputRefs: passwordInputRefs,
    focusInputByIndex: focusPasswordInputByIndex,
    autoFocusFirstInput: focusFirstPasswordInput,
  } = useFocus();

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
          ref={cardNumberInputRefs}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          focusCardNumberInputByIndex={focusCardNumberInputByIndex}
          focusFirstCardNumberInput={focusFirstCardNumberInput}
        />
        <ExpirationDateInput
          ref={expirationDateInputRefs}
          expirationDate={expirationDate}
          setExpirationDate={setExpirationDate}
          focusNextExpirationDateInput={focusExpirationDateInputByIndex}
          focusexpirationDateInput={focusExpirationDateInput}
        />
        <OwnerNameInput
          ref={ownerNameInputRefs}
          ownerName={ownerName}
          setOwnerName={setOwnerName}
          focusFirstOwnerNameInput={focusFirstOwnerNameInput}
        />
        <SecurityCodeInput
          ref={securityCodeInputRefs}
          securityCode={securityCode}
          setSecurityCode={setSecurityCode}
          focusFirstSecurityCodeInput={focusFirstSecurityCodeInput}
        />
        <PasswordInput
          ref={passwordInputRefs}
          password={password}
          setPassword={setPassword}
          activateNextButton={activateNextButton}
          focusPasswordInputByIndex={focusPasswordInputByIndex}
          focusFirstPasswordInput={focusFirstPasswordInput}
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
