export const checkValidMonth = (value: string) => {
  if (Number(value) >= 1 && Number(value) <= 12 && value.length === 2) return true;
  return false;
};

export const checkValidYear = (value: string) => {
  if (value.length === 2) return true;
  return false;
};
