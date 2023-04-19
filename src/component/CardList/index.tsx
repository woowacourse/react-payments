import React from "react";
import CardAddButton from "../CardAddButton";
import CardDetailView from "../CardDetailView";
import St from "./styled";

function CardList() {
  return (
    <St.ListSection>
      <CardDetailView />
      <CardDetailView />
      <CardAddButton />
    </St.ListSection>
  );
}

export default CardList;
