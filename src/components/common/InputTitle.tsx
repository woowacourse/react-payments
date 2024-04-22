import { css } from '@emotion/react';

interface InputTitlePropsType {
  title: string;
  subtitle?: string;
}

function InputTitle({ title, subtitle }: InputTitlePropsType) {
  return (
    <div css={titleContainerStyle}>
      <h1 css={titleStyle}>{title}</h1>
      {subtitle && <p css={subtitleStyle}>{subtitle}</p>}
    </div>
  );
}

const titleContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const titleStyle = css`
  font-size: 18px;
  font-weight: bold;
`;

const subtitleStyle = css`
  color: #8b95a1;
  font-size: 9.5px;
`;

export default InputTitle;
