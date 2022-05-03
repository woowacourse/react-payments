import Card from "components/Card";
import Header from "components/Header";
import { CardsContext } from "contexts/CardsProvider";
import React, { useContext } from "react";

export default function Home() {
  const { cards } = useContext(CardsContext);

  return (
    <>
      <Header title="보유 카드" hasBackArrow={false} />
      {cards.map(cardInfo => (
        <Card key={cardInfo.cardType.name + cardInfo.cardType.color} cardInfo={cardInfo} />
      ))}
    </>
  );
}
