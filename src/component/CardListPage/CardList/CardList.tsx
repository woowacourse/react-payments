import React from "react";
import Style from "./CardListStyled";

import CardAddButton from "./CardAddButton/CardAddButton";
import CardDetailView from "../../CardDetailView/CardDetailView";

import { CreditCard } from "../../../types/card";

interface CardListProps {
  creditCardList: CreditCard[];
}

function CardList({ creditCardList }: CardListProps) {
  return (
    <Style.ListSection>
      {!creditCardList.length ? (
        <Style.Title>새로운 카드를 등록해주세요.</Style.Title>
      ) : null}
      {creditCardList.map((card) => {
        const {
          cardNumberOrigin,
          cardNumberHidden,
          cardDate,
          cardOwnerName,
          cardName,
          cardCompany,
        } = card;
        return (
          <li key={cardNumberOrigin}>
            <CardDetailView
              cardNumberHidden={cardNumberHidden}
              cardDate={cardDate}
              cardOwnerName={cardOwnerName}
              cardCompany={cardCompany}
            />
            <Style.CardName>{cardName}</Style.CardName>
          </li>
        );
      })}
      <CardAddButton />
    </Style.ListSection>
  );
}

export default CardList;
