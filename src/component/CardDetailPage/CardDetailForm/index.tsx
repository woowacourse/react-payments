import React, { useState, useEffect } from "react";

import CardNumberInput from "./CardNumberInput";
import CardDateInput from "./CardDateInput";
import CardOwnerNameInput from "./CardOwnerNameInput";
import CardCVCInput from "./CardCVCInput";
import CardPasswordInput from "./CardPasswordInput";

import St from "./styled";

type CardDetailFormProps = {
  changeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardNumberHidden: string;

  changeCardDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardDate: string;
};

function CardDetailForm({
  changeCardNumber,
  cardNumberHidden,
  changeCardDate,
  cardDate,
}: CardDetailFormProps) {
  return (
    <St.Form>
      <CardNumberInput
        changeCardNumber={changeCardNumber}
        cardNumberHidden={cardNumberHidden}
      />
      <CardDateInput changeCardDate={changeCardDate} cardDate={cardDate} />
      <CardOwnerNameInput />
      <CardCVCInput />
      <CardPasswordInput />
      <St.SubmitButton type="submit" value={"다음"} />
    </St.Form>
  );
}

export default CardDetailForm;
