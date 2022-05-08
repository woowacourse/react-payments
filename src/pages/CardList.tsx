import React from "react";

import CardAdd from "../components/CardAdd";
import Card from "../common/Card";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";

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
  const navigation = useNavigate();

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
              onClick={() => {
                navigation("/confirmAddCard");
              }}
            />
          ))}
          <CardAdd
            onClick={() => {
              navigation("/addCard");
            }}
          />
        </div>
      </div>
    </>
  );
}
