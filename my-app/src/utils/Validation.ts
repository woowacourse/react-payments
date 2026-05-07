export const isInputValidate = (value: string, maxLength: number): boolean => {
  const isNumberOnly = /^[0-9]*$/.test(value);

  if (!isNumberOnly) return false;
  if(value.length > maxLength) return false;
  
  return true;
}

export const isIncompleteRange = (value: string, maxLength: number): boolean => {
  return value.length < maxLength && value.length >= 0;
}

export const getCardNumberError = (cardNumber: string): string => {
  if (cardNumber === '') return '';
  if (isIncompleteRange(cardNumber, 4)) return '필요한 자릿수를 모두 입력해주세요!'

  return '';
}

export const getMonthError = (month: string): string => {
  if (month === '') return '';
  if (isIncompleteRange(month, 2)) return '월/연은 2자리수여야 합니다!';

  const monthNum = Number(month);
  if (monthNum < 1 || monthNum > 12) return '월은 1월부터 12월 사이여야 합니다!';

  return '';
}

export const getYearError = (year: string): string => {
  if (year === '') return '';
  if (isIncompleteRange(year, 2)) return '월/연은 2자리수여야 합니다!';

  return '';
}

export const getCvcError = (cvc: string): string => {
  if (cvc === '') return '';
  if (isIncompleteRange(cvc, 3)) return '필요한 자릿수를 모두 입력해주세요!';

  return '';
}

export type CardBrand = 'Visa' | 'MasterCard' | 'Diners' | 'AMEX' | 'UnionPay' | 'Unknown';

export const getCardBrand = (cardNumber: string): CardBrand => {
  if (cardNumber.length === 0) return 'Unknown';

  // 앞 6자리부터 판별로직
  if (cardNumber.length >= 6) {
    const prefixSixth = Number(cardNumber.slice(0,6));
    if (prefixSixth >= 622126 && prefixSixth <= 622925) return 'UnionPay';
  }
  // 앞 4자리 판별로직
  if (cardNumber.length >= 4) {
    const prefixFourth = Number(cardNumber.slice(0,4));
    if (prefixFourth >= 6282 && prefixFourth <= 6288) return 'UnionPay';
  }
  // 앞 3자리 판별로직
  if (cardNumber.length >= 3) {
    const prefixThird = Number(cardNumber.slice(0,3));
    if (prefixThird >= 624 && prefixThird <= 626) return 'UnionPay';
  }  
  // 앞 2자리 판별로직
  if (cardNumber.length >= 2) {
    const prefixSecond = Number(cardNumber.slice(0,2));
    if (prefixSecond === 34 || prefixSecond === 37) return 'AMEX';
    if (prefixSecond === 36) return 'Diners';
    if (prefixSecond >= 51 && prefixSecond <= 55) return 'MasterCard';
  }
  // 앞 1자리 판별로직
  const prefixFirst = Number(cardNumber.slice(0,1));
  if (prefixFirst === 4) return 'Visa';

  return 'Unknown';
}

export const getCardLengthByBrand = (cardBrand: CardBrand): number[] => {
  switch (cardBrand) {
    case 'AMEX': return [4, 6, 5]; 
    case 'Diners': return [4, 6, 4];
    case 'UnionPay':
    case 'MasterCard':
    case 'Visa':
    default:
      return [4, 4, 4, 4];
  }
}