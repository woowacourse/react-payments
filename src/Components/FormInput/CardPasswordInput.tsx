import { memo } from "react";

import useContextWrapper from "../../hooks/useContextWrapper";
import { CardPasswordContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardPasswordErrorContext } from "../Form/FormContextProvider";

import { cardPasswordValidator } from "./validator";
import onInputChange from "./onInputChange";
import FormInputCompound from "./FormInputCompound";

const CardPasswordInput = memo(() => {
  const [cardPassword, setData] = useContextWrapper(CardPasswordContext);
  const [passwordError, setError] = useContextWrapper(CardPasswordErrorContext);

  type InputInfoList = { name: keyof CardPassword; placeholder: string };

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
              validator: cardPasswordValidator,
            })
          }
          isError={!!passwordError[name]?.isError}
          sizePreset="large"
          maxLength={2}
          name={name}
          value={cardPassword.value ?? ""}
          placeholder={placeholder}
          type="password"
        />
      ))}
    </>
  );
});

export default CardPasswordInput;
