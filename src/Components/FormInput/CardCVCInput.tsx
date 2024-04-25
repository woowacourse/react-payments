import { memo, useEffect } from "react";

import useContextWrapper from "../../hooks/useContextWrapper";
import { CardCVCContext, CardUIHeadOrTailContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardCVCErrorContext } from "../Form/FormContextProvider";
import { CardCVCInputContext } from "../Form/FormRefContextProvider";
import { cardCVCValidator } from "./validator";

import onInputChange from "./onInputChange";
import FormInputCompound from "./FormInputCompound";

type InputInfoList = { name: keyof CardCVC; placeholder: string };

const InputInfoList: InputInfoList[] = [{ name: "value", placeholder: "CVC" }];

const CardCVCInput = memo(() => {
  const [cardCVC, setData] = useContextWrapper(CardCVCContext);
  const [cardCVCError, setError] = useContextWrapper(CardCVCErrorContext);
  const setCardHeadOrTail = useContextWrapper(CardUIHeadOrTailContext)[1];
  const inputRef = useContextWrapper(CardCVCInputContext)[0];

  useEffect(() => {
    const focusInEvent = () => {
      setCardHeadOrTail((prev) => {
        const temp = { ...prev };
        temp.value = "tail";
        return temp;
      });
    };

    const focusOutEvent = () => {
      setCardHeadOrTail((prev) => {
        const temp = { ...prev };
        temp.value = "head";
        return temp;
      });
    };

    if (inputRef.current) {
      inputRef.current.addEventListener("focusin", focusInEvent);
      inputRef.current.addEventListener("focusout", focusOutEvent);

      return () => {
        inputRef.current?.removeEventListener("focusin", focusInEvent);
        inputRef.current?.removeEventListener("focusout", focusOutEvent);
      };
    }
  }, [setCardHeadOrTail]);

  return (
    <>
      {InputInfoList.map(({ name, placeholder }, index) => (
        <FormInputCompound
          id={`id-cvc-${name}`}
          key={index}
          onInputChange={(e) =>
            onInputChange<CardCVC, CardCVCError>(e, {
              name,
              setData,
              setError,
              validator: cardCVCValidator,
            })
          }
          isError={!!cardCVCError[name]?.isError}
          sizePreset="large"
          maxLength={3}
          name={name}
          value={cardCVC.value ?? ""}
          placeholder={placeholder}
          ref={inputRef}
        />
      ))}
    </>
  );
});

export default CardCVCInput;
