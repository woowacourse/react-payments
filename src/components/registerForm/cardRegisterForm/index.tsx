import React, { useEffect, useContext, useState } from "react";
import CardNumber from "src/components/registerForm/cardNumber";
import ExpireDate from "src/components/registerForm/expireDate";
import OwnerNameInput from "src/components/registerForm/ownerNameInput";
import SecurityCode from "src/components/registerForm/securityCode";
import CardPassword from "src/components/registerForm/cardPassword";
import { cardInfoContext } from "src/context/CardInfoContext";
import useCardList from "src/hooks/useCardList";
import { useNavigate } from "react-router-dom";
import { Styled } from "./CardRegisterForm.styles";
import { NUMBERS } from "src/utils/constant";
import { objectValueToString } from "src/utils";

function CardRegisterForm() {
  const {
    MAX_CARD,
    MAX_EXPIREDATE,
    MAX_SECURITY,
    MAX_PASSWORD,
    MIN_OWNER_NAME,
  } = NUMBERS;
  const navigation = useNavigate();
  const [cardInput] = useContext(cardInfoContext);
  const { saveCard } = useCardList({ key: "card-list" });

  const { cardNumbers, expireDate, securityCode, password, ownerName } =
    cardInput;

  const exceptOwnerName =
    objectValueToString(cardNumbers).length !== MAX_CARD ||
    expireDate.length !== MAX_EXPIREDATE ||
    securityCode.length !== MAX_SECURITY ||
    objectValueToString(password).length !== MAX_PASSWORD;

  const isCardComplete =
    (ownerName.length > 0 && ownerName.length < MIN_OWNER_NAME) ||
    exceptOwnerName;

  const cardInputSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    saveCard(cardInput);
    navigation("/card-list");
  };

  return (
    <Styled.Form onSubmit={cardInputSubmit}>
      <CardNumber />
      <ExpireDate />
      <OwnerNameInput />
      <SecurityCode />
      <CardPassword />
      {!isCardComplete && (
        <Styled.ButtonContainer>
          <Styled.NextButton>다음</Styled.NextButton>
        </Styled.ButtonContainer>
      )}
    </Styled.Form>
  );
}

export default CardRegisterForm;
