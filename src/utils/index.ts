import { CardNumberProps, CardPasswordProps } from "src/interfaces";

export const objectValueToString = (
  obj: CardNumberProps | CardPasswordProps,
) => {
  return Object.values(obj).reduce((acc, cur) => acc + cur, "");
};
