import { CardNumberObj, CardPasswordObj } from "src/interfaces";

export const objectValueToString = (obj: CardNumberObj | CardPasswordObj) => {
  return Object.values(obj).reduce((acc, cur) => acc + cur, "");
};
