import React, { useState, useEffect } from "react";

import CardNumberInput from "./CardNumberInput";
import CardDateInput from "./CardDateInput";
import CardOwnerNameInput from "./CardOwnerNameInput";
import CardCVCInput from "./CardCVCInput";
import CardPasswordInput from "./CardPasswordInput";

import St from "./styled";

type CardDetailFormProps = {
  changeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  CardNumberHidden: string;
};

function CardDetailForm({
  changeCardNumber,
  CardNumberHidden,
}: CardDetailFormProps) {
  return (
    <St.Form>
      <CardNumberInput
        changeCardNumber={changeCardNumber}
        CardNumberHidden={CardNumberHidden}
      />
      <CardDateInput />
      <CardOwnerNameInput />
      <CardCVCInput />
      <CardPasswordInput />
      <St.SubmitButton type="submit" value={"다음"} />
    </St.Form>
  );
}

export default CardDetailForm;
