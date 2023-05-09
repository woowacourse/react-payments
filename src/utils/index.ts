import { CardIDProps, CardNumberProps, CardPasswordProps } from "src/interfaces";
import { BANK_LIST } from "./constant";

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

export const getBankListName = (cardName:CardIDProps) =>{
  const bank = BANK_LIST.find(({ id }) => id === cardName) ?? null; 
  return bank ? bank.name : null
}
