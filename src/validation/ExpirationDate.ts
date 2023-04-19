export const validateExpirationDate = (date: string) => {
  if (date === "") return true;

  const [month, year] = date.split("/");

  const regExp = /^\d{0,2}$/;
  const isMonthCorrect =
    regExp.test(month) && Number(month) <= 12 && Number(month) >= 1;

  if (!year) {
    return isMonthCorrect;
  }

  return isMonthCorrect && regExp.test(year) && Number.isInteger(+year);
};
