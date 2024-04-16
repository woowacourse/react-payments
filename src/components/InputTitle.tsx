import { css } from '@emotion/react';

interface InputTitlePropsType {
  title: string;
  subtitle?: string;
}

function InputTitle({ title, subtitle }: InputTitlePropsType) {
  const titleStyle = css`
    
  `;
  return (
    <>
      <h1 css={titleStyle}>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
}

export default InputTitle;
