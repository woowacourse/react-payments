import React from "react";
import St from "./styled";
import CardListHeader from "./CardListHeader";
import CardList from "./CardList";

function CardListPage() {
  return (
    <St.Page>
      <CardListHeader />
      <CardList />
    </St.Page>
  );
}

export default CardListPage;
