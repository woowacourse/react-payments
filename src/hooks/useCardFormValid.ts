import { BankCodeList, Card } from 'components/common/Card/types';

export function useCardFormValid(card: Partial<Card>) {
  const { numbers, expirationDate, securityCode, password, bankCode } = card;

  const isNumberLengthValid = (value: string, length: number) => {
    return value.replace(/ /g, '').length === length;
  };

  const isCardNumberValid = numbers && numbers.every((number) => isNumberLengthValid(number, 4));

  const isExpirationDateValid =
    expirationDate &&
    isNumberLengthValid(expirationDate.month, 2) &&
    isNumberLengthValid(expirationDate.year, 2);

  const isSecurityCodeValid = securityCode && isNumberLengthValid(securityCode, 3);

  const isPasswordValid =
    password && isNumberLengthValid(password.first, 1) && isNumberLengthValid(password.second, 1);

  const isBankCodeValid = bankCode && bankCode in Object.values(BankCodeList);

  const errorMessages: Partial<Record<keyof Card, string>> = {
    numbers: isCardNumberValid ? '' : '카드번호는 16자리로 입력해주세요.',
    expirationDate: isExpirationDateValid ? '' : '만료일을 입력해주세요.',
    securityCode: isSecurityCodeValid ? '' : '보안 코드는 3자리로 입력해주세요.',
    password: isPasswordValid ? '' : '카드 비밀번호 앞 2자리를 전부 입력해주세요.',
    bankCode: isBankCodeValid ? '' : '카드사를 선택해주세요.',
  };

  return {
    isValid: isCardNumberValid && isExpirationDateValid && isSecurityCodeValid && isPasswordValid,
    errorMessages,
  };
}
