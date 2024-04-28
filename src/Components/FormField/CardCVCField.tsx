import { useEffect } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { CardCVCContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardCVCErrorContext, FormRenderOrderContext } from "../../routes/Payments/FormContextProvider";
import CardCVCInput from "../FormInput/CardCVCInput";

import FormFieldComponent from "./FormFieldComponent";
import { CardCVCInputContext } from "../Form/FormRefContextProvider";
import { isCVCValid } from "../Form/useIsValid";

const CardCVCField = () => {
  const cardCVCError = useContextWrapper(CardCVCErrorContext)[0];
  const cardCVCErrorKeys = Object.keys(cardCVCError) as (keyof CardCVCError)[];
  const categoryHasError = cardCVCErrorKeys.find((category) => {
    return cardCVCError[category]?.errorMessage;
  });

  const cardCVC = useContextWrapper(CardCVCContext)[0];
  const setRenderOrder = useContextWrapper(FormRenderOrderContext)[1];

  const firstInput = useContextWrapper(CardCVCInputContext)[0];

  useEffect(() => {
    if (isCVCValid(cardCVC, cardCVCError)) {
      setRenderOrder((prev) => {
        if (prev.index === 4) {
          return { index: 5, step: "cardPassword" };
        }
        return prev;
      });
    }
  }, [cardCVC, setRenderOrder, cardCVCError]);

  useEffect(() => {
    firstInput.current?.focus();
  }, [firstInput]);

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "CVC 번호를 입력해 주세요",
        description: "",
        label: "CVC",
      }}
      errorMessage={categoryHasError ? cardCVCError[categoryHasError].errorMessage : undefined}
    >
      <CardCVCInput />
    </FormFieldComponent>
  );
};

export default CardCVCField;
