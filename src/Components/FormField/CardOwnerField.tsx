import useContextWrapper from "../../hooks/useContextWrapper";
import { CardOwnerInfoErrorContext } from "../Form/ErrorContextProvider";

import CardOwnerInput from "../FormInput/CardOwnerInput";
import FormFieldComponent from "./FormFieldComponent";

const CardOwnerField = () => {
  const cardOwnerError = useContextWrapper(CardOwnerInfoErrorContext)[0];
  const cardOwnerErrorKeys = Object.keys(cardOwnerError) as (keyof CardOwnerInfoError)[];
  const categoryHasError = cardOwnerErrorKeys.find((category) => {
    return cardOwnerError[category]?.errorMessage;
  });

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "카드 유효기간을 입력해 주세요",
        description: "월/년도(MM/YY)를 순서대로 입력해 주세요.",
        label: "유효기간",
      }}
      errorMessage={categoryHasError ? cardOwnerError[categoryHasError]?.errorMessage : undefined}
    >
      <CardOwnerInput />
    </FormFieldComponent>
  );
};

export default CardOwnerField;
