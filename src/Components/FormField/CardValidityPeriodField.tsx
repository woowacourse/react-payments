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
  const cardPeriodError = useContextWrapper(CardValidityPeriodErrorContext)[0];
  const cardPeriodErrorKeys = Object.keys(cardPeriodError) as (keyof CardValidityPeriodError)[];
  const categoryHasError = cardPeriodErrorKeys.find((category) => {
    return cardPeriodError[category]?.errorMessage;
  });

  const cardPeriod = useContextWrapper(CardValidityPeriodContext)[0];
  const setRenderOrder = useContextWrapper(FormRenderOrderContext)[1];
  const firstInput = useContextWrapper(CardPeriodInputsContext)[0];

  useEffect(() => {
    if (isPeriodValid(cardPeriod, cardPeriodError)) {
      setRenderOrder((prev) => {
        if (prev.index === 2) {
          return { index: 3, step: "cardOwner" };
        }
        return prev;
      });
    }
  }, [cardPeriod, setRenderOrder, cardPeriodError]);

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
