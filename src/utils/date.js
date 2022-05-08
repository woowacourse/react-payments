export const isExpiredDate = (month, year) => {
  const currentDate = new Date();
  const currentYear = String(currentDate.getFullYear()).slice(2, 4);
  const currentMonth = currentDate.getMonth() + 1;

  if (parseInt(year) < parseInt(currentYear)) {
    return true;
  }

  if (year === currentYear && parseInt(month) < currentMonth) {
    return true;
  }

  if (parseInt(month) > 12 || parseInt(month) < 1) {
    return true;
  }

  return false;
};
