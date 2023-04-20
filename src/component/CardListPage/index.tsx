import React from "react";
import St from "./styled";
import CardListHeader from "./CardListHeader";
import CardList from "./CardList";

type CreditCard = {
  cardNumberOrigin: string;
  cardNumberHidden: string;
  cardDate: string;
  cardOwnerName: string;
  cardCVC: string;
  cardPassword: [string, string];
};

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
