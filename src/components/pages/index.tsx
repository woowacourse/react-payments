import Card from "components/add/Card";
import Header from "components/common/Header";
import { PATH } from "constant/path";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CardInfoWithCardName } from "types/cardInfo";

export default function Home({ cards }: { cards: CardInfoWithCardName[] }) {
  const navigate = useNavigate();

  const handleClickCard = (id: number) => {
    const cardInfo = cards.find(card => card.id === id);

    navigate(PATH.COMPLETE, { state: cardInfo });
  };

  return (
    <>
      <Header title="보유 카드" hasBackArrow={false} />
      {cards.map(cardInfo => (
        <div className="mb-30 flex-column-center" key={cardInfo.id}>
          <Card cardInfo={cardInfo} marginBottom="10px" onClickCard={handleClickCard} />
          <span className="card-nickname">{cardInfo.cardName}</span>
        </div>
      ))}
      <div className="small-card empty-card mb-30" onClick={() => navigate(PATH.ADD)}>
        +
      </div>
    </>
  );
}
