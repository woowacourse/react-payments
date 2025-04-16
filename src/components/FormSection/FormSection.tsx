/** @jsxImportSource @emotion/react */
import Text from "../Text/Text";
import InputField from "../InputField/InputField";
import { InputFieldProps } from "../../types/inputFieldDataType";
import { css } from "@emotion/react";

type FormSectionProps = {
  title: string;
  description: string;
  inputFieldData: InputFieldProps;
};

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
