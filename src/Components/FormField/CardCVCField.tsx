import useContextWrapper from "../../hooks/useContextWrapper";
import { CardCVCErrorContext } from "../Form/ErrorContextProvider";
import CardCVCInput from "../FormInput/CardCVCInput";

import FormFieldComponent from "./FormFieldComponent";

const CardCVCField = () => {
  const cardCVCError = useContextWrapper(CardCVCErrorContext)[0];
  const cardCVCErrorKeys = Object.keys(cardCVCError) as (keyof CardCVCError)[];
  const categoryHasError = cardCVCErrorKeys.find((category) => {
    return cardCVCError[category]?.errorMessage;
  });

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "CVC 번호를 입력해 주세요",
        description: "",
        label: "CVC",
      }}
      errorMessage={categoryHasError ? cardCVCError[categoryHasError].errorMessage : undefined}
    >
      <CardCVCInput />
    </FormFieldComponent>
  );
};

export default CardCVCField;
