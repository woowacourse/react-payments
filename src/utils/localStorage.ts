import { CardProps } from "../components/common/card";

export function setData(initId: number) {
  let id = initId;

  return (data: CardProps) => {
    localStorage.setItem(String(id), JSON.stringify(data));
    id += 1;
  };
}

export const setCardData = setData(0);

export function getData(): CardProps[] | undefined {
  const cards = Object.values(localStorage).map((card) => JSON.parse(card));
  if (cards !== null) {
    return cards;
  }
  return;
}
