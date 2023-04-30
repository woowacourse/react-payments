import {
  ExpirationDateInput,
  NameInput,
  SecurityCodeInput,
  PasswordInput,
  CardNumberInputs,
} from 'components/Input';
import styled from 'styled-components';
import { FormEventHandler, useState } from 'react';
import { BankCode, Card, isCard } from 'components/common/Card/types';
import { ValueAndOnChange } from 'components/Input/types';
import { useCardFormValid } from 'hooks/useCardFormValid';
import { CreditCard } from 'components/common';
import {
  CardBottomSheet,
  CardBottomSheetProps,
} from 'components/common/BottomSheet/CardBottomSheet';
import { PaymentsInputLabel } from 'components/common/Label/PaymentsInputLabel';

export type AddCardFormProps = {
  onSubmit: (card: Card) => void;
};

export function AddCardForm({ onSubmit }: AddCardFormProps) {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [name, setName] = useState('');

  const [firstDigit, setFirstDigit] = useState('');
  const [secondDigit, setSecondDigit] = useState('');

  const [securityCode, setSecurityCode] = useState('');

  const [bankCode, setBankCode] = useState<BankCode>();
  const [isBottomSheetActive, setBottomSheetActive] = useState<boolean>(true);

  const card: Partial<Card> = {
    numbers: cardNumbers,
    expirationDate: { month: month, year: year },
    name,
    securityCode: securityCode,
    password: { first: firstDigit, second: secondDigit },
    bankCode,
  };

  const { isValid, errorMessages } = useCardFormValid(card);

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
    setName(inputValue);
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

    if (isCard(card)) {
      onSubmit(card);
    }
  };

  const handleClickBankImage: CardBottomSheetProps['onClickBankImage'] = (bankCode) => {
    setBankCode(bankCode);
    setBottomSheetActive((prevIsBottomSheetActive) => !prevIsBottomSheetActive);
  };

  return (
    <>
      <CardWrapper>
        <CreditCard card={card} />
      </CardWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <CardNumberInputs valueAndOnChanges={valueAndOnChanges} />

        <ExpirationDateInput
          month={{ value: month, onChange: handleMonthInputChange }}
          year={{ value: year, onChange: handleYearInputChange }}
          width="70px"
        />

        <NameInput value={name} onChange={handleNameInputChange} />

        <SecurityCodeInput value={securityCode} onChange={handleSecurityCodeChange} width="80px" />

        <PasswordInput
          first={{ value: firstDigit, onChange: handleFirstPasswordInputChange }}
          second={{ value: secondDigit, onChange: handleSecondPasswordInputChange }}
          width="50px"
        />

        <FormSubmitButton type="submit">다음</FormSubmitButton>
      </FormContainer>
      <CardBottomSheet onClickBankImage={handleClickBankImage} active={isBottomSheetActive} />
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
