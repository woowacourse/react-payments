// util
const inRange = (prefix: string, length: number, min: number, max: number) => {
  if (prefix.length < length) return false;
  const prefixNumber = Number(prefix.slice(0, length));
  return prefixNumber >= min && prefixNumber <= max;
};

// matchers
export const matchVisa = (prefix: string) => prefix.startsWith('4');

export const matchMasterCard = (prefix: string) => inRange(prefix, 2, 51, 55);

export const matchAmex = (prefix: string) => prefix.startsWith('34') || prefix.startsWith('37');

export const matchDiners = (prefix: string) => prefix.startsWith('36');

export const matchUnionPay = (prefix: string) =>
  inRange(prefix, 6, 622126, 622925) || inRange(prefix, 4, 6282, 6288) || inRange(prefix, 3, 624, 626);
