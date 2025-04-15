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

export const validateCardNumbers = (
  number: string,
  length: number,
  name: string
) => {
  if (!isNumber(number)) throw new Error("숫자로 입력해주세요.");
  if (!numberLength(number, length))
    throw new Error(`${length}자리로 입력해주세요.`);
  if (name === "card1" && !invalidNumber(number))
    throw new Error("유효하지 않은 카드번호입니다.");
};

export const validateExpiry = (month: string, year: string, length: number) => {
  if (!isNumber(month) || !isNumber(year))
    throw new Error("숫자를 입력해주세요.");
  if (!numberLength(month, length) || !numberLength(year, length))
    throw new Error(`${length}자리로 입력해주세요.`);
  if (!invalidMonth(month)) throw new Error("유효하지 않은 월입니다.");
  if (!invalidYear(month)) throw new Error("유효하지 않은 연도입니다.");
};

export const validateCVC = (number: string, length: number) => {
  if (!isNumber(number)) throw new Error("숫자를 입력해주세요.");
  if (!numberLength(number, length))
    throw new Error(`${length}자리로 입력해주세요.`);
};
