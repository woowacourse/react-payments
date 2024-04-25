import { memo } from "react";

import useContextWrapper from "../../hooks/useContextWrapper";
import { CardCVCContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardCVCErrorContext } from "../Form/ErrorContextProvider";

import { cardCVCValidator } from "./validator";
import onInputChange from "./onInputChange";
import FormInputCompound from "./FormInputCompound";

const CardCVCInput = memo(() => {
  const [cardCVC, setData] = useContextWrapper(CardCVCContext);
  const [cvcError, setError] = useContextWrapper(CardCVCErrorContext);

  type InputInfoList = { name: keyof CardCVC; placeholder: string };

  const InputInfoList: InputInfoList[] = [{ name: "value", placeholder: "CVC" }];

  return (
    <>
      {InputInfoList.map(({ name, placeholder }, index) => (
        <FormInputCompound
          id={`id-owner-${name}`}
          key={index}
          onInputChange={(e) =>
            onInputChange<CardCVC, CardCVCError>(e, {
              name,
              setData,
              setError,
              validator: cardCVCValidator,
            })
          }
          isError={!!cvcError[name]?.isError}
          sizePreset="large"
          maxLength={3}
          name={name}
          value={cardCVC.value ?? ""}
          placeholder={placeholder}
        />
      ))}
    </>
  );
});

export default CardCVCInput;
