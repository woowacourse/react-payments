export const cardNumberValidator = (inputs: string[]) => {
  for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];
    if (!isNumber(input)) {
      return [index, '카드 번호는 숫자만 입력 가능합니다.'];
    }
    if (!isFourDigit(Number(input))) {
      return [index, '카드 번호는 4자리어야 합니다.'];
    }
    if (index === 0 && !isValidCardNumber(input)) {
      return [0, '카드 번호는 4 또는 51~55로 시작해야 합니다.'];
    }
  }

  return [-1];
};

const isNumber = (input: string) => {
  return Number.isInteger(Number(input));
};

const isFourDigit = (cardNumber: number) => {
  return String(cardNumber).length === 4;
};

const isValidCardNumber = (input: string): boolean => {
  if (input[0] === '4') return true;
  if (input[0] === '5') {
    const secondDigit = Number(input[1]);
    return secondDigit >= 1 && secondDigit <= 5;
  }
  return false;
};
