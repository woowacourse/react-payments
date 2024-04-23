import { css } from '@emotion/react';

const titleContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const titleStyle = css({
  fontSize: '18px',
  fontWeight: 'bold',
});

const subtitleStyle = css({
  color: '#8b95a1',
  fontSize: '9.5px',
});

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

export default InputTitle;
