const getExpirationDate = (month: string, year: string) => {
  const expirationDate = new Date(`20${year}-${month}-01`);
  expirationDate.setMonth(expirationDate.getMonth() + 1);
  expirationDate.setDate(expirationDate.getDate() - 1);

  return expirationDate;
};

export const validateExpirationDate = (month: string, year: string) => {
  if (!/^(0[1-9]|1[0-2])$/.test(month)) {
    return { isError: true, errorMessage: '월은 01에서 12 사이의 숫자여야 합니다.' };
  }

  const expirationDate = getExpirationDate(month, year);

  if (expirationDate < new Date()) {
    return { isError: true, errorMessage: '카드 유효기간이 지났습니다.' };
  }

  return { isError: false, errorMessage: '' };
};
