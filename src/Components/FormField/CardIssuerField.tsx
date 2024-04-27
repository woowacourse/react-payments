/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { FormRenderOrderContext } from "../../routes/Payments";
import { CardIssuerContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardIssuerErrorContext } from "../../routes/Payments/FormContextProvider";

import CardIssuerInput from "../FormInput/CardIssuerInput";
import FormFieldComponent from "./FormFieldComponent";
import { isIssuerValid } from "../Form/useIsValid";

const CardIssuerField = () => {
  const cardIssuerError = useContextWrapper(CardIssuerErrorContext)[0];
  const cardIssuer = useContextWrapper(CardIssuerContext)[0];
  const setRenderOrder = useContextWrapper(FormRenderOrderContext)[1];

  useEffect(() => {
    if (isIssuerValid(cardIssuer, cardIssuerError)) {
      setRenderOrder((prev) => {
        if (prev.index === 1) {
          return { index: 2, step: "cardPeriod" };
        }
        return prev;
      });
    }
  }, [cardIssuer, setRenderOrder, cardIssuerError]);

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
