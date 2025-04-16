import CustomCardNumbersError from "../error/CustomCardNumbersError";

const isNumber = (number: string) => {
  if (isNaN(Number(number))) return false;
  return true;
};

const numberLength = (number: string, length: number) => {
  if (number.length !== length) return false;
  return true;
};

const invalidNumber = (number: string) => {
  if (
    Number(number[0]) !== 4 &&
    (Number(number.slice(0, 2)) < 51 || Number(number.slice(0, 2)) > 55)
  )
    return false;
  return true;
};

const invalidMonth = (month: string) => {
  if (Number(month) < 1 || Number(month) > 12) return false;
  return true;
};

const invalidYear = (year: string) => {
  if (Number(year) < 25) return false;
  return true;
};

export const validateCardNumbers = (number: string[], length: number) => {
  number.map((num, index) => {
    console.log(num, index);
    if (num.length > 0) {
      if (!isNumber(num))
        throw new CustomCardNumbersError("숫자로 입력해주세요.", index);
      if (!numberLength(num, length))
        throw new CustomCardNumbersError(
          `${length}자리로 입력해주세요.`,
          index
        );
    }
  });
};

export const validateFirstCardNumbers = (number: string) => {
  if (!invalidNumber(number))
    throw new CustomCardNumbersError("유효하지 않은 카드번호입니다.", 0);
};

export const validateMonth = (month: string, length: number) => {
  if (!isNumber(month)) throw new Error("숫자를 입력해주세요.");
  if (!numberLength(month, length))
    throw new Error(`${length}자리로 입력해주세요.`);
  if (!invalidMonth(month)) throw new Error("유효하지 않은 월입니다.");
};

export const validateYear = (year: string, length: number) => {
  if (!isNumber(year)) throw new Error("숫자를 입력해주세요.");
  if (!numberLength(year, length))
    throw new Error(`${length}자리로 입력해주세요.`);
  if (!invalidYear(year)) throw new Error("유효하지 않은 연도입니다.");
};

export const validateCVC = (number: string, length: number) => {
  if (!isNumber(number)) throw new Error("숫자를 입력해주세요.");
  if (!numberLength(number, length))
    throw new Error(`${length}자리로 입력해주세요.`);
};
