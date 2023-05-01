import React from "react";
import Style from "./CardListPageStyled";

import CardListHeader from "./CardListHeader/CardListHeader";
import CardList from "./CardList/CardList";

import { CreditCard } from "../../types/card";

interface CardListPageProps {
  creditCardList: CreditCard[];
}

function CardListPage({ creditCardList }: CardListPageProps) {
  return (
    <Style.Page>
      <CardListHeader />
      <CardList creditCardList={creditCardList} />
    </Style.Page>
  );
}

export default CardListPage;
