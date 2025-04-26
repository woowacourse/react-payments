import Text from "../Text/Text";
import { css } from "@emotion/react";
import { FormSectionBaseProps } from "../../types/componentPropsType";

const FormSection = ({ title, description, children }: FormSectionBaseProps) => {
  return (
    <div css={FormSectionWrapperStyle}>
      <div css={TextWrapperStyle}>
        <Text type="title" text={title} />
        <Text type="description" text={description} />
      </div>
      {children}
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
