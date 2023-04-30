import { BankCode, BankCodeList, Card } from 'components/common/Card/types';
import { useState } from 'react';

type CardForm = {
  cardNumbers: string[];
  month: string;
  year: string;
  name: string;
  firstDigit: string;
  secondDigit: string;
  securityCode: string;
  bankCode?: BankCode;
};

const initialCardFormInformation: CardForm = {
  cardNumbers: ['', '', '', ''],
  month: '',
  year: '',
  name: '',
  firstDigit: '',
  secondDigit: '',
  securityCode: '',
  bankCode: undefined,
};

export const useCardForm = () => {
  const [cardFormInformation, setCardFormInformation] = useState(initialCardFormInformation);

  const card: Partial<Card> = {
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
    card.numbers && card.numbers.every((number) => isNumberLengthValid(number, 4));

  const isExpirationDateValid =
    card.expirationDate &&
    isNumberLengthValid(card.expirationDate.month, 2) &&
    isNumberLengthValid(card.expirationDate.year, 2);

  const isSecurityCodeValid = card.securityCode && isNumberLengthValid(card.securityCode, 3);

  const isPasswordValid =
    card.password &&
    isNumberLengthValid(card.password.first, 1) &&
    isNumberLengthValid(card.password.second, 1);

  const isBankCodeValid = card.bankCode && card.bankCode in Object.values(BankCodeList);

  const errorMessages: Partial<Record<keyof Card, string>> = {
    numbers: isCardNumberValid ? '' : '카드번호는 16자리로 입력해주세요.',
    expirationDate: isExpirationDateValid ? '' : '만료일을 입력해주세요.',
    securityCode: isSecurityCodeValid ? '' : '보안 코드는 3자리로 입력해주세요.',
    password: isPasswordValid ? '' : '카드 비밀번호 앞 2자리를 전부 입력해주세요.',
    bankCode: isBankCodeValid ? '' : '카드사를 선택해주세요.',
  };

  return {
    cardFormInformation,
    setCardFormInformation,
    card,
    isCardNumberValid,
    isExpirationDateValid,
    isSecurityCodeValid,
    isPasswordValid,
    errorMessages,
  };
};
