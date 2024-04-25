import useContextWrapper from "../../hooks/useContextWrapper";
import { CardOwnerInfoErrorContext } from "../Form/ErrorContextProvider";
import CardCVCInput from "../FormInput/CardCVCInput";

import FormFieldComponent from "./FormFieldComponent";

const CardCVCField = () => {
  //   const cardOwnerError = useContextWrapper(CardOwnerInfoErrorContext)[0];
  //   const cardOwnerErrorKeys = Object.keys(cardOwnerError) as (keyof CardOwnerInfoError)[];
  //   const categoryHasError = cardOwnerErrorKeys.find((category) => {
  //     return cardOwnerError[category]?.errorMessage;
  //   });

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "CVC 번호를 입력해 주세요",
        description: "",
        label: "CVC",
      }}
      errorMessage={undefined}
    >
      <CardCVCInput />
    </FormFieldComponent>
  );
};

export default CardCVCField;
