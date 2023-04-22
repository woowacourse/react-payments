const formatExpirationDate = (input: string) => {
  const value = input.replace(/\D/g, '');
  const formattedValue = value.length > 2 ? value.replace(/(\d{2})/, '$1/') : value;

  return formattedValue.slice(0, 5);
};

const formatEnglishCapitalization = (input: string) => {
  return input.toUpperCase();
};

export { formatExpirationDate, formatEnglishCapitalization };
