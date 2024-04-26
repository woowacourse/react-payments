import { useEffect } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { FormRenderOrderContext } from "../../routes/Payments";
import { CardOwnerInfoContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardOwnerInfoErrorContext } from "../Form/FormContextProvider";

import CardOwnerInput from "../FormInput/CardOwnerInput";
import FormFieldComponent from "./FormFieldComponent";
import { CardOwnerInputContext } from "../Form/FormRefContextProvider";

const CardOwnerField = () => {
  const cardOwnerError = useContextWrapper(CardOwnerInfoErrorContext)[0];
  const cardOwnerErrorKeys = Object.keys(cardOwnerError) as (keyof CardOwnerInfoError)[];
  const categoryHasError = cardOwnerErrorKeys.find((category) => {
    return cardOwnerError[category]?.errorMessage;
  });

  const cardOwner = useContextWrapper(CardOwnerInfoContext)[0];
  const cardOwnerInput = useContextWrapper(CardOwnerInputContext)[0];
  const setRenderOrder = useContextWrapper(FormRenderOrderContext)[1];

  const ENTER_KEY_CODE = 13;
  useEffect(() => {
    cardOwnerInput.current?.addEventListener("keydown", (e) => {
      if (e.keyCode === ENTER_KEY_CODE && cardOwner.name) {
        setRenderOrder((prev) => {
          if (prev.index === 3) {
            return { index: 4, step: "cardCVC" };
          }
          return prev;
        });
      }
    });
  }, [cardOwner, cardOwnerInput, setRenderOrder]);

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "카드 소유자 이름을 입력해 주세요",
        description: "",
        label: "소유자 이름",
      }}
      errorMessage={categoryHasError ? cardOwnerError[categoryHasError]?.errorMessage : undefined}
    >
      <CardOwnerInput />
    </FormFieldComponent>
  );
};

export default CardOwnerField;
