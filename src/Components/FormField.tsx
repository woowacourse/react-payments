/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import { css } from "@emotion/react";

import FormInput from "./FormInput";
import Tooltip from "./Tooltip";

const titleCss = css({
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "26px",
  textAlign: "left",
});

const descriptionCss = css({
  fontSize: "10px",
  fontWeight: "400",
  lineHeight: "14px",
  textAlign: "left",
  color: "#8B95A1",
  marginBottom: "30px",
});

const rowStyle = css({
  display: "flex",
  justifyContent: "space-between",
});

interface Props {
  formFieldInfo: FormFieldInfo;
  children: React.ReactNode;
}

/**
 *
 * @param param0 내부 children 요소로 input요소를 입력받는다.
 */
const FormFieldComponent: React.FC<Props> = ({ formFieldInfo: { key, title, description, label }, children }) => {
  return (
    <div>
      <h1 css={titleCss}>{title}</h1>
      <p css={descriptionCss}>{description}</p>
      <label htmlFor="id">{label}</label>
      <div css={rowStyle}>{children}</div>
      {/* <Tooltip>{errorMessage ?? ""}</Tooltip> */}
    </div>
  );
};

const CardNumberField = () => {
  return (
    <FormFieldComponent
      formFieldInfo={{
        key: "cardNumbers",
        title: "결제할 카드 번호를 입력해 주세요",
        description: "본인 명의의 카드만 결제 가능합니다.",
        label: "카드 번호",
      }}
    >
      <FormInput.CardNumberInput />
    </FormFieldComponent>
  );
};

const CardValidityPeriodField = () => {
  return (
    <FormFieldComponent
      formFieldInfo={{
        key: "cardValidityPeriod",
        title: "카드 유효기간을 입력해 주세요",
        description: "월/년도(MM/YY)를 순서대로 입력해 주세요.",
        label: "유효기간",
      }}
    >
      <FormInput.CardPeriodInput />
    </FormFieldComponent>
  );
};

const CardOwnerField = () => {
  return (
    <FormFieldComponent
      formFieldInfo={{
        key: "cardValidityPeriod",
        title: "카드 유효기간을 입력해 주세요",
        description: "월/년도(MM/YY)를 순서대로 입력해 주세요.",
        label: "유효기간",
      }}
    >
      <FormInput.CardOwnerInput />
    </FormFieldComponent>
  );
};

const FormField = {
  CardNumberField,
  CardValidityPeriodField,
  CardOwnerField,
};

export default FormField;
