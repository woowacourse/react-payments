const inquireCardNumber = (cardNumber: string) => {
  const isValidLength = cardNumber.length === 0 || cardNumber.length === 4;
  const isValidCardNumber = /^0{1,4}|[1-9]\d{0,3}$/.test(cardNumber);

  if (!isValidLength) {
    return '카드 번호는 4자리로 입력해주세요';
  }

  if (!isValidCardNumber) {
    return '카드 번호는 0000 ~ 9999 사이의 숫자로 입력해주세요';
  }

  return '';
};

export default inquireCardNumber;
