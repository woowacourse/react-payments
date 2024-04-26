import { memo } from "react";

import useContextWrapper from "../../hooks/useContextWrapper";
import { CardNumbersContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardNumberErrorContext } from "../../routes/Payments/FormContextProvider";
import { CardNumberInputsContext } from "../Form/FormRefContextProvider";
import { cardNumbersValidator } from "./validator";

import FormInputCompound from "./FormInputCompound";
import onInputChange from "./onInputChange";

interface InputInfoList {
  name: keyof CardNumbers;
  ref: React.MutableRefObject<HTMLInputElement | null>;
  nextRef?: React.MutableRefObject<HTMLInputElement | null>;
}

const CardNumberInput = memo(() => {
  const [cardNumbers, setData] = useContextWrapper(CardNumbersContext);
  const [cardNumberError, setError] = useContextWrapper(CardNumberErrorContext);

  const [firstInputRef, secondInputRef, thirdInputRef, fourthInputRef] = useContextWrapper(CardNumberInputsContext);

  const InputInfoList: InputInfoList[] = [
    { name: "firstNumbers", ref: firstInputRef, nextRef: secondInputRef },
    { name: "secondNumbers", ref: secondInputRef, nextRef: thirdInputRef },
    { name: "thirdNumbers", ref: thirdInputRef, nextRef: fourthInputRef },
    { name: "fourthNumbers", ref: fourthInputRef },
  ];

  return (
    <>
      {InputInfoList.map(({ name, ref, nextRef }, index) => (
        <FormInputCompound
          id={`id-numbers-${name}`}
          key={index}
          onInputChange={(e) =>
            onInputChange<CardNumbers, CardNumbersError>(e, {
              name,
              setData,
              setError,
              validator: cardNumbersValidator,
              maxLength: 4,
              nextRef,
            })
          }
          isError={!!cardNumberError[name]?.isError}
          sizePreset="small"
          placeholder="1234"
          maxLength={4}
          name={name}
          value={cardNumbers[name] ?? ""}
          ref={ref}
          nextRef={nextRef}
        />
      ))}
    </>
  );
});

export default CardNumberInput;
