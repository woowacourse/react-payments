import {
  ExpirationDateInput,
  NameInput,
  SecurityCodeInput,
  PasswordInput,
  CardNumberInputs,
  ValueAndOnChange,
} from 'components/Input';
import styled from 'styled-components';
import { Label } from 'components/common';
import { ChangeEventHandler, useState } from 'react';
import { Container } from 'components/style/InputContainer';

const NOT_ALPHABET_REGEX = /[^A-Za-z]/gi;

function AddCardForm() {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [name, setName] = useState('');

  const [firstDigit, setFirstDigit] = useState('');
  const [secondDigit, setSecondDigit] = useState('');

  const [securityCode, setSecurityCode] = useState('');

  const valueAndOnChanges: ValueAndOnChange[] = cardNumbers.map((cardNumber, index) => ({
    value: cardNumber,
    onChange: (e) => {
      const { value } = e.target;
      const isNumber = !isNaN(Number(value));

      if (!isNumber) return;

      setCardNumbers((prev) => {
        const prevCardNumbers = [...prev];
        prevCardNumbers.splice(index, 1, value);

        return prevCardNumbers;
      });
    },
  }));

  const handleMonthInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const isNumber = !isNaN(Number(value));

    if (!isNumber) return;

    setMonth(value);
  };

  const handleYearInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const isNumber = !isNaN(Number(value));

    if (!isNumber) return;

    setYear(value);
  };

  const handleNameInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.replace(NOT_ALPHABET_REGEX, '').toUpperCase();

    setName(value);
  };

  const handleSecurityCodeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const isNumber = !isNaN(Number(value));

    if (!isNumber) return;

    setSecurityCode(value);
  };

  const handleFirstPasswordInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const isNumber = !isNaN(Number(value));

    if (!isNumber) return;

    setFirstDigit(value);
  };

  const handleSecondPasswordInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const isNumber = !isNaN(Number(value));

    if (!isNumber) return;

    setSecondDigit(value);
  };

  return (
    <FormContainer>
      <Label text="카드 번호" />
      <CardNumberContainer>
        <CardNumberInputs valueAndOnChanges={valueAndOnChanges} />
      </CardNumberContainer>

      <Label text="만료일" />
      <ExpirationDateContainer>
        <ExpirationDateInput
          month={{ value: month, onChange: handleMonthInputChange }}
          year={{ value: year, onChange: handleYearInputChange }}
        />
      </ExpirationDateContainer>

      <Label text="카드 소유자 이름(선택)" />
      <NameInputContainer>
        <NameInput value={name} onChange={handleNameInputChange} />
      </NameInputContainer>

      <Label text="보안 코드(CVC/CVV)" />
      <SecurityCodeInputContainer>
        <SecurityCodeInput value={securityCode} onChange={handleSecurityCodeChange} />
      </SecurityCodeInputContainer>

      <Label text="카드 비밀번호" />
      <PasswordInputContainer>
        <PasswordInput
          first={{ value: firstDigit, onChange: handleFirstPasswordInputChange }}
          second={{ value: secondDigit, onChange: handleSecondPasswordInputChange }}
        />
      </PasswordInputContainer>
      <button type="submit">다음</button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  button {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
`;

const CardNumberContainer = styled(Container)`
  justify-content: center;
  Input {
    width: 15%;
    text-align: center;
  }
`;

const ExpirationDateContainer = styled(Container)``;

const NameInputContainer = styled(Container)``;

const SecurityCodeInputContainer = styled(Container)``;

const PasswordInputContainer = styled(Container)``;

export default AddCardForm;
