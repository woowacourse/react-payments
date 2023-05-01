import { CardProps } from "../components/@common/card/card";

export function setData(data: CardProps) {
  const prevData = getData();
  if (prevData) {
    localStorage.setItem("cardInfo", JSON.stringify([...prevData, data]));
    return;
  }
  localStorage.setItem("cardInfo", JSON.stringify([data]));
}
export function getData(): CardProps[] | undefined {
  const prevData = localStorage.getItem("cardInfo");
  if (prevData !== null) {
    return [...JSON.parse(prevData)];
  }
  return;
}
