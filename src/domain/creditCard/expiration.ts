const calculateLastDayOfMonth = (month: string, year: string) => {
  const lastDayOfMonth = new Date(Number(`20${year}`), Number(month), 0);

  return lastDayOfMonth;
};

export const isValidExpirationDate = (month: string, year: string) => {
  const formattedMonth = Number(month);

  if (formattedMonth < 1 || formattedMonth > 12) {
    return { isError: true, errorMessage: '월은 01에서 12 사이의 숫자여야 합니다.' };
  }

  const lastDayOfMonth = calculateLastDayOfMonth(month, year);

  const currentDate = new Date();

  if (lastDayOfMonth < currentDate) {
    return { isError: true, errorMessage: '카드 유효기간이 지났습니다.' };
  }

  return { isError: false, errorMessage: '' };
};

export const isCompletedInputExpiration = (
  expiration: { month: string; year: string },
  expirationError: { isError: boolean; errorMessage: string },
) => {
  return (expiration.month + expiration.year).length === 4 && !expirationError.isError;
};
