/** @jsxImportSource @emotion/react */
import {css, Interpolation, Theme} from '@emotion/react';
import theme from "../../../styles/theme";

export type DotType = 'white' | 'black';

type DotProps = {
  value?: string | number | null;
  css?: Interpolation<Theme> | Interpolation<Theme>[];
  color?: DotType;
}

function Dot({value, css: customCss, color = 'black'}: DotProps) {
  const length = value?.toString().length || 0;

  const masked = '*'.repeat(length);

  const colorStyle = color === 'white' ? dotWhite : dotBlack;

  return <span css={[dotStyle, colorStyle, customCss]}>{masked}</span>;
}

const dotStyle = css`
  ${theme.font.card.number};
`;

const dotWhite = css`
  color: ${theme.color.white};
`;

const dotBlack = css`
  color: ${theme.color.black};
`;

export default Dot;
