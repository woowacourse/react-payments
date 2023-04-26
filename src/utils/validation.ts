export const cardNumberValidation = (cardNumber: string) => {
  const cardNumberArray = (cardNumber.trim());
  
  if (isNaN(Number(cardNumberArray))) return '카드 번호에는 숫자만 입력 가능합니다.';

  return '';
};

export const expiredDateValidation = (expiredDate: string) => {
  const [month, year] = expiredDate.split(' / ');
  if (month.length === 1) {
    if (Number(month) * 10 > 10) return '달은 01~12까지의 숫자만 입력 가능합니다.';
  }

  if (month === '00' || Number(month) > 12) return '달은 01~12까지의 숫자만 입력 가능합니다.';
  return '';
};
