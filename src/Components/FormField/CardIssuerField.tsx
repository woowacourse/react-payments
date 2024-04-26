/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import useContextWrapper from "../../hooks/useContextWrapper";
import { FormRenderOrderContext } from "../../routes/Payments";
import { CardIssuerContext } from "../../routes/Payments/CardInfoContextProvider";

import CardIssuerInput from "../FormInput/CardIssuerInput";
import FormFieldComponent from "./FormFieldComponent";

const CardIssuerField = () => {
  // const cardNumberError = useContextWrapper(CardNumberErrorContext)[0];
  // const cardNumberErrorKeys = Object.keys(cardNumberError) as (keyof CardNumbersError)[];
  // const categoryHasError = cardNumberErrorKeys.find((category) => {
  //   return cardNumberError[category]?.errorMessage;
  // });
  const cardIssuer = useContextWrapper(CardIssuerContext)[0];
  const setRenderOrder = useContextWrapper(FormRenderOrderContext)[1];

  useEffect(() => {
    if (cardIssuer.name) {
      setRenderOrder((prev) => {
        if (prev.index === 1) {
          return { index: 2, step: "cardPeriod" };
        }
        return prev;
      });
    }
  }, [cardIssuer, setRenderOrder]);

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
