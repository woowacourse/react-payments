import { useEffect } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { CardNumberErrorContext, FormRenderOrderContext } from "../../routes/Payments/FormContextProvider";

import CardNumberInput from "../FormInput/CardNumberInput";
import FormFieldComponent from "./FormFieldComponent";
import { CardNumbersContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardNumberInputsContext } from "../Form/FormRefContextProvider";

import { isNumberValid } from "../Form/useIsValid";

const CardNumberField = () => {
  const cardNumberError = useContextWrapper(CardNumberErrorContext)[0];
  const cardNumberErrorKeys = Object.keys(cardNumberError) as (keyof CardNumbersError)[];
  const categoryHasError = cardNumberErrorKeys.find((category) => {
    return cardNumberError[category]?.errorMessage;
  });

  const cardNumbers = useContextWrapper(CardNumbersContext)[0];
  const setRenderOrder = useContextWrapper(FormRenderOrderContext)[1];
  const firstInput = useContextWrapper(CardNumberInputsContext)[0];

  useEffect(() => {
    if (isNumberValid(cardNumbers, cardNumberError)) {
      setRenderOrder((prev) => {
        if (prev.index < 1) {
          return { index: 1, step: "cardIssuer" };
        }
        return prev;
      });
    }
  }, [cardNumbers, setRenderOrder]);

  useEffect(() => {
    firstInput.current?.focus();
  }, [firstInput]);

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "결제할 카드 번호를 입력해 주세요",
        description: "본인 명의의 카드만 결제 가능합니다.",
        label: "카드 번호",
      }}
      errorMessage={categoryHasError ? cardNumberError[categoryHasError]?.errorMessage : undefined}
    >
      <CardNumberInput />
    </FormFieldComponent>
  );
};

export default CardNumberField;
