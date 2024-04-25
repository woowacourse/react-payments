import { memo } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { CardValidityPeriodContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardValidityPeriodErrorContext } from "../Form/ErrorContextProvider";

import FormInputCompound from "./FormInputCompound";

import { cardPeriodValidator } from "./validator";
import onInputChange from "./onInputChange";

const CardPeriodInput = memo(() => {
  const [cardPeriod, setData] = useContextWrapper(CardValidityPeriodContext);
  const [periodError, setError] = useContextWrapper(CardValidityPeriodErrorContext);

  type InputInfoList = { name: keyof CardValidityPeriod; placeholder: string };

  const InputInfoList: InputInfoList[] = [
    { name: "month", placeholder: "MM" },
    { name: "year", placeholder: "YY" },
  ];

  return (
    <>
      {InputInfoList.map(({ name, placeholder }, index) => (
        <FormInputCompound
          id={`id-period-${name}`}
          key={index}
          onInputChange={(e) =>
            onInputChange<CardValidityPeriod, CardValidityPeriodError>(e, {
              name,
              setData,
              setError,
              validator: cardPeriodValidator,
            })
          }
          isError={!!periodError[name]?.isError}
          sizePreset="medium"
          maxLength={2}
          name={name as keyof CardValidityPeriod}
          placeholder={placeholder}
          value={cardPeriod[name] ?? ""}
        />
      ))}
    </>
  );
});

export default CardPeriodInput;
