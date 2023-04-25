import React from "react";
import CardAddButton from "./CardAddButton/CardAddButton";
import St from "./CardListStyled";
import CardDetailView from "../../CardDetailView/CardDetailView";
import { CreditCard } from "../../../types/card";

type CardListProps = {
  creditCardList: CreditCard[];
};

function CardList({ creditCardList }: CardListProps) {
  return (
    <St.ListSection>
      {!creditCardList.length ? (
        <St.Title>새로운 카드를 등록해주세요.</St.Title>
      ) : null}
      {creditCardList.map(
        ({ originNumber, displayNumber, cardDate, cardOwnerName }) => (
          <li key={originNumber}>
            <CardDetailView
              displayNumber={displayNumber}
              cardDate={cardDate}
              cardOwnerName={cardOwnerName}
            />
          </li>
        )
      )}
      <CardAddButton />
    </St.ListSection>
  );
}

export default CardList;
