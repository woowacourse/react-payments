import React from "react";
import CardAddButton from "./CardAddButton";
import St from "./styled";
import CardDetailView from "../../CardDetailView";

type CreditCard = {
  cardNumberOrigin: string;
  cardNumberHidden: string;
  cardDate: string;
  cardOwnerName: string;
  cardCVC: string;
  cardPassword: [string, string];
};

type CardListProps = {
  creditCardList: CreditCard[];
};

function CardList({ creditCardList }: CardListProps) {
  return (
    <St.ListSection>
      {!creditCardList.length ? (
        <St.Title>새로운 카드를 등록해주세요.</St.Title>
      ) : null}
      {creditCardList.map((card) => {
        const { cardNumberOrigin, cardNumberHidden, cardDate, cardOwnerName } =
          card;
        return (
          <li key={cardNumberOrigin}>
            <CardDetailView
              cardNumberHidden={cardNumberHidden}
              cardDate={cardDate}
              cardOwnerName={cardOwnerName}
            />
          </li>
        );
      })}
      <CardAddButton />
    </St.ListSection>
  );
}

export default CardList;
