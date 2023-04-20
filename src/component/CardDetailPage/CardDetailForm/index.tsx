import React from "react";

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

  changeCardPassword: (e: React.FormEvent<HTMLInputElement>) => void;
  cardPassword: [string, string];

  submitCreditCard: () => void;
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
  changeCardPassword,
  cardPassword,
  submitCreditCard,
}: CardDetailFormProps) {
  return (
    <St.Form onSubmit={submitCreditCard}>
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
      <CardPasswordInput
        changeCardPassword={changeCardPassword}
        cardPassword={cardPassword}
      />
      <St.SubmitButton type="submit" value={"다음"} />
    </St.Form>
  );
}

export default CardDetailForm;
