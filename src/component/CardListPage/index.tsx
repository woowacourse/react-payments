import React from "react";
import St from "./styled";
import CardListHeader from "./CardListHeader";
import CardList from "./CardList";
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
