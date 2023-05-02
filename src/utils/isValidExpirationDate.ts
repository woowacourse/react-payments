export const isErrorForExpirationDate = (expirationDateList: string[]) => {
  const [month, year] = expirationDateList;

  const today = new Date();
  const expirationDate = new Date(`20${year}-${month}`);

  return today > expirationDate;
};
