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

export async function delayForTime<T>(promise: Promise<T>, time:number) {
  await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
  return await promise;
}
