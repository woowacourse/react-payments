import React from "react";
import St from "./CardListStyled";
import { CreditCard } from "types/card";
import CardAddButton from "./CardAddButton/CardAddButton";
import CardDetailView from "components/CardDetailView/CardDetailView";

type CardListProps = {
  creditCardList: CreditCard[];
};

function CardList({ creditCardList }: CardListProps) {
  return (
    <St.ListSection>
      {!creditCardList.length ? (
        <St.Title>새로운 카드를 등록해주세요.</St.Title>
      ) : null}
      {creditCardList.map((card) => (
        <St.List key={card.originNumber}>
          <CardDetailView creditcard={card} />
          <St.Title>{card.cardAlias}</St.Title>
        </St.List>
      ))}
      <CardAddButton />
    </St.ListSection>
  );
}

export default CardList;
