import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Style from "./CardNamePageStyled";

import CardDetailView from "../CardDetailView/CardDetailView";
import InputGuide from "../common/InputGuide/InputGuide";

import useWarningText from "../../hooks/useWarningText";
import useCardName from "../../hooks/useCardName";

import { Card, CreditCard } from "../../types/card";
import { NAVIGATE, PLACE_HOLDER, TYPE } from "../../abstract/constants";

interface CardNamePageProps {
  addCreditCard: (card: CreditCard) => void;
  lastCard: Card;
}

function CardNamePage({ lastCard, addCreditCard }: CardNamePageProps) {
  const navigate = useNavigate();
  const nameInputRef = useRef<HTMLInputElement>(null);

  const { cardName, changeCardName } = useCardName();
  const { warningText, isRightCardName } = useWarningText();

  const { cardNumberHidden, cardDate, cardOwnerName, cardCompany } = lastCard;

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const registerCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isRightCardName(cardName)) return;

    const newCard: CreditCard = {
      ...lastCard,
      cardName,
    };

    addCreditCard(newCard);

    navigate(NAVIGATE.HOME);
  };

  return (
    <>
      <Style.Page>
        <Style.TopSection>
          <Style.Title>카드등록이 완료되었습니다.</Style.Title>
          <CardDetailView
            cardNumberHidden={cardNumberHidden}
            cardDate={cardDate}
            cardOwnerName={cardOwnerName}
            cardCompany={cardCompany}
          />
        </Style.TopSection>
        <Style.Form onSubmit={registerCard}>
          <Style.Input
            type={TYPE.TEXT}
            placeholder={PLACE_HOLDER.CARD_NAME_HINT}
            ref={nameInputRef}
            onChange={changeCardName}
          />
          <Style.SubmitLayout>
            <InputGuide warningText={warningText} />
            <Style.SubmitButton
              type={TYPE.SUBMIT}
              value={"확인"}
            ></Style.SubmitButton>
          </Style.SubmitLayout>
        </Style.Form>
      </Style.Page>
    </>
  );
}

export default CardNamePage;
