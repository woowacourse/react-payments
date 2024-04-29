/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { CardIssuerContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardIssuerErrorContext } from "../../routes/Payments/FormContextProvider";

import CardIssuerInput from "../FormInput/CardIssuerInput";
import FormFieldComponent from "./FormFieldComponent";
import { isIssuerValid } from "../Form/useIsValid";
import useRenderOrderState from "../../hooks/useRenderOrderState";

const CardIssuerField = () => {
  const cardIssuerError = useContextWrapper(CardIssuerErrorContext)[0];
  const cardIssuer = useContextWrapper(CardIssuerContext)[0];
  const [renderOrder, setRenderOrder] = useRenderOrderState();

  useEffect(() => {
    if (isIssuerValid(cardIssuer, cardIssuerError) && renderOrder.step === "cardIssuer") {
      setRenderOrder.next();
    }
  }, [cardIssuer, renderOrder, setRenderOrder, cardIssuerError]);

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "카드사를 선택해주세요.",
        description: "현재 국내 카드사만 가능합니다.",
        label: "",
      }}
      errorMessage={undefined}
    >
      <CardIssuerInput />
    </FormFieldComponent>
  );
};

export default CardIssuerField;
