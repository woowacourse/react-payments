const formatSingleDigitDate = (dateValue: string) => {
  return dateValue.padStart(2, '0');
};

export default formatSingleDigitDate;
