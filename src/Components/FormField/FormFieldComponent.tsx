/** @jsxImportSource @emotion/react */
import { descriptionCss, rowStyle, titleCss } from "./style";

import Tooltip from "../Tooltip";

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
      <Tooltip>{errorMessage || ""}</Tooltip>
    </div>
  );
};

export default FormFieldComponent;
