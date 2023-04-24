const nowDate = new Date();

export const isCorrectCardNumber = (cardNumbers: Array<string>) => {
  if (
    cardNumbers[0].length === 4 &&
    cardNumbers[1].length === 4 &&
    cardNumbers[2].length === 4 &&
    cardNumbers[3].length === 4
  ) {
    return true;
  }
  return false;
};

export const isCorrectExpiredDate = (expiredDates: Array<string>) => {
  const expiredMonth = Number(expiredDates[0]);
  const expiredYear = Number(expiredDates[1]);

  if (
    (expiredMonth > nowDate.getMonth() &&
      expiredYear >= nowDate.getFullYear() % 2000) ||
    expiredYear > nowDate.getFullYear() % 2000
  ) {
    return true;
  }
  return false;
};

export const isCorrectSecurityCode = (securityCode: string) => {
  if (securityCode.length === 3) return true;
  return false;
};

export const isCorrectPassword = (passwords: Array<string>) => {
  if (passwords[0].length === 1 && passwords[1].length === 1) return true;
  return false;
};
