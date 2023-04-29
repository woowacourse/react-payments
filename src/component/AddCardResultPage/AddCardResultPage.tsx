import React from "react";
import { useNavigate } from "react-router-dom";
import St from "./AddCardResultPageStyled";
import { CreditCard } from "../../types/card";
import { useCardDispatch, useCardState } from "../../hooks/useCard";
import CardDetailView from "../CardDetailView/CardDetailView";

type AddCardResultPageProps = {
  addCreditCard: (card: CreditCard) => void;
};

function AddCardResultPage({ addCreditCard }: AddCardResultPageProps) {
  const navigate = useNavigate();

  const creditCard = useCardState();
  const dispatch = useCardDispatch();

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
          maxLength={10}
          required
          placeholder="카드 별칭"
        ></St.CardAlias>
        <St.SubmitButton type="submit" value={"확인"} />
      </St.CardAliasForm>
    </St.Page>
  );
}

export default AddCardResultPage;
