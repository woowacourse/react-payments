export const isNumeric = (value: string) => {
  return /^[0-9]*$/.test(value);
};

export const validateMonth = (value: number) => {
  const isValidRange = value >= 1 && value <= 12;

  if (!isValidRange) throw new Error('MM에는 01에서 12까지의 값만 입력해주세요');
};

export const validateExpirationDate = (expirationYear: number, expirationMonth: number) => {
  const currentYear = new Date().getFullYear() - 2000;
  const currentMonth = new Date().getMonth() + 1;

  const isValidDate =
    expirationYear > currentYear ||
    (expirationYear === currentYear && expirationMonth >= currentMonth);

  if (!isValidDate) throw new Error('만료일이 지난 카드는 등록할 수 없습니다');
};

export const validateValidUserName = (userName: string) => {
  const isEmpty = !userName.length;
  const isValidFormat = /^([A-Za-z](?:\s?[A-Za-z])*)*$/.test(userName);
  const isValidLength = userName.length <= 30;

  if (isEmpty) return;

  if (isValidFormat && isValidLength) return;

  throw new Error('영문으로 이루어진 이름을 입력해주세요.');
};

// export const validateCardExpirationValue = (month: string, year: string) => {
//   try {
//     validateNumeric(month);
//     validateNumeric(year);

//     // Number
//     validateMonth(Number(month));
//     validateExpirationDate(Number(year), Number(month));
//   } catch (error) {
//     console.error(error);
//   }
// };
