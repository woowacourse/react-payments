import {
  ExpirationDateInput,
  NameInput,
  SecurityCodeInput,
  PasswordInput,
  CardNumberInputs,
} from 'components/Input';
import styled from 'styled-components';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { Container } from 'components/style/InputContainer';
import CardDB from 'db/Cards';
import { Card } from 'components/common/Card/types';
import { ValueAndOnChange } from 'components/Input/types';
import { CreditCard } from 'components/common/Card/CreditCard';
import { useCardFormValid } from 'hooks/useCardFormValid';

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
    onChange: (e) => {
      const { value } = e.target;

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

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

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
        {<ErrorCaption>{!isValid && errorMessages.numbers}</ErrorCaption>}
        <InputLabel>만료일</InputLabel>

        <ExpirationDateContainer>
          <ExpirationDateInput
            month={{ value: month, onChange: handleMonthInputChange }}
            year={{ value: year, onChange: handleYearInputChange }}
          />
        </ExpirationDateContainer>
        {<ErrorCaption>{!isValid && errorMessages.expirationDate}</ErrorCaption>}

        <NameLabelContainer>
          <InputLabel>카드 소유자 이름(선택)</InputLabel>
          <InputLabel>{`${name.length} / 30`}</InputLabel>
        </NameLabelContainer>
        <NameInputContainer>
          <NameInput value={name} onChange={handleNameInputChange} />
        </NameInputContainer>

        <InputLabel>보안 코드(CVC/CVV)</InputLabel>
        <SecurityCodeContainer>
          <SecurityCodeInputContainer>
            <SecurityCodeInput value={securityCode} onChange={handleSecurityCodeChange} />
          </SecurityCodeInputContainer>
          <SecurityCodeButton>?</SecurityCodeButton>
          <SecurityCodeNotification>
            카드 뒷면의 CVC 번호 3자리 숫자를 입력해주세요
          </SecurityCodeNotification>
        </SecurityCodeContainer>
        {<ErrorCaption>{!isValid && errorMessages.securityCode}</ErrorCaption>}

        <InputLabel>카드 비밀번호</InputLabel>
        <PasswordInputContainer>
          <PasswordInput
            first={{ value: firstDigit, onChange: handleFirstPasswordInputChange }}
            second={{ value: secondDigit, onChange: handleSecondPasswordInputChange }}
          />
          <DotContainer>•</DotContainer>
          <DotContainer>•</DotContainer>
        </PasswordInputContainer>
        {<ErrorCaption>{!isValid && errorMessages.password}</ErrorCaption>}

        {isValid && <FormSubmitButton type="submit">다음</FormSubmitButton>}
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
  margin-top: 16px;
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
  margin-bottom: 16px;
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
  font-size: 16px;
  font-weight: 700;
  background-color: #ffffff;
  margin-left: auto;
  color: black;
  cursor: pointer;
`;

const NameLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0);
`;

const ErrorCaption = styled.span`
  height: 10px;
  margin-top: 5px;
  font-size: 10px;
  color: red;
`;

const SecurityCodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
`;

const SecurityCodeButton = styled.span`
  border-radius: 50%;
  border: 2px solid #bababa;
  width: 27px;
  height: 27px;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  color: #969696;

  :hover + span {
    display: block;
    padding: 0 2px;
    width: 170px;
    color: #969696;
    font-weight: 600;
  }
`;

const SecurityCodeNotification = styled.span`
  display: none;
  border-radius: 7px;
  border: 2px solid #bababa;
  width: 27px;
`;

export default AddCardForm;
