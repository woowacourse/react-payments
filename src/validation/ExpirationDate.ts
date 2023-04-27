export const validateExpirationDate = (date: string) => {
  if (date === "") return true;

  const [month, year] = date.split("/").map(Number);

  if (1 > month || month > 12) return false;
  if (year === undefined) return true;

  if (year === 2) return true;

  if (month <= 3 && 24 <= year && year <= 28) return true;
  if (month >= 4 && 23 <= year && year <= 27) return true;

  return false;
};
