import { useEffect } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { CardPasswordErrorContext } from "../../routes/Payments/FormContextProvider";
import CardPasswordInput from "../FormInput/CardPasswordInput";

import FormFieldComponent from "./FormFieldComponent";
import { CardPasswordInputContext } from "../Form/FormRefContextProvider";
import { isPasswordValid } from "../Form/useIsValid";
import { CardPasswordContext } from "../../routes/Payments/CardInfoContextProvider";

const CardPasswordField = () => {
  const cardPasswordError = useContextWrapper(CardPasswordErrorContext)[0];
  const cardPasswordErrorKeys = Object.keys(cardPasswordError) as (keyof CardPasswordError)[];
  const categoryHasError = cardPasswordErrorKeys.find((category) => {
    return cardPasswordError[category]?.errorMessage;
  });

  const firstInput = useContextWrapper(CardPasswordInputContext)[0];
  const password = useContextWrapper(CardPasswordContext)[0];

  useEffect(() => {
    if (isPasswordValid(password, cardPasswordError)) firstInput.current?.focus();
  }, [firstInput, password, cardPasswordError]);

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
