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

  changeCardOwnerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardOwnerName: string;

  changeCardCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardCVC: string;
};

function CardDetailForm({
  changeCardNumber,
  cardNumberHidden,
  changeCardDate,
  cardDate,
  changeCardOwnerName,
  cardOwnerName,
  changeCardCVC,
  cardCVC,
}: CardDetailFormProps) {
  return (
    <St.Form>
      <CardNumberInput
        changeCardNumber={changeCardNumber}
        cardNumberHidden={cardNumberHidden}
      />
      <CardDateInput changeCardDate={changeCardDate} cardDate={cardDate} />
      <CardOwnerNameInput
        changeCardOwnerName={changeCardOwnerName}
        cardOwnerName={cardOwnerName}
      />
      <CardCVCInput changeCardCVC={changeCardCVC} cardCVC={cardCVC} />
      <CardPasswordInput />
      <St.SubmitButton type="submit" value={"다음"} />
    </St.Form>
  );
}

export default CardDetailForm;
