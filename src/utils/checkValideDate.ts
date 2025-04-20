export const checkValideDate = (monthString: string, yearString: string) => {
  const now = new Date();
  const currentYear = Number.parseInt(
    new Date().getFullYear().toString().slice(2),
    10,
  );
  const currentMonth = now.getMonth() + 1;

  const year = Number(yearString);
  const month = Number(monthString);

  if (currentYear < year) return true;

  if (currentYear === year && month >= currentMonth) return true;

  return false;
};
