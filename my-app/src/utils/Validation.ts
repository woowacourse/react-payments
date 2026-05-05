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