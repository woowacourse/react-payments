export const formatExpireDate = (year: string, month: string) => {
  if (!year && !month) return '';
  if (!year) return month;
  if (!month) return year;
  return `${month}/${year}`;
};
