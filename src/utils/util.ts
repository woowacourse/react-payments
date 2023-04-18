const splitStringIntoGroups = (str: string, groupSize: number): string[] => {
  const regex = new RegExp(`.{1,${groupSize}}`, 'g');
  return str.match(regex) as string[];
};

export const formatCardNumber = (cardNumber: string): string => {
  if (cardNumber.length <= 4) return cardNumber;
  const splitCardNumber = splitStringIntoGroups(cardNumber, 4)
    .map((number, index) => {
      if (index > 1) return '*'.repeat(number.length);
      return number;
    })
    .join('-');
  return splitCardNumber;
};

export const formatExpireDate = (expireDate: string): string => {
  if (expireDate.length <= 2) return expireDate;
  if (expireDate[2] === '/') return expireDate[0] + expireDate[1];
  const newExpireDate = expireDate.split('');
  newExpireDate[2] = `/${newExpireDate[2]}`;
  return newExpireDate.join('');
};
