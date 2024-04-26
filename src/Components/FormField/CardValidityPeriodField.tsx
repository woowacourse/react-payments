import { useEffect } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { FormRenderOrderContext } from "../../routes/Payments";
import { CardValidityPeriodContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardValidityPeriodErrorContext } from "../Form/FormContextProvider";

import CardPeriodInput from "../FormInput/CardPeriodInput";
import FormFieldComponent from "./FormFieldComponent";

const CardValidityPeriodField = () => {
  const cardPeriodError = useContextWrapper(CardValidityPeriodErrorContext)[0];
  const cardPeriodErrorKeys = Object.keys(cardPeriodError) as (keyof CardValidityPeriodError)[];
  const categoryHasError = cardPeriodErrorKeys.find((category) => {
    return cardPeriodError[category]?.errorMessage;
  });

  const cardPeriod = useContextWrapper(CardValidityPeriodContext)[0];
  const setRenderOrder = useContextWrapper(FormRenderOrderContext)[1];

  useEffect(() => {
    if (cardPeriod.month?.length === 2 && cardPeriod.year?.length === 2) {
      setRenderOrder((prev) => {
        if (prev.index === 2) {
          return { index: 3, step: "cardOwner" };
        }
        return prev;
      });
    }
  }, [cardPeriod, setRenderOrder]);

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
