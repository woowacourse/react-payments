import React from "react";
import St from "./CardListPageStyled";
import CardListHeader from "./CardListHeader/CardListHeader";
import CardList from "./CardList/CardList";
import { CreditCard } from "../../types/card";

type CardListPageProps = {
  creditCardList: CreditCard[];
};

function CardListPage({ creditCardList }: CardListPageProps) {
  return (
    <St.Page>
      <CardListHeader />
      <CardList creditCardList={creditCardList} />
    </St.Page>
  );
}

export default CardListPage;
