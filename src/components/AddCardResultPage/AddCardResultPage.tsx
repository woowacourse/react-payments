import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import St from "./AddCardResultPageStyled";
import { CreditCard } from "types/card";
import { useCardState, useCardDispatch } from "contexts/CardContext";
import CardDetailView from "../CardDetailView/CardDetailView";
import CardAliasInput from "./CardAliasInput/CardAliasInput";

type AddCardResultPageProps = {
  addCreditCard: (card: CreditCard) => void;
};

function AddCardResultPage({ addCreditCard }: AddCardResultPageProps) {
  const navigate = useNavigate();

  const creditCard = useCardState();
  const dispatch = useCardDispatch();

  useEffect(() => {
    if (creditCard.isValid) return;

    navigate("/", { replace: true });

    alert("유효하지 않은 접근입니다.");
  }, []);

  const submitCreditCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("../loading", { replace: true });

    addCreditCard(creditCard);
    dispatch({ type: "RESET" });
  };

  return (
    <St.Page>
      <St.Title>카드 별칭을 입력해주세요.</St.Title>
      <CardDetailView creditcard={creditCard} />
      <St.CardAliasForm onSubmit={submitCreditCard}>
        <CardAliasInput />
        <St.SubmitButton type="submit" value={"확인"} />
      </St.CardAliasForm>
    </St.Page>
  );
}

export default AddCardResultPage;
