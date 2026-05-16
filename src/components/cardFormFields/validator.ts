import { getCardNumberSegments } from "../../utils/cardNetwork";

export const validateNumber = (newValue: string) => {
  const errorValue = { state: true, message: "" };
  if (!/^\d+$/.test(newValue) && newValue) {
    errorValue.state = false;
    errorValue.message = "숫자만 입력 가능합니다";
  }
  return errorValue;
}

export const validateMonth = (newValue: string) => {
  const errorValue = { state: true, message: "" };
  if (newValue) {
    const month = Number(newValue);

    if (month > 12) {
      errorValue.state = false;
      errorValue.message = "1월~12월 사이를 입력해 주세요.";
    } else if (newValue.length === 1) {
      errorValue.state = false;
      errorValue.message = "월을 01 ~ 12 형식으로 작성해주세요.";
    } else if (newValue.length === 2 && month === 0) {
      errorValue.state = false;
      errorValue.message = "1월~12월 사이를 입력해 주세요.";
    } else {
      errorValue.state = true;
      errorValue.message = "";
    }
  }

  return errorValue;
}

export const validateCardNumberLength = (cardNumber: string[]) => {
  const errorValue = { state: true, message: "" };
  const segments = getCardNumberSegments(cardNumber.join(""));

  if (cardNumber.every((value) => value.length === 0)) {
    return errorValue;
  }

  if (cardNumber.some((value, index) => value.length > 0 && value.length < segments[index])) {
    errorValue.state = false;
    errorValue.message = "카드 번호 각 칸을 모두 입력해 주세요.";
    return errorValue;
  }

  if (cardNumber.some((value) => value.length === 0)) {
    errorValue.state = false;
    errorValue.message = "카드 번호 모두 입력해 주세요.";
  }

  return errorValue;
}

export const validateExpireDateNotPast = (expireDate: string[]) => {
  const errorValue = { state: true, message: "" };

  const [month, year] = expireDate;
  if (month.length !== 2 || year.length !== 2) {
    return errorValue;
  }

  const inputMonth = Number(month);
  const inputYear = Number(year);
  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;

  if (inputYear < currentYear || (inputYear === currentYear && inputMonth < currentMonth)) {
    errorValue.state = false;
    errorValue.message = "이미 만료된 카드입니다.";
  }

  return errorValue;
}

export const validateCvcLength = (cvc: string) => {
  const errorValue = { state: true, message: "" };

  if (cvc.length > 0 && cvc.length < 3) {
    errorValue.state = false;
    errorValue.message = "CVC 3자리를 입력해 주세요.";
  }

  return errorValue;
}

export const validateCardPasswordLength = (cardPassword: string) => {
  const errorValue = { state: true, message: "" };

  if (cardPassword.length > 0 && cardPassword.length < 2) {
    errorValue.state = false;
    errorValue.message = "비밀번호 앞 2자리를 입력해 주세요.";
  }

  return errorValue;
}

export const isNumericInput = (value: string): boolean => /^\d*$/.test(value);

export const getCardNumberError = (cardNumber: string[]): string => {
  const result = validateCardNumberLength(cardNumber);
  return result.state ? "" : result.message;
}

export const getExpireDateError = (expireDate: string[]): string => {
  const monthResult = validateMonth(expireDate[0]);
  if (!monthResult.state) return monthResult.message;

  const dateResult = validateExpireDateNotPast(expireDate);
  return dateResult.state ? "" : dateResult.message;
}

export const getCvcError = (cvc: string): string => {
  const result = validateCvcLength(cvc);
  return result.state ? "" : result.message;
}

export const getCardPasswordError = (cardPassword: string): string => {
  const result = validateCardPasswordLength(cardPassword);
  return result.state ? "" : result.message;
}

