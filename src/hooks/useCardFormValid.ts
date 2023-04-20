import { Card } from 'components/common/Card/types';

export function useCardFormValid(card: Card) {
  const { numbers, expirationDate, securityCode, password } = card;

  const isNumberLengthValid = (value: string, length: number) => {
    return value.replace(/ /g, '').length === length;
  };

  const isCardNumberValid = numbers.every((number) => isNumberLengthValid(number, 4));

  const isExpirationDateValid =
    isNumberLengthValid(expirationDate.month, 4) && isNumberLengthValid(expirationDate.year, 4);

  const isSecurityCodeValid = isNumberLengthValid(securityCode, 3);

  const isPasswordValid =
    isNumberLengthValid(password.first, 1) && isNumberLengthValid(password.second, 1);

  const errorMessages = {
    numbers: isCardNumberValid ? '' : '카드번호는 16자리로 입력해주세요.',
    expirationDate: isExpirationDateValid ? '' : '만료일을 입력해주세요.',
    securityCode: isSecurityCodeValid ? '' : '보안 코드는 3자리로 입력해주세요.',
    password: isPasswordValid ? '' : '카드 비밀번호 앞 2자리를 전부 입력해주세요.',
  };

  return [
    isCardNumberValid && isExpirationDateValid && isSecurityCodeValid && isPasswordValid,
    errorMessages,
  ];
}
