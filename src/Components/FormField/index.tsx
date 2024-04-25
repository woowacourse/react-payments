/** @jsxImportSource @emotion/react */
import { memo } from "react";
import Tooltip from "../Tooltip";

import { descriptionCss, rowStyle, titleCss } from "./style";
import {
  CardNumberErrorContext,
  CardOwnerInfoErrorContext,
  CardValidityPeriodErrorContext,
} from "../Form/ErrorContextProvider";

import useContextWrapper from "../../hooks/useContextWrapper";
import CardNumberInput from "../FormInput/CardNumberInput";
import CardPeriodInput from "../FormInput/CardPeriodInput";
import CardOwnerInput from "../FormInput/CardOwnerInput";

interface Props {
  formFieldInfo: {
    title: string;
    description: string;
    label: string;
  };
  errorMessage?: string;
  children: React.ReactNode;
}

/**
 * @param param0 내부 children 요소로 input요소를 입력받는다.
 */
const FormFieldComponent: React.FC<Props> = ({
  formFieldInfo: { title, description, label },
  errorMessage,
  children,
}) => {
  return (
    <div>
      <h1 css={titleCss}>{title}</h1>
      <p css={descriptionCss}>{description}</p>
      <label htmlFor="id">{label}</label>
      <div css={rowStyle}>{children}</div>
      <Tooltip>{errorMessage ?? ""}</Tooltip>
    </div>
  );
};

const CardNumberField = () => {
  const cardNumberError = useContextWrapper(CardNumberErrorContext)[0];
  const cardNumberErrorKeys = Object.keys(cardNumberError) as (keyof CardNumbersError)[];
  const categoryHasError = cardNumberErrorKeys.find((category) => {
    return cardNumberError[category]?.errorMessage;
  });

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

const CardValidityPeriodField = () => {
  const cardPeriodError = useContextWrapper(CardValidityPeriodErrorContext)[0];
  const cardPeriodErrorKeys = Object.keys(cardPeriodError) as (keyof CardValidityPeriodError)[];
  const categoryHasError = cardPeriodErrorKeys.find((category) => {
    return cardPeriodError[category]?.errorMessage;
  });

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "카드 유효기간을 입력해 주세요",
        description: "월/년도(MM/YY)를 순서대로 입력해 주세요.",
        label: "유효기간",
      }}
      errorMessage={categoryHasError ? cardPeriodError[categoryHasError]?.errorMessage : undefined}
    >
      <CardPeriodInput />
    </FormFieldComponent>
  );
};

const CardOwnerField = () => {
  const cardOwnerError = useContextWrapper(CardOwnerInfoErrorContext)[0];
  const cardOwnerErrorKeys = Object.keys(cardOwnerError) as (keyof CardOwnerInfoError)[];
  const categoryHasError = cardOwnerErrorKeys.find((category) => {
    return cardOwnerError[category]?.errorMessage;
  });

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "카드 유효기간을 입력해 주세요",
        description: "월/년도(MM/YY)를 순서대로 입력해 주세요.",
        label: "유효기간",
      }}
      errorMessage={categoryHasError ? cardOwnerError[categoryHasError]?.errorMessage : undefined}
    >
      <CardOwnerInput />
    </FormFieldComponent>
  );
};

const FormField = {
  CardNumberField: memo(CardNumberField),
  CardValidityPeriodField: memo(CardValidityPeriodField),
  CardOwnerField: memo(CardOwnerField),
};

export default FormField;
