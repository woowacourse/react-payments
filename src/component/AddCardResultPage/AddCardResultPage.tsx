import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import St from "./AddCardResultPageStyled";
import { CreditCard } from "../../types/card";
import { useCardDispatch, useCardState } from "../../hooks/card/useCard";
import CardDetailView from "../CardDetailView/CardDetailView";
import useCardAlias from "../../hooks/card/useCardAlias";
import { LocationState } from "../../types/reactRouter";

type AddCardResultPageProps = {
  addCreditCard: (card: CreditCard) => void;
};

function AddCardResultPage({ addCreditCard }: AddCardResultPageProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const creditCard = useCardState();
  const dispatch = useCardDispatch();

  const { cardAlias, changeCardAlias } = useCardAlias();

  useEffect(() => {
    const state = location.state as LocationState;

    if (!state || !state.isValid) navigate("/", { replace: true });
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
