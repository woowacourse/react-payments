import React, { useEffect, useState, useContext } from "react";

import CardAdd from "../components/CardAdd";
import Card from "../common/Card";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { fetchGetCardList } from "../apis";
import { Context } from "../contexts/CardContext";

export default function CardList() {
  const navigation = useNavigate();
  const [cardList, setCardList] = useState([]);
  const [cardInfo, dispatch] = useContext(Context);

  useEffect(() => {
    fetchGetCardList().then(cardData => {
      setCardList(cardData);
      dispatch({ type: "RESET" });
    });
  }, []);

  return (
    <>
      <Header hasBackArrow={false} pageTitle="보유 카드" />
      <div className="card-list">
        <div className="card-list-container">
          {cardList.map(card => (
            <Card
              key={card.id}
              cardInfo={card}
              size="small"
              isCardName={true}
              isClick={true}
              onClick={() => {
                dispatch({ type: "UPDATE_CARD", payload: { cardInfo: card } });
                navigation(`/editCard/${card.id}`);
              }}
            />
          ))}
          <CardAdd />
        </div>
      </div>
    </>
  );
}
