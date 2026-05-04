import { css } from "@emotion/react";

type ValidatedInputGroupProps = {
  errorMessage: string;
  legend: string;
  children: React.ReactNode;
};

const ValidatedInputGroup = ({ errorMessage, legend, children }: ValidatedInputGroupProps) => {
  return (
    <div css={containerStyle}>
      <fieldset css={fieldsetStyle}>
        <legend css={visuallyHiddenStyle}>{legend}</legend>
        {children}
      </fieldset>
      <span css={[errorTextStyle, visibilityStyle(!!errorMessage)]}>{errorMessage}</span>
    </div>
  );
};

export default ValidatedInputGroup;

const containerStyle = css`
  position: relative;
  padding-bottom: 20px;
`;

const fieldsetStyle = css`
  display: flex;
  flex-direction: row;
  gap: 8px;
  border: none;
  padding: 0;
  margin: 0;
`;

const visuallyHiddenStyle = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const errorTextStyle = css`
  position: absolute;
  bottom: 2px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;

const visibilityStyle = (visible: boolean) => css`
  visibility: ${visible ? "visible" : "hidden"};
`;
