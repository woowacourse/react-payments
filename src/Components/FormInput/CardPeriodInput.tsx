import { memo } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { CardValidityPeriodContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardValidityPeriodErrorContext } from "../../routes/Payments/FormContextProvider";

import FormInputCompound from "./FormInputCompound";

import { cardPeriodValidator } from "./validator/changeValidator";
import { CardOwnerInputContext, CardPeriodInputsContext } from "../Form/FormRefContextProvider";
import { cardPeriodBlurValidator } from "./validator/blurValidator";

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
  const nextFieldRef = useContextWrapper(CardOwnerInputContext)[0];

  const InputInfoList: InputInfo[] = [
    { name: "month", placeholder: "MM", ref: firstRef, nextRef: secondRef },
    { name: "year", placeholder: "YY", ref: secondRef, nextRef: nextFieldRef },
  ];

  return (
    <>
      {InputInfoList.map(({ name, placeholder, ref, nextRef }, index) => (
        <FormInputCompound
          id={`id-period-${name}`}
          key={index}
          setData={setData}
          setError={setError}
          changeValidator={cardPeriodValidator}
          blurValidator={cardPeriodBlurValidator}
          isError={!!periodError[name]?.isError}
          sizePreset="medium"
          maxLength={2}
          name={name}
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
