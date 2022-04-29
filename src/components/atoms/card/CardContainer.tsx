import React from "react";
import { useAppState } from "../../../hooks/hooks";
import { transformNumToBullet, transformToMMYY } from "../../../utils";
import Card from "./Card";

function CardContainer() {
  const { cardNumber, name, expiredPeriod, cvc, password, isEditingCVC } = useAppState();

  const transform = (str: string) => {
    return [4, 8, 12 ,16].map((index) => {
      const part = str.slice(index-4, index);
      if (index >= 12) {
        return transformNumToBullet(part);
      }
      return str.slice(index-4, index);
    }).filter((part: string) => part).join(' ');
  }

  const isActive = !!(cardNumber.length === 16 && expiredPeriod.length === 4 && name.length > 0 && cvc.length === 3 && password[0] && password[1]);

  return (
    <Card isActive={isActive} cardNumber={transform(cardNumber)} name={name} expiredPeriod={transformToMMYY(expiredPeriod)} cvc={cvc} fliped={isEditingCVC}></Card>
  )
}

export default CardContainer;