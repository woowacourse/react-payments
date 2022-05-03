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
        <div
          className="mb-30 flex-column-center"
          key={cardInfo.cardType.name + cardInfo.cardType.color}
        >
          <Card cardInfo={cardInfo} marginBottom="10px" />
          <span className="card-nickname">{cardInfo.cardName}</span>
        </div>
      ))}
      <div className="small-card empty-card">+</div>
    </>
  );
}
