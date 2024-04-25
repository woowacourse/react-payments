import useContextWrapper from "../../hooks/useContextWrapper";
import { CardPasswordErrorContext } from "../Form/ErrorContextProvider";
import CardPasswordInput from "../FormInput/CardPasswordInput";

import FormFieldComponent from "./FormFieldComponent";

const CardPasswordField = () => {
  const cardPasswordError = useContextWrapper(CardPasswordErrorContext)[0];
  const cardPasswordErrorKeys = Object.keys(cardPasswordError) as (keyof CardPasswordError)[];
  const categoryHasError = cardPasswordErrorKeys.find((category) => {
    return cardPasswordError[category]?.errorMessage;
  });

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "비밀번호를 입력해 주세요",
        description: "앞의 2자리를 입력해주세요.",
        label: "비밀번호 앞 2자리",
      }}
      errorMessage={categoryHasError ? cardPasswordError[categoryHasError].errorMessage : undefined}
    >
      <CardPasswordInput />
    </FormFieldComponent>
  );
};

export default CardPasswordField;
