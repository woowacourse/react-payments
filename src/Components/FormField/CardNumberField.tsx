import useContextWrapper from "../../hooks/useContextWrapper";
import { CardNumberErrorContext } from "../Form/ErrorContextProvider";

import CardNumberInput from "../FormInput/CardNumberInput";
import FormFieldComponent from "./FormFieldComponent";

const CardNumberField = () => {
  const cardNumberError = useContextWrapper(CardNumberErrorContext)[0];
  const cardNumberErrorKeys = Object.keys(cardNumberError) as (keyof CardNumbersError)[];
  const categoryHasError = cardNumberErrorKeys.find((category) => {
    return cardNumberError[category]?.errorMessage;
  });

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "결제할 카드 번호를 입력해 주세요",
        description: "본인 명의의 카드만 결제 가능합니다.",
        label: "카드 번호",
      }}
      errorMessage={categoryHasError ? cardNumberError[categoryHasError]?.errorMessage : undefined}
    >
      <CardNumberInput />
    </FormFieldComponent>
  );
};

export default CardNumberField;
