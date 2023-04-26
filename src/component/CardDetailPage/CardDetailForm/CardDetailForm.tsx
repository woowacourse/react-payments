import React from "react";
import Style from "./CardDetailFormStyled";

import CardNumberInput, {
  CardNumberInputProps,
} from "./CardNumberInput/CardNumberInput";
import CardDateInput, {
  CardDateInputProps,
} from "./CardDateInput/CardDateInput";
import CardOwnerNameInput, {
  CardOwnerNameInputProps,
} from "./CardOwnerNameInput/CardOwnerNameInput";
import CardCVCInput, { CardCVCInputProps } from "./CardCVCInput/CardCVCInput";
import CardPasswordInput, {
  CardPasswordInputProps,
} from "./CardPasswordInput/CardPasswordInput";
import InputGuide from "../../common/InputGuide/InputGuide";

import useWarningText from "../../../hooks/useWarningText";
import { TYPE } from "../../../abstract/constants";

interface CardDetailFormProps
  extends CardNumberInputProps,
    CardDateInputProps,
    CardOwnerNameInputProps,
    CardCVCInputProps,
    CardPasswordInputProps {
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
        <Style.SubmitButton type={TYPE.SUBMIT} value={"다음"} />
      </Style.SubmitLayout>
    </Style.Form>
  );
}

export default CardDetailForm;
