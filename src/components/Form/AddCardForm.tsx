import {
  ExpirationDateInput,
  NameInput,
  SecurityCodeInput,
  PasswordInput,
  CardNumberInputs,
} from 'components/Input';
import styled, { css } from 'styled-components';
import { FormEventHandler, useState } from 'react';
import { BankCode, Card, isCard } from 'components/common/Card/types';
import { ValueAndOnChange } from 'components/Input/types';
import { CreditCard } from 'components/common';
import {
  CardBottomSheet,
  CardBottomSheetProps,
} from 'components/common/BottomSheet/CardBottomSheet';
import { useCardForm } from 'hooks/useCardForm';

export type AddCardFormProps = {
  onSubmit: (card: Card) => void;
};

export function AddCardForm(props: AddCardFormProps) {
  const { onSubmit } = props;
  const {
    cardFormInformation,
    setCardFormInformation,
    card,
    isCardNumberValid,
    isExpirationDateValid,
    isSecurityCodeValid,
    isPasswordValid,
    errorMessages,
  } = useCardForm();

  const [isBottomSheetActive, setBottomSheetActive] = useState<boolean>(true);
  const { cardNumbers, month, year, name, firstDigit, secondDigit, securityCode, bankCode } =
    cardFormInformation;

  const valueAndOnChanges: ValueAndOnChange[] = cardNumbers.map((cardNumber, index) => ({
    value: cardNumber,
    onChange: (value) => {
      setCardFormInformation((prev) => {
        const prevCardNumbers = [...prev.cardNumbers];
        prevCardNumbers.splice(index, 1, value);

        return {
          ...prev,
          cardNumbers: prevCardNumbers,
        };
      });
    },
  }));

  const handleMonthInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setCardFormInformation((prev) => {
      return { ...prev, month: inputValue };
    });
  };

  const handleYearInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setCardFormInformation((prev) => {
      return { ...prev, year: inputValue };
    });
  };

  const handleNameInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setCardFormInformation((prev) => {
      return { ...prev, name: inputValue };
    });
  };

  const handleSecurityCodeChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setCardFormInformation((prev) => {
      return { ...prev, securityCode: inputValue };
    });
  };

  const handleFirstPasswordInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setCardFormInformation((prev) => {
      return { ...prev, firstDigit: inputValue };
    });
  };

  const handleSecondPasswordInputChange: ValueAndOnChange['onChange'] = (inputValue) => {
    setCardFormInformation((prev) => {
      return { ...prev, secondDigit: inputValue };
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!(isCardNumberValid && isExpirationDateValid && isSecurityCodeValid && isPasswordValid)) {
      return alert(Object.values(errorMessages).join('\n'));
    }

    if (isCard(card)) {
      onSubmit(card);
    }
  };

  const handleClickBankImage: CardBottomSheetProps['onClickBankImage'] = (bankCode) => {
    setCardFormInformation((prev) => {
      return { ...prev, bankCode: bankCode };
    });
    setBottomSheetActive((prevIsBottomSheetActive) => !prevIsBottomSheetActive);
  };

  const isInputAllValid =
    isCardNumberValid && isExpirationDateValid && isSecurityCodeValid && isPasswordValid;

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

        <FormSubmitButton type="submit" disabled={!isInputAllValid} bankCode={bankCode}>
          다음
        </FormSubmitButton>
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
  gap: 19px;
`;

const FormSubmitButton = styled.button<{ bankCode?: BankCode }>`
  padding: 8px;
  border: none;
  border-radius: 5px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  background-color: ${({ disabled, theme: { colors }, bankCode }) =>
    disabled || bankCode === undefined ? '#ececec' : colors.card.background[bankCode]};

  color: ${({ disabled, theme: { colors }, bankCode }) =>
    disabled || bankCode === undefined ? '#9e9e9e' : colors.card.font[bankCode]};

  transition: background-color 300ms;
  font-size: 14px;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    background-color: brightness(0.8);
  }
`;
