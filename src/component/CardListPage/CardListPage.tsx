import React from "react";
import St from "./CardListPageStyled";
import CardList from "./CardList/CardList";
import { CreditCard } from "../../types/card";

type CardListPageProps = {
  creditCardList: CreditCard[];
};

function CardListPage({ creditCardList }: CardListPageProps) {
  return (
    <St.Page>
      <St.Title>보유 카드</St.Title>
      <CardList creditCardList={creditCardList} />
    </St.Page>
  );
}

export default CardListPage;
