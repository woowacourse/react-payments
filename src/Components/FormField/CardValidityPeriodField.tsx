import useContextWrapper from "../../hooks/useContextWrapper";
import { CardValidityPeriodErrorContext } from "../Form/ErrorContextProvider";

import CardPeriodInput from "../FormInput/CardPeriodInput";
import FormFieldComponent from "./FormFieldComponent";

const CardValidityPeriodField = () => {
  const cardPeriodError = useContextWrapper(CardValidityPeriodErrorContext)[0];
  const cardPeriodErrorKeys = Object.keys(cardPeriodError) as (keyof CardValidityPeriodError)[];
  const categoryHasError = cardPeriodErrorKeys.find((category) => {
    return cardPeriodError[category]?.errorMessage;
  });

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
