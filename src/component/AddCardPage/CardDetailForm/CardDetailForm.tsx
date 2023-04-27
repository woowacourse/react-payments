import React from "react";

import CardNumberInput from "./CardNumberInput/CardNumberInput";
import CardDateInput from "./CardDateInput/CardDateInput";
import CardOwnerNameInput from "./CardOwnerNameInput/CardOwnerNameInput";
import CardCVCInput from "./CardCVCInput/CardCVCInput";
import CardPasswordInput from "./CardPasswordInput/CardPasswordInput";

import St from "./CardDetailFormStyled";

type CardDetailFormProps = {
  submitCreditCard: (e: React.FormEvent<HTMLFormElement>) => void;
};

function CardDetailForm({submitCreditCard}: CardDetailFormProps) {
  return (
    <St.Form onSubmit={submitCreditCard}>
      <CardNumberInput />
      <CardDateInput />
      <CardOwnerNameInput />
      <CardCVCInput />
      <CardPasswordInput />
      <St.SubmitButton type="submit" value={"다음"} />
    </St.Form>
  );
}

export default CardDetailForm;
