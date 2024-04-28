/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { FormRenderOrderContext } from "../../routes/Payments";
import { CardValidityPeriodContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardValidityPeriodErrorContext } from "../../routes/Payments/FormContextProvider";

import CardPeriodInput from "../FormInput/CardPeriodInput";
import FormFieldComponent from "./FormFieldComponent";
import { CardPeriodInputsContext } from "../Form/FormRefContextProvider";
import { isPeriodValid } from "../Form/useIsValid";

const CardValidityPeriodField = () => {
  const [cardPeriodError, setCardPeriodError] = useContextWrapper(CardValidityPeriodErrorContext);
  const cardPeriodErrorKeys = Object.keys(cardPeriodError) as (keyof CardValidityPeriodError)[];
  const categoryHasError = cardPeriodErrorKeys.find((category) => {
    return cardPeriodError[category]?.errorMessage;
  });

  const cardPeriod = useContextWrapper(CardValidityPeriodContext)[0];
  const setRenderOrder = useContextWrapper(FormRenderOrderContext)[1];
  const firstInput = useContextWrapper(CardPeriodInputsContext)[0];

  useEffect(() => {
    const { isValid, name, errorMessage } = isPeriodValid(cardPeriod, cardPeriodError);
    if (isValid) {
      setRenderOrder((prev) => {
        if (prev.index === 2) {
          return { index: 3, step: "cardOwner" };
        }
        return prev;
      });
      setCardPeriodError((prev) => {
        const temp = { ...prev };
        temp.month.isError = false;
        temp.year.isError = false;
        temp.month.errorMessage = "";
        temp.year.errorMessage = "";
        return temp;
      });
    }
    if (!isValid && name && errorMessage) {
      setCardPeriodError((prev) => {
        const temp = { ...prev };
        temp[name].isError = true;
        temp[name].errorMessage = errorMessage;
        return temp;
      });
    }
  }, [cardPeriod, setRenderOrder, cardPeriodError, setCardPeriodError]);

  useEffect(() => {
    firstInput.current?.focus();
  }, [firstInput]);

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "카드 유효기간을 입력해 주세요",
        description: "월/년도(MM/YY)를 순서대로 입력해 주세요.",
        label: "유효기간",
      }}
      errorMessage={categoryHasError ? cardPeriodError[categoryHasError]?.errorMessage : undefined}
    >
      <CardPeriodInput />
    </FormFieldComponent>
  );
};

export default CardValidityPeriodField;
