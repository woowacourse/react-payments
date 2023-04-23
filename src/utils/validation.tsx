export const validateExpiryDate = (expiryDate: string): boolean => {
  const [month, year] = expiryDate.split(" / ").map((each) => Number(each));
  if (month < 1 || month > 12) {
    return false;
  }

  const currentYear = new Date().getFullYear() % 2000;
  if (year < currentYear) {
    return false;
  }

  return true;
};
