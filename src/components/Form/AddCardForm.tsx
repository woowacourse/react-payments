import {
  ExpirationDateInput,
  NameInput,
  SecurityCodeInput,
  PasswordInput,
  CardNumberInputs,
} from 'components/Input';
import styled from 'styled-components';
import { FormEventHandler, useState } from 'react';
import { Container } from 'components/style/InputContainer';
import CardDB from 'db/Cards';
import { Card } from 'components/common/Card/types';
import { ValueAndOnChange } from 'components/Input/types';
import { useCardFormValid } from 'hooks/useCardFormValid';
import { CreditCard } from 'components/common';

export type AddCardFormProps = {
  onSubmit: () => void;
};

const NOT_ALPHABET_REGEX = /[^A-Za-z\s]/gi;

function AddCardForm({ onSubmit }: AddCardFormProps) {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [name, setName] = useState('');

  const [firstDigit, setFirstDigit] = useState('');
  const [secondDigit, setSecondDigit] = useState('');

  const [securityCode, setSecurityCode] = useState('');

  const card: Card = {
    numbers: cardNumbers,
    expirationDate: { month: month, year: year },
    name,
    securityCode: securityCode,
    password: { first: firstDigit, second: secondDigit },
  };

  const [isValid, errorMessages] = useCardFormValid(card);

  const valueAndOnChanges: ValueAndOnChange[] = cardNumbers.map((cardNumber, index) => ({
    value: cardNumber,
    onChange: (value) => {
      setCardNumbers((prev) => {
        const prevCardNumbers = [...prev];
        prevCardNumbers.splice(index, 1, value);

        return prevCardNumbers;
      });
    },
  }));

  const handleMonthInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setMonth(inputValue);
  };

  const handleYearInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setYear(inputValue);
  };

  const handleNameInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setName(inputValue.replace(NOT_ALPHABET_REGEX, '').toUpperCase());
  };

  const handleSecurityCodeChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setSecurityCode(inputValue);
  };

  const handleFirstPasswordInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setFirstDigit(inputValue);
  };

  const handleSecondPasswordInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setSecondDigit(inputValue);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!isValid) {
      return alert(Object.values(errorMessages).join('\n'));
    }

    CardDB.registerCard(card);
    onSubmit();
  };

  return (
    <>
      <CardWrapper>
        <CreditCard card={card} />
      </CardWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <InputLabel>카드 번호</InputLabel>
        <CardNumberContainer>
          <CardNumberInputs valueAndOnChanges={valueAndOnChanges} />
        </CardNumberContainer>
        <InputLabel>만료일</InputLabel>
        <ExpirationDateContainer>
          <ExpirationDateInput
            month={{ value: month, onChange: handleMonthInputChange }}
            year={{ value: year, onChange: handleYearInputChange }}
          />
        </ExpirationDateContainer>
        <NameLabelContainer>
          <InputLabel>카드 소유자 이름(선택)</InputLabel>
          <InputLabel>{`${name.length} / 30`}</InputLabel>
        </NameLabelContainer>
        <NameInputContainer>
          <NameInput value={name} onChange={handleNameInputChange} />
        </NameInputContainer>

        <InputLabel>보안 코드(CVC/CVV)</InputLabel>
        <SecurityCodeInputContainer>
          <SecurityCodeInput value={securityCode} onChange={handleSecurityCodeChange} />
        </SecurityCodeInputContainer>

        <InputLabel>카드 비밀번호</InputLabel>
        <PasswordInputContainer>
          <PasswordInput
            first={{ value: firstDigit, onChange: handleFirstPasswordInputChange }}
            second={{ value: secondDigit, onChange: handleSecondPasswordInputChange }}
          />
          <DotContainer>•</DotContainer>
          <DotContainer>•</DotContainer>
        </PasswordInputContainer>
        <FormSubmitButton type="submit">다음</FormSubmitButton>
      </FormContainer>
    </>
  );
}

const CardWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  Label {
    margin-bottom: 12px;
  }
`;

const InputLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.085em;
  color: #525252;
  margin-top: 19px;
  margin-bottom: 3px;
`;

const CardNumberContainer = styled(Container)`
  justify-content: center;
  width: 318px;
  Input {
    width: 15%;
    text-align: center;
  }
`;

const ExpirationDateContainer = styled(Container)`
  width: 137px;
  justify-content: center;
  Input {
    text-align: center;
  }
`;

const NameInputContainer = styled(Container)`
  width: 318px;
`;

const SecurityCodeInputContainer = styled(Container)`
  width: 84px;

  Input {
    text-align: center;
    margin-left: 0.5rem;
    letter-spacing: 0.5rem;
  }
`;

const PasswordInputContainer = styled(Container)`
  background-color: rgba(255, 255, 255, 0);
  width: 60%;
  padding: 0;
  align-items: center;
  Input {
    width: 44px;
    height: 44px;
    text-align: center;
    background-color: #ecebf1;
    margin-right: 7px;
    border-radius: 7px;
  }
`;

const DotContainer = styled.div`
  padding: 0 20px;
  font-size: 19px;
`;

const FormSubmitButton = styled.button`
  border: none;
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  color: #000000;
  margin-left: auto;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

const NameLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0);
`;

export default AddCardForm;
