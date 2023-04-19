const formatExpirationDate = (input: string) => {
  const value = input.replace(/\D/g, '');
  const formattedValue = value.length > 2 ? value.replace(/(\d{2})/, '$1/') : value;

  return formattedValue.slice(0, 5);
};

const formatNumberInput = (input: string) => {
  return input.replace(/\D/g, '');
};

const formatEnglishName = (input: string) => {
  return input.replace(/[^a-zA-Z]/g, '').toUpperCase();
};

export { formatExpirationDate, formatNumberInput, formatEnglishName };
