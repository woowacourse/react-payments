import React from "react";
import St from "./styled";
import CardDetailHeader from "./CardDetailHeader";
import CardDetailView from "../CardDetailView";
import CardDetailForm from "./CardDetailForm";
function CardDetailPage() {
  return (
    <St.Page>
      <CardDetailHeader />
      <CardDetailView />
      <CardDetailForm />
    </St.Page>
  );
}

export default CardDetailPage;
