import React from "react";
import CardAdd from "../components/CardAdd";
import Card from "../common/Card";
import Header from "../common/Header";

const cardList = [
  {
    cardName: "엄카",
    cardType: "jun",
    cardNumbers: ["1234", "1234", "1234", "1234"],
    expiredDate: { month: "12", year: "23" },
    userName: "SEUNGCHAN ON",
  },
];

export default function CardList() {
  return (
    <>
      <Header hasBackArrow={false} pageTitle="보유 카드" />
      <div className="card-list">
        <div className="card-list-container">
          {cardList.map((card, index) => (
            <Card
              key={index}
              cardInfo={card}
              size="small"
              isCardName={true}
              isClick={true}
              onClick={() => {}}
            />
          ))}
          <CardAdd />
        </div>
      </div>
    </>
  );
}
