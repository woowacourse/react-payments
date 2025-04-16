export const checkNumber = (value: string) => {
  if (Number.isInteger(Number(value))) throw new Error(`숫자만 입력 가능합니다.`);
};

export const checkValidLength = (value: string, validLength: number) => {
  if (value.length !== validLength)
    throw new Error(`반드시 ${validLength}자리의 숫자를 입력해야 합니다.`);
};

export const checkValidMonth = (value: string) => {
  if (Number(value) < 1 || Number(value) > 12)
    throw new Error(`월은 1~12 사이의 숫자로 입력해야 합니다.`);
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getCurrentMonth = () => {
  return new Date().getMonth();
};

export const checkValidYear = (value: string) => {
  const currentYear = getCurrentYear().toString().slice(2);
  if (Number(value) < Number(currentYear)) {
    throw new Error(`년도는 현재년도보다 이전일 수 없습니다.`);
  }
};

export const checkValidExpirationDate = (month: string, year: string) => {
  const currentYear = getCurrentYear().toString().slice(2);
  const currentMonth = getCurrentMonth() + 1;

  if (currentYear === year && Number(month) < currentMonth) {
    throw new Error(`유효 기간은 현재 이전일 수 없습니다.`);
  }
};
