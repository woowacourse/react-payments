import React from "react";
import { useAppState } from "../../../hooks/hooks";
import { transformNumToBullet, transformToMMYY } from "../../../utils";
import Card from "./Card";

function CardContainer() {
  const { cardNumber, name, expiredPeriod } = useAppState();

  const transform = (str: string) => {
    return [4, 8, 12 ,16].map((index) => {
      const part = str.slice(index-4, index);
      if (index >= 12) {
        return transformNumToBullet(part);
      }
      return str.slice(index-4, index);
    }).filter((part: string) => part).join(' ');
  }

  return (
    <Card cardNumber={transform(cardNumber)} name={name} expiredPeriod={transformToMMYY(expiredPeriod)}></Card>
  )
}

export default CardContainer;