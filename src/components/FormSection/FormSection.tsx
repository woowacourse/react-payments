import Text from "../Text/Text";
import InputField from "../InputField/InputField";
import { css } from "@emotion/react";
import { FormSectionProps } from "../../types/componentPropsType";
import Select from "../Select/Select";

const FormSection = ({ title, description, type, fieldData }: FormSectionProps) => {
  return (
    <div css={FormSectionWrapperStyle}>
      <div css={TextWrapperStyle}>
        <Text type="title" text={title} />
        <Text type="description" text={description} />
      </div>
      {type === "input" ? <InputField {...fieldData} /> : <Select {...fieldData} />}
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
