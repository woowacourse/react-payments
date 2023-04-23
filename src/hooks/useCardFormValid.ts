import { Card } from 'components/common/Card/types';

export function useCardFormValid(
  card: Card,
): [
  isValid: boolean,
  errorMessages: {
    numbers: string;
    expirationDate: string;
    securityCode: string;
    password: string;
  },
] {
  const { numbers, expirationDate, securityCode, password } = card;

  const isNumberLengthValid = (value: string, length: number) => {
    return value.replace(/ /g, '').length === length;
  };

  const isCardNumberValid = numbers.every((number) => isNumberLengthValid(number, 4));

  const isExpirationDateValid =
    isNumberLengthValid(expirationDate.month, 2) &&
    isNumberLengthValid(expirationDate.year, 2) &&
    Number(expirationDate.month) > 0 &&
    Number(expirationDate.month) <= 12;

  const isSecurityCodeValid = isNumberLengthValid(securityCode, 3);

  const isPasswordValid =
    isNumberLengthValid(password.first, 1) && isNumberLengthValid(password.second, 1);

  const errorMessages = {
    numbers: isCardNumberValid ? '' : '카드번호는 16자리로 입력해주세요.',
    expirationDate: isExpirationDateValid ? '' : '유효한 만료일을 입력해주세요.',
    securityCode: isSecurityCodeValid ? '' : '보안 코드 3자리를 입력해주세요.',
    password: isPasswordValid ? '' : '카드 비밀번호 앞 2자리를 입력해주세요.',
  };

  return [
    isCardNumberValid && isExpirationDateValid && isSecurityCodeValid && isPasswordValid,
    errorMessages,
  ];
}
