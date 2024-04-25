import { memo } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { CardNumbersContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardNumberErrorContext } from "../Form/ErrorContextProvider";

import FormInputCompound from "./FormInputCompound";

import { cardNumbersValidator } from "./validator";
import onInputChange from "./onInputChange";

const CardNumberInput = memo(() => {
  const [cardNumbers, setData] = useContextWrapper(CardNumbersContext);
  const [cardNumberError, setError] = useContextWrapper(CardNumberErrorContext);

  type InputInfoList = { name: keyof CardNumbers };

  const InputInfoList: InputInfoList[] = [
    { name: "firstNumbers" },
    { name: "secondNumbers" },
    { name: "thirdNumbers" },
    { name: "fourthNumbers" },
  ];

  return (
    <>
      {InputInfoList.map(({ name }, index) => (
        <FormInputCompound<CardNumbers>
          id={`id-${name}`}
          key={index}
          onInputChange={(e) =>
            onInputChange<CardNumbers, CardNumbersError, string>(e, {
              name,
              setData,
              setError,
              validator: cardNumbersValidator,
            })
          }
          isError={!!cardNumberError[name]?.isError}
          sizePreset="small"
          placeholder="1234"
          maxLength={4}
          name={name}
          value={cardNumbers[name] ?? ""}
        />
      ))}
    </>
  );
});

export default CardNumberInput;
