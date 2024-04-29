import { memo } from "react";

import useContextWrapper from "../../hooks/useContextWrapper";
import { CardPasswordContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardPasswordErrorContext } from "../../routes/Payments/FormContextProvider";

import { cardPasswordValidator } from "./validator/changeValidator";
import FormInputCompound from "./FormInputCompound";
import { CardPasswordInputContext } from "../Form/FormRefContextProvider";
import { cardPasswordBlurValidator } from "./validator/blurValidator";

interface InputInfoList {
  name: keyof CardPassword;
  placeholder: string;
}

const CardPasswordInput = memo(() => {
  const [cardPassword, setData] = useContextWrapper(CardPasswordContext);
  const [passwordError, setError] = useContextWrapper(CardPasswordErrorContext);
  const inputRef = useContextWrapper(CardPasswordInputContext)[0];

  const InputInfoList: InputInfoList[] = [{ name: "value", placeholder: "**" }];

  return (
    <>
      {InputInfoList.map(({ name, placeholder }, index) => (
        <FormInputCompound
          id={`id-password-${name}`}
          key={index}
          setData={setData}
          setError={setError}
          changeValidator={cardPasswordValidator}
          blurValidator={cardPasswordBlurValidator}
          isError={!!passwordError[name]?.isError}
          sizePreset="large"
          maxLength={2}
          name={name}
          value={cardPassword.value ?? ""}
          placeholder={placeholder}
          type="password"
          ref={inputRef}
        />
      ))}
    </>
  );
});

export default CardPasswordInput;
