export const cardInfoValidator = (input: []) => {
  const cardNumbers = input.map(Number);

  cardNumbers.map((cardNumber) => {
    if (!isNumber(cardNumber)) {
      throw new Error('카드 번호는 숫자만 입력 가능합니다.');
    }
    if (!isFourDigit(cardNumber)) {
      throw new Error('카드 번호는 4자리어야 합니다.');
    }
  });

  if (!isValidCardNumber(String(cardNumbers[0]))) {
    throw new Error('카드 번호는 4 또는 51~55로 시작해야 합니다.');
  }
};

const isNumber = (input: number | string) => {
  if (!Number.isInteger(input)) {
    return false;
  }
};

const isFourDigit = (cardNumber: number) => {
  if (String(cardNumber).length !== 4) {
    return false;
  }
};

const isValidCardNumber = (input: string) => {
  if (input[0] === '4') {
    return true;
  } else if (input[0] === '5') {
    if (1 <= Number(input[1]) && Number(input[1]) <= 5) {
      return true;
    }
  }
  return false;
};
