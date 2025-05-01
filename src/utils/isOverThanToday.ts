function isOverThanToday(month: number, year: number) {
  return new Date() < new Date(2000 + year, month - 1);
}

export default isOverThanToday;
