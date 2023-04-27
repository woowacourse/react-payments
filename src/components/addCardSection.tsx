import { useContext } from "react";
import { DateContext, NameContext, NumberContext } from "../contexts/cardInfo";
import { AddCardForm } from "./addCardForm";
import { Card } from "./common/card";

export function AddCardSection() {
  const { cardNumber } = useContext(NumberContext);
  const { month, year } = useContext(DateContext);
  const { userName } = useContext(NameContext);

  return (
    <>
      <Card
        cardNumber={cardNumber}
        month={month}
        year={year}
        userName={userName}
      />
      <AddCardForm />
    </>
  );
}
