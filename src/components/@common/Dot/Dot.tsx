/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import theme from "../../../styles/theme";

type DotProps = {
  value?: string | number | null;
  css?: SerializedStyles;
}

function Dot({value, css: customCss}: DotProps) {
  const length = value?.toString().length || 0;

  const masked = '*'.repeat(length);

  return <span css={[dotStyle, customCss]}>{masked}</span>;
}

const dotStyle = css`
  color: ${theme.color.white};
  ${theme.font.card.number};
`;

export default Dot;
