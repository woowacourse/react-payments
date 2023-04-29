import React from "react";
import { useNavigate } from "react-router-dom";
import St from "./AddCardResultPageStyled";
import { CreditCard } from "../../types/card";
import { useCardDispatch, useCardState } from "../../hooks/useCard";
import CardDetailView from "../CardDetailView/CardDetailView";
import useCardAlias from "../../hooks/useCardAlias";

type AddCardResultPageProps = {
  addCreditCard: (card: CreditCard) => void;
};

function AddCardResultPage({ addCreditCard }: AddCardResultPageProps) {
  const navigate = useNavigate();

  const creditCard = useCardState();
  const dispatch = useCardDispatch();
  const { cardAlias, changeCardAlias } = useCardAlias();

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
          onChange={changeCardAlias}
        ></St.CardAlias>
        <St.SubmitButton type="submit" value={"확인"} />
      </St.CardAliasForm>
    </St.Page>
  );
}

export default AddCardResultPage;
