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
import { Card } from "../../../types/card";

interface CardDetailFormProps {
  setLastCard: (card: Card) => void;
  openModal: () => void;
}

function CardDetailForm({ setLastCard, openModal }: CardDetailFormProps) {
  const navigate = useNavigate();
  const { warningText, isWrongForm } = useWarningText();
  const {
    cardNumberOrigin,
    cardNumberHidden,
    cardDate,
    cardOwnerName,
    cardCVC,
    cardPassword,
    cardCompany,
  } = useContext(CardDetailContext);

  const submitCreditCard = () => {
    const newCard: Card = {
      cardNumberOrigin,
      cardNumberHidden,
      cardDate,
      cardOwnerName,
      cardCVC,
      cardPassword,
      cardCompany,
    };

    setLastCard(newCard);

    navigate(NAVIGATE.ADD_CARD_NAME);
  };

  const handelChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isError = isWrongForm(
      cardNumberHidden,
      cardDate,
      cardCVC,
      cardPassword
    );

    if (!isError) {
      submitCreditCard();
    }

    return;
  };

  return (
    <>
      <Style.CardViewSection onClick={openModal}>
        <CardDetailView
          cardNumberHidden={cardNumberHidden}
          cardDate={cardDate}
          cardOwnerName={cardOwnerName}
          cardCompany={cardCompany}
        />
      </Style.CardViewSection>
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
