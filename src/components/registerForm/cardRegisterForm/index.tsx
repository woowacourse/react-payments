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

const objectValueToString = (obj: { [key: string]: string }) => {
  return Object.values(obj).reduce((acc, cur) => acc + cur, "");
};

function CardRegisterForm() {
  const navigation = useNavigate();
  const [cardInput] = useContext(cardInfoContext);
  const [nextShow, setNextShow] = useState(false);
  const { saveCard } = useCardList({ key: "card-list" });

  useEffect(() => {
    const { cardNumbers, expireDate, securityCode, password, ownerName } =
      cardInput;
    try {
      const exceptOwnerName =
        objectValueToString(cardNumbers).length !== 16 ||
        expireDate.length !== 5 ||
        securityCode.length !== 3 ||
        objectValueToString(password).length !== 2;

      if ((ownerName.length > 0 && ownerName.length < 3) || exceptOwnerName) {
        throw new Error();
      }
      setNextShow(true);
    } catch {
      setNextShow(false);
    }
  }, [cardInput]);

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
      {nextShow && (
        <Styled.ButtonContainer>
          <Styled.NextButton>다음</Styled.NextButton>
        </Styled.ButtonContainer>
      )}
    </Styled.Form>
  );
}

export default CardRegisterForm;
