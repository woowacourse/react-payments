import { CardNumberProps, CardPasswordProps } from "src/interfaces";

export const objectValueToString = (
  obj: CardNumberProps | CardPasswordProps,
) => {
  return Object.values(obj).reduce((acc, cur) => acc + cur, "");
};

export const getInputRefValueSum = (
  refs: React.MutableRefObject<HTMLInputElement[]>,
) => {
  return refs.current.reduce((acc, cur) => (acc += cur.value ?? ""), "");
};
