import { useState, useCallback } from 'react';
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

  const [inputOrder, setInputOrder] = useState(0);

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
  } = useFocus(4);

  const {
    inputRefs: expirationDateInputRefs,
    focusInputByIndex: focusExpirationDateInputByIndex,
    autoFocusFirstInput: focusExpirationDateInput,
  } = useFocus(2);

  const {
    inputRefs: ownerNameInputRefs,
    autoFocusFirstInput: focusFirstOwnerNameInput,
  } = useFocus(1);

  const {
    inputRefs: securityCodeInputRefs,
    autoFocusFirstInput: focusFirstSecurityCodeInput,
  } = useFocus(1);

  const {
    inputRefs: passwordInputRefs,
    focusInputByIndex: focusPasswordInputByIndex,
    autoFocusFirstInput: focusFirstPasswordInput,
  } = useFocus(2);

  const viewNextInput = useCallback(() => {
    setInputOrder((current) => current + 1);
  }, []);

  const viewPreviousInput = useCallback(() => {
    setInputOrder((current) => current - 1);
  }, []);

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
        {inputOrder === 0 && (
          <CardNumberInput
            ref={cardNumberInputRefs}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            focusCardNumberInputByIndex={focusCardNumberInputByIndex}
            focusFirstCardNumberInput={focusFirstCardNumberInput}
            viewNextInput={viewNextInput}
          />
        )}

        {inputOrder === 1 && (
          <ExpirationDateInput
            ref={expirationDateInputRefs}
            expirationDate={expirationDate}
            setExpirationDate={setExpirationDate}
            focusNextExpirationDateInput={focusExpirationDateInputByIndex}
            focusexpirationDateInput={focusExpirationDateInput}
            viewNextInput={viewNextInput}
            viewPreviousInput={viewPreviousInput}
          />
        )}

        {inputOrder === 2 && (
          <OwnerNameInput
            ref={ownerNameInputRefs}
            ownerName={ownerName}
            setOwnerName={setOwnerName}
            focusFirstOwnerNameInput={focusFirstOwnerNameInput}
            viewNextInput={viewNextInput}
            viewPreviousInput={viewPreviousInput}
          />
        )}

        {inputOrder === 3 && (
          <SecurityCodeInput
            ref={securityCodeInputRefs}
            securityCode={securityCode}
            setSecurityCode={setSecurityCode}
            focusFirstSecurityCodeInput={focusFirstSecurityCodeInput}
            viewNextInput={viewNextInput}
            viewPreviousInput={viewPreviousInput}
          />
        )}

        {inputOrder === 4 && (
          <PasswordInput
            ref={passwordInputRefs}
            password={password}
            setPassword={setPassword}
            setIsInputFinish={setIsInputFinish}
            focusPasswordInputByIndex={focusPasswordInputByIndex}
            focusFirstPasswordInput={focusFirstPasswordInput}
            viewPreviousInput={viewPreviousInput}
          />
        )}
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
