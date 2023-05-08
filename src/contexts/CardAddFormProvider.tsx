import { BankCode, Card } from 'components/common/Card/types';
import { CardForm } from 'components/Form/types';
import { createContext, Dispatch, PropsWithChildren, useContext, useState } from 'react';

type CardAddFormContext = {
  cardFormInformation: CardForm;
  setCardFormInformation: Dispatch<React.SetStateAction<CardForm>>;
  card: Card;
  isCardNumberValid: boolean;
  isExpirationDateValid: boolean;
  isSecurityCodeValid: boolean;
  isPasswordValid: boolean;
  errorMessages: Partial<Record<keyof Card, string>>;
  resetCardForm: () => void;
};

const initialCardFormInformation: CardForm = {
  cardNumbers: ['', '', '', ''],
  month: '',
  year: '',
  name: '',
  firstDigit: '',
  secondDigit: '',
  securityCode: '',
  bankCode: BankCode.Default,
};

const cardAddFormContext = createContext<CardAddFormContext | undefined>(undefined);

export const CardAddFormProvider = ({ children }: PropsWithChildren) => {
  const [cardFormInformation, setCardFormInformation] = useState(initialCardFormInformation);

  const card: Card = {
    numbers: cardFormInformation.cardNumbers,
    expirationDate: { month: cardFormInformation.month, year: cardFormInformation.year },
    name: cardFormInformation.name,
    securityCode: cardFormInformation.securityCode,
    password: { first: cardFormInformation.firstDigit, second: cardFormInformation.secondDigit },
    bankCode: cardFormInformation.bankCode,
  };

  const isNumberLengthValid = (value: string, length: number) => {
    return value.replace(/ /g, '').length === length;
  };

  const isCardNumberValid =
    card.numbers !== undefined && card.numbers.every((number) => isNumberLengthValid(number, 4));

  const isExpirationDateValid =
    card.expirationDate !== undefined &&
    isNumberLengthValid(card.expirationDate.month, 2) &&
    isNumberLengthValid(card.expirationDate.year, 2);

  const isSecurityCodeValid =
    card.securityCode !== undefined && isNumberLengthValid(card.securityCode, 3);

  const isPasswordValid =
    card.password !== undefined &&
    isNumberLengthValid(card.password.first, 1) &&
    isNumberLengthValid(card.password.second, 1);

  const isBankCodeValid = card.bankCode !== undefined && card.bankCode in Object.values(BankCode);

  const errorMessages: Partial<Record<keyof Card, string>> = {
    numbers: isCardNumberValid ? '' : '카드번호는 16자리로 입력해주세요.',
    expirationDate: isExpirationDateValid ? '' : '만료일을 입력해주세요.',
    securityCode: isSecurityCodeValid ? '' : '보안 코드는 3자리로 입력해주세요.',
    password: isPasswordValid ? '' : '카드 비밀번호 앞 2자리를 전부 입력해주세요.',
    bankCode: isBankCodeValid ? '' : '카드사를 선택해주세요.',
  };

  const resetCardForm = () => {
    setCardFormInformation(initialCardFormInformation);
  };

  return (
    <cardAddFormContext.Provider
      value={{
        cardFormInformation,
        setCardFormInformation,
        card,
        isCardNumberValid,
        isExpirationDateValid,
        isSecurityCodeValid,
        isPasswordValid,
        errorMessages,
        resetCardForm,
      }}
    >
      {children}
    </cardAddFormContext.Provider>
  );
};

export const useCardAddForm = () => {
  const value = useContext(cardAddFormContext);

  if (value === undefined) {
    throw new Error('CardAddFormProvider 하위에 cardAddFormContext가 있어야 합니다.');
  }

  return value;
};
