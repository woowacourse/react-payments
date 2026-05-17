import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { Property } from 'csstype';

const FONT_SIZE = {
  xs: '10px',
  s: '12px',
  m: '14px',
  l: '18px',
  xl: '20px',
  '2xl': '24px',
} as const;

const FONT_WEIGHT = {
  medium: '500',
  bold: '700',
} as const;

const FONT_COLOR = {
  black: 'var(--color-black, black)',
  white: 'var(--color-white, white)',
  description: 'var(--color-description, #8b95a1)',
  error: 'var(--color-error, #ff3d3d)',
} as const;

interface CommonTextProps {
  size?: keyof typeof FONT_SIZE;
  weight?: keyof typeof FONT_WEIGHT;
  color?: keyof typeof FONT_COLOR;
  align?: Property.TextAlign;
}

const textStyles = (props: CommonTextProps) => css`
  font-size: ${FONT_SIZE[props.size ?? 'm']};
  font-weight: ${FONT_WEIGHT[props.weight ?? 'medium']};
  color: ${FONT_COLOR[props.color ?? 'black']};
  ${props.align ? `text-align: ${props.align};` : ''}
`;

const TextBase = styled.p<CommonTextProps>`
  margin: 0;
  ${textStyles}
`;

const H1 = styled.h1<CommonTextProps>`
  ${textStyles}
`;

const H2 = styled.h2<CommonTextProps>`
  ${textStyles}
`;

const H3 = styled.h3<CommonTextProps>`
  ${textStyles}
`;

const H4 = styled.h4<CommonTextProps>`
  ${textStyles}
`;

const H5 = styled.h5<CommonTextProps>`
  ${textStyles}
`;

const H6 = styled.h6<CommonTextProps>`
  ${textStyles}
`;

const Span = styled.span<CommonTextProps>`
  ${textStyles}
`;

const Label = styled.label<CommonTextProps>`
  ${textStyles}
`;

const Text = Object.assign(TextBase, { H1, H2, H3, H4, H5, H6, Span, Label });

export default Text;
