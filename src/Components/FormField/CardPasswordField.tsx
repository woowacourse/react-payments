import useContextWrapper from "../../hooks/useContextWrapper";
import { CardOwnerInfoErrorContext } from "../Form/ErrorContextProvider";
import CardPasswordInput from "../FormInput/CardPasswordInput";

import FormFieldComponent from "./FormFieldComponent";

const CardPasswordField = () => {
  //   const cardOwnerError = useContextWrapper(CardOwnerInfoErrorContext)[0];
  //   const cardOwnerErrorKeys = Object.keys(cardOwnerError) as (keyof CardOwnerInfoError)[];
  //   const categoryHasError = cardOwnerErrorKeys.find((category) => {
  //     return cardOwnerError[category]?.errorMessage;
  //   });

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "비밀번호를 입력해 주세요",
        description: "앞의 2자리를 입력해주세요.",
        label: "비밀번호 앞 2자리",
      }}
      errorMessage={undefined}
    >
      <CardPasswordInput />
    </FormFieldComponent>
  );
};

export default CardPasswordField;
