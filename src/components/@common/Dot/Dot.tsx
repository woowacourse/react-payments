/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import theme from "../../../styles/theme";

type DotProps = {
  value?: string | number | null;
  css?: SerializedStyles;
  className?: string;
}

function Dot({value, css: customCss, className}: DotProps) {
  const length = value?.toString().length || 0;

  const masked = '*'.repeat(length);

  return <span css={[dotStyle, customCss, className]}>{masked}</span>;
}

const dotStyle = css`
  color: ${theme.color.white};
  ${theme.font.card.number};
`;

export default Dot;
