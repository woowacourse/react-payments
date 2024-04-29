import { useEffect } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { CardOwnerInfoContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardOwnerInfoErrorContext } from "../../routes/Payments/FormContextProvider";

import CardOwnerInput from "../FormInput/CardOwnerInput";
import FormFieldComponent from "./FormFieldComponent";
import { CardCVCInputContext, CardOwnerInputContext } from "../Form/FormRefContextProvider";

import useRenderOrderState from "../../hooks/useRenderOrderState";
import { isOwnerValid } from "../../domainUtils";

const CardOwnerField = () => {
  const cardOwnerError = useContextWrapper(CardOwnerInfoErrorContext)[0];
  const cardOwnerErrorKeys = Object.keys(cardOwnerError) as (keyof CardOwnerInfoError)[];
  const categoryHasError = cardOwnerErrorKeys.find((category) => {
    return cardOwnerError[category]?.errorMessage;
  });

  const cardOwner = useContextWrapper(CardOwnerInfoContext)[0];
  const cardOwnerInput = useContextWrapper(CardOwnerInputContext)[0];
  const setRenderOrder = useRenderOrderState()[1];

  const firstInput = useContextWrapper(CardOwnerInputContext)[0];
  const nextFieldInput = useContextWrapper(CardCVCInputContext)[0];

  const ENTER_KEY_CODE = "Enter";
  useEffect(() => {
    const keydownEvent = (e: KeyboardEvent) => {
      const NAME_MAX_LENGTH = 14;
      if (
        isOwnerValid(cardOwner, cardOwnerError) &&
        (e.key === ENTER_KEY_CODE || cardOwner.name?.length === NAME_MAX_LENGTH)
      ) {
        setRenderOrder.next("cardOwner");
        nextFieldInput.current?.focus();
      }
    };
    cardOwnerInput.current?.addEventListener("keydown", keydownEvent);
    return () => {
      cardOwnerInput.current?.removeEventListener("keydown", keydownEvent);
    };
  }, [cardOwner, cardOwnerInput, setRenderOrder, nextFieldInput, cardOwnerError]);

  useEffect(() => {
    firstInput.current?.focus();
  }, [firstInput]);

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
