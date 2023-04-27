import { CardProps } from "../components/common/card";

export function setData(initId: number) {
  let id = initId;

  return (data: CardProps) => {
    localStorage.setItem(String(id), JSON.stringify(data));
    id += 1;
  };
}
const setCardData = setData(0);

export function getData(): CardProps[] | undefined {
  const data = Object.values(localStorage).map((item) => JSON.parse(item));
  if (data !== null) {
    return data;
  }
  return;
}
export { setCardData };
