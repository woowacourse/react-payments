import { memo } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { CardValidityPeriodContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardValidityPeriodErrorContext } from "../Form/FormContextProvider";

import FormInputCompound from "./FormInputCompound";

import { cardPeriodValidator } from "./validator";
import onInputChange from "./onInputChange";
import { CardPeriodInputsContext } from "../Form/FormRefContextProvider";

interface InputInfo {
  name: keyof CardValidityPeriod;
  placeholder: string;
  ref: React.MutableRefObject<HTMLInputElement | null>;
  nextRef?: React.MutableRefObject<HTMLInputElement | null>;
}

const CardPeriodInput = memo(() => {
  const [cardPeriod, setData] = useContextWrapper(CardValidityPeriodContext);
  const [periodError, setError] = useContextWrapper(CardValidityPeriodErrorContext);
  const [firstRef, secondRef] = useContextWrapper(CardPeriodInputsContext);

  const InputInfoList: InputInfo[] = [
    { name: "month", placeholder: "MM", ref: firstRef, nextRef: secondRef },
    { name: "year", placeholder: "YY", ref: secondRef },
  ];

  return (
    <>
      {InputInfoList.map(({ name, placeholder, ref, nextRef }, index) => (
        <FormInputCompound
          id={`id-period-${name}`}
          key={index}
          onInputChange={(e) =>
            onInputChange<CardValidityPeriod, CardValidityPeriodError>(e, {
              name,
              setData,
              setError,
              validator: cardPeriodValidator,
              maxLength: 2,
              nextRef,
            })
          }
          isError={!!periodError[name]?.isError}
          sizePreset="medium"
          maxLength={2}
          name={name as keyof CardValidityPeriod}
          placeholder={placeholder}
          value={cardPeriod[name] ?? ""}
          nextRef={nextRef}
          ref={ref}
        />
      ))}
    </>
  );
});

export default CardPeriodInput;
