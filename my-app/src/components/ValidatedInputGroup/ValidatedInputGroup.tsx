import { css } from "@emotion/react";

type ValidatedInputGroupProps = {
  errorMessage: string;
  children: React.ReactNode;
};

const ValidatedInputGroup = ({ errorMessage, children }: ValidatedInputGroupProps) => {
  return (
    <div css={containerStyle}>
      <section css={sectionStyle}>{children}</section>
      <span css={[errorTextStyle, visibilityStyle(!!errorMessage)]}>{errorMessage}</span>
    </div>
  );
};

export default ValidatedInputGroup;

const containerStyle = css`
  position: relative;
  padding-bottom: 20px;
`;

const sectionStyle = css`
  display: flex;
  flex-direction: row;
  gap: 8px;
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
