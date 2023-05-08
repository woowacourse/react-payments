import React, { useEffect } from "react";
import { Card } from "../../types/card";
import { useNavigate } from "react-router";
import { NAVIGATE } from "../../abstract/constants";
import CardDetailView from "../CardDetailView/CardDetailView";
import Loader from "../common/Loader/Loader";
import Style from "./CardLoadingPageStyle";

interface CardLoadingPageProps {
  lastCard: Card;
}
function CardLoadingPage({ lastCard }: CardLoadingPageProps) {
  const navigate = useNavigate();

  const { cardNumberHidden, cardDate, cardOwnerName, cardCompany } = lastCard;

  useEffect(() => {
    setTimeout(() => navigate(NAVIGATE.HOME), 3000);
  }, []);

  return (
    <Style.Page>
      <Style.CardSection>
        <Style.Title>카드를 등록 중입니다.</Style.Title>
        <Style.subTitle>잠시만 기다려 주세요.</Style.subTitle>
        <Loader />
        <CardDetailView
          cardNumberHidden={cardNumberHidden}
          cardDate={cardDate}
          cardOwnerName={cardOwnerName}
          cardCompany={cardCompany}
        />
      </Style.CardSection>
    </Style.Page>
  );
}

export default React.memo(CardLoadingPage);
