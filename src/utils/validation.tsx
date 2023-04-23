export const validateExpiryDate = (expiryDate: string): boolean => {
  const [month, year] = expiryDate.split(" / ").map((each) => Number(each));
  if (month < 1 || month > 12) {
    return false;
  }

  if (year < new Date().getFullYear() % 2000) {
    return false;
  }

  return true;
};
