const refineExpirationDate = ([month, year]: string[]): string => {
  if (month === '') {
    return '';
  }

  if (!year) {
    return `${month} /`;
  }

  return `${month} / ${year}`;
};

export default refineExpirationDate;
