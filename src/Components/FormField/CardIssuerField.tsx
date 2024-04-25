import useContextWrapper from "../../hooks/useContextWrapper";
import { CardNumberErrorContext } from "../Form/ErrorContextProvider";

import CardIssuerInput from "../FormInput/CardIssuerInput";
import FormFieldComponent from "./FormFieldComponent";

const CardIssuerField = () => {
  const cardNumberError = useContextWrapper(CardNumberErrorContext)[0];
  const cardNumberErrorKeys = Object.keys(cardNumberError) as (keyof CardNumbersError)[];
  const categoryHasError = cardNumberErrorKeys.find((category) => {
    return cardNumberError[category]?.errorMessage;
  });

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "카드사를 선택해주세요.",
        description: "현재 국내 카드사만 가능합니다.",
        label: "",
      }}
      errorMessage={categoryHasError ? cardNumberError[categoryHasError]?.errorMessage : undefined}
    >
      <CardIssuerInput />
    </FormFieldComponent>
  );
};

export default CardIssuerField;
