export const isValidBin = (number: string): boolean => {
  if (!/^\d+$/.test(number)) return false;

  const bin2 = parseInt(number.slice(0, 2), 10);
  const bin3 = parseInt(number.slice(0, 3), 10);
  const bin4 = parseInt(number.slice(0, 4), 10);
  const bin6 = parseInt(number.slice(0, 6), 10);
  const len = number.length;

  if (number.startsWith("4") && len === 16) return true;
  if (bin2 >= 51 && bin2 <= 55 && len === 16) return true;
  if ((number.startsWith("34") || number.startsWith("37")) && len === 15)
    return true;
  if (number.startsWith("36") && len === 14) return true;
  if (len === 16) {
    if (bin6 >= 622126 && bin6 <= 622925) return true;
    if (bin3 >= 624 && bin3 <= 626) return true;
    if (bin4 >= 6282 && bin4 <= 6288) return true;
  }

  return false;
};

export const isValidExpirationDate = (expirationDate: string): boolean => {
  const match = expirationDate.match(/^(\d{2})\/(\d{2})$/);
  if (!match) return false;
  const month = parseInt(match[1], 10);
  return month >= 1 && month <= 12;
};
