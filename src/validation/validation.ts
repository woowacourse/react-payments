//TODO: 포커스 이동됐을때 숫자수가 더 작을때의 예외처리
export const validateCardNumber = (cardNumber: string) => {
  if (isNaN(Number(cardNumber))) {
    return "숫자만 입력 가능합니다.";
  }

  return "";
};

export const validateCardExpirationDateMM = (expirationDate: string) => {
  if (isNaN(Number(expirationDate))) {
    return "숫자만 입력 가능합니다.";
  }
  if (Number(expirationDate) < 1 || Number(expirationDate) > 12) {
    return "유효기간이 올바르지 않습니다.";
  }
  return "";
};

export const validateCardExpirationDateYY = (expirationDate: string) => {
  if (isNaN(Number(expirationDate))) {
    return "숫자만 입력 가능합니다.";
  }
  if (Number(expirationDate) < 25 || Number(expirationDate) > 99) {
    return "유효기간이 올바르지 않습니다.";
  }
  return "";
};

export const validateCardCVC = (cvc: string) => {
  if (isNaN(Number(cvc))) {
    return "숫자만 입력 가능합니다.";
  }
  return "";
};
