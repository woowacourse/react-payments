import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import St from "./AddCardResultPageStyled";
import { CreditCard } from "../../types/card";
import { useCardState, useCardDispatch } from "../../contexts/CardContext";
import CardDetailView from "../CardDetailView/CardDetailView";
import useCardAlias from "../../hooks/card/useCardAlias";

type AddCardResultPageProps = {
  addCreditCard: (card: CreditCard) => void;
};

function AddCardResultPage({ addCreditCard }: AddCardResultPageProps) {
  const navigate = useNavigate();

  const creditCard = useCardState();
  const dispatch = useCardDispatch();

  const { cardAlias, changeCardAlias } = useCardAlias();

  useEffect(() => {
    !creditCard.isValid && navigate("/", { replace: true });
  }, []);

  const submitCreditCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addCreditCard(creditCard);
    dispatch({ type: "RESET" });
    navigate("/", { replace: true });
  };

  return (
    <St.Page>
      <St.Title>카드 별칭을 입력해주세요.</St.Title>
      <CardDetailView creditcard={creditCard} />
      <St.CardAliasForm onSubmit={submitCreditCard}>
        <St.CardAlias
          type="text"
          value={cardAlias || ""}
          maxLength={10}
          required
          placeholder="카드 별칭"
          onInvalid={(e) => {
            e.currentTarget.setCustomValidity("별칭을 입력해주세요.");
          }}
          onChange={(e) => {
            !e.currentTarget.validity.tooShort &&
              e.currentTarget.setCustomValidity("");

            changeCardAlias(e);
          }}
        ></St.CardAlias>
        <St.SubmitButton type="submit" value={"확인"} />
      </St.CardAliasForm>
    </St.Page>
  );
}

export default AddCardResultPage;
