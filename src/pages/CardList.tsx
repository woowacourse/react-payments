import React, { useEffect, useState } from "react";

import CardAdd from "../components/CardAdd";
import Card from "../common/Card";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";

export default function CardList() {
  const navigation = useNavigate();
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("card-list"));

    if (data) setCardList(data);
  }, []);

  return (
    <>
      <Header hasBackArrow={false} pageTitle="보유 카드" />
      <div className="card-list">
        <div className="card-list-container">
          {cardList.map((card, index) => (
            <Card
              key={card.id}
              cardInfo={card}
              size="small"
              isCardName={true}
              isClick={true}
              onClick={() => {
                navigation("/confirmAddCard");
              }}
            />
          ))}
          <CardAdd />
        </div>
      </div>
    </>
  );
}
