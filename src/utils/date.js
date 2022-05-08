export const isAvailableDate = (month, year) => {
  const currentDate = new Date();
  const currentYear = String(currentDate.getFullYear()).slice(2, 4);
  const currentMonth = currentDate.getMonth() + 1;

  if (!month || !year) {
    return false;
  }

  if (parseInt(year) < parseInt(currentYear)) {
    return false;
  }

  if (year === currentYear && parseInt(month) < currentMonth) {
    return false;
  }

  if (parseInt(month) > 12 || parseInt(month) < 1) {
    return false;
  }

  return true;
};
