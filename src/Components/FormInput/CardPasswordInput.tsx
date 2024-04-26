import { memo } from "react";

import useContextWrapper from "../../hooks/useContextWrapper";
import { CardPasswordContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardPasswordErrorContext } from "../Form/FormContextProvider";

import { cardPasswordValidator } from "./validator";
import onInputChange from "./onInputChange";
import FormInputCompound from "./FormInputCompound";
import { CardPasswordInputContext } from "../Form/FormRefContextProvider";

import { FormRenderOrderContext } from "../../routes/Payments";

interface InputInfoList {
  name: keyof CardPassword;
  placeholder: string;
}

const CardPasswordInput = memo(() => {
  const [cardPassword, setData] = useContextWrapper(CardPasswordContext);
  const [passwordError, setError] = useContextWrapper(CardPasswordErrorContext);
  const inputRef = useContextWrapper(CardPasswordInputContext)[0];
  const setRenderOrder = useContextWrapper(FormRenderOrderContext)[1];

  const InputInfoList: InputInfoList[] = [{ name: "value", placeholder: "12" }];

  return (
    <>
      {InputInfoList.map(({ name, placeholder }, index) => (
        <FormInputCompound
          id={`id-password-${name}`}
          key={index}
          onInputChange={(e) =>
            onInputChange<CardPassword, CardPasswordError>(e, {
              name,
              setData,
              setError,
              setRenderOrder,
              validator: cardPasswordValidator,
              isLastInput: true,
              step: 5,
            })
          }
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
