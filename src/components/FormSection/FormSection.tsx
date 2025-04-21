/** @jsxImportSource @emotion/react */
import Text from "../Text/Text";
import InputField from "../InputField/InputField";
import { css } from "@emotion/react";
import { FormSectionProps } from "../../types/componentPropsType";

const FormSection = ({ title, description, inputFieldData }: FormSectionProps) => {
  return (
    <div css={FormSectionWrapperStyle}>
      <div css={TextWrapperStyle}>
        <Text type="title" text={title} />
        <Text type="description" text={description} />
      </div>
      <InputField {...inputFieldData} />
    </div>
  );
};
export default FormSection;

const TextWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FormSectionWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
