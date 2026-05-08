export const matchVisa = (prefix: string) => prefix.startsWith('4');

export const matchMasterCard = (prefix: string) => {
  const n = Number(prefix.slice(0, 2));
  return n >= 51 && n <= 55;
};

export const matchAmex = (prefix: string) => prefix.startsWith('34') || prefix.startsWith('37');

export const matchDiners = (prefix: string) => prefix.startsWith('36');

export const matchUnionPay = (prefix: string) => {
  if (prefix.length >= 6) {
    const n6 = Number(prefix.slice(0, 6));
    if (n6 >= 622126 && n6 <= 622925) return true;
  }
  if (prefix.length >= 4) {
    const n4 = Number(prefix.slice(0, 4));
    if (n4 >= 6282 && n4 <= 6288) return true;
  }
  if (prefix.length >= 3) {
    const n3 = Number(prefix.slice(0, 3));
    if (n3 >= 624 && n3 <= 626) return true;
  }
  return false;
};
