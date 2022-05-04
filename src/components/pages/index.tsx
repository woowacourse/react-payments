import Card from "components/add/Card";
import Header from "components/common";
import { PATH } from "constant/path";
import { CardsContext } from "contexts/CardsProvider";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { cards } = useContext(CardsContext);

  const handleClickCard = (id: number) => {
    const cardInfo = cards.find(card => card.id === id);

    navigate(PATH.COMPLETE, { state: cardInfo });
  };

  return (
    <>
      <Header title="보유 카드" hasBackArrow={false} />
      {cards.map(cardInfo => (
        <div className="mb-30 flex-column-center" key={cardInfo.id}>
          <Card cardInfo={cardInfo} marginBottom="10px" onClick={handleClickCard} />
          <span className="card-nickname">{cardInfo.cardName}</span>
        </div>
      ))}
      <div className="small-card empty-card mb-30" onClick={() => navigate(PATH.ADD)}>
        +
      </div>
    </>
  );
}
