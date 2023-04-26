import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./CardDetailFormStyled";

import CardNumberInput from "./CardNumberInput/CardNumberInput";
import CardDateInput from "./CardDateInput/CardDateInput";
import CardOwnerNameInput from "./CardOwnerNameInput/CardOwnerNameInput";
import CardCVCInput from "./CardCVCInput/CardCVCInput";
import CardPasswordInput from "./CardPasswordInput/CardPasswordInput";
import InputGuide from "../../common/InputGuide/InputGuide";

import useWarningText from "../../../hooks/useWarningText";
import { TYPE, NAVIGATE } from "../../../abstract/constants";
import { CardDetailContext } from "../../../context/CardDetailContext";
import CardDetailView from "../../CardDetailView/CardDetailView";
import { CreditCard } from "../../../types/card";

interface CardDetailFormProps {
  addCreditCard: (card: CreditCard) => void;
}

function CardDetailForm({ addCreditCard }: CardDetailFormProps) {
  const navigate = useNavigate();
  const { warningText, isRightForm } = useWarningText();
  const {
    cardNumberOrigin,
    cardNumberHidden,
    cardDate,
    cardOwnerName,
    cardCVC,
    cardPassword,
  } = useContext(CardDetailContext);

  const submitCreditCard = (e: React.FormEvent<HTMLFormElement>) => {
    const newCard: CreditCard = {
      cardNumberOrigin,
      cardNumberHidden,
      cardDate,
      cardOwnerName,
      cardCVC,
      cardPassword,
    };

    e.preventDefault();
    navigate(NAVIGATE.HOME);
    addCreditCard(newCard);
  };

  const handelChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isError = isRightForm(
      cardNumberHidden,
      cardDate,
      cardCVC,
      cardPassword
    );

    if (!isError) {
      submitCreditCard(e);
    }

    return;
  };

  return (
    <>
      <CardDetailView
        cardNumberHidden={cardNumberHidden}
        cardDate={cardDate}
        cardOwnerName={cardOwnerName}
      />
      <Style.Form onSubmit={handelChange}>
        <CardNumberInput />
        <CardDateInput />
        <CardOwnerNameInput />
        <CardCVCInput />
        <CardPasswordInput />
        <Style.SubmitLayout>
          <InputGuide warningText={warningText} />
          <Style.SubmitButton type={TYPE.SUBMIT} value={"다음"} />
        </Style.SubmitLayout>
      </Style.Form>
    </>
  );
}

export default CardDetailForm;
