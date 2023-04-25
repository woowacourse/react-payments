import React from "react";

import CardNumberInput from "./CardNumberInput/CardNumberInput";
import CardDateInput from "./CardDateInput/CardDateInput";
import CardOwnerNameInput from "./CardOwnerNameInput/CardOwnerNameInput";
import CardCVCInput from "./CardCVCInput/CardCVCInput";
import CardPasswordInput from "./CardPasswordInput/CardPasswordInput";

import Style from "./CardDetailFormStyled";
import useWarningText from "../../../hooks/useWarningText";
import InputGuide from "../../common/InputGuide/InputGuide";

interface CardDetailFormProps {
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

  submitCreditCard: (e: React.FormEvent<HTMLFormElement>) => void;
}

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
  const { warningText, isRightForm } = useWarningText();
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
    <Style.Form onSubmit={handelChange}>
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
      <Style.SubmitLayout>
        <InputGuide warningText={warningText} />
        <Style.SubmitButton type="submit" value={"다음"} />
      </Style.SubmitLayout>
    </Style.Form>
  );
}

export default CardDetailForm;
