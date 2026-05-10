import styled from '@emotion/styled';

const FONT_SIZE = {
  xs: '10px',
  s: '12px',
  m: '14px',
  l: '18px',
  xl: '24px',
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
}

const TextBase = styled.p<CommonTextProps>`
  margin: 0;
  font-size: ${(props) => `${FONT_SIZE[props.size ?? 'm']};`};
  font-weight: ${(props) => `${FONT_WEIGHT[props.weight ?? 'medium']};`};
  color: ${(props) => `${FONT_COLOR[props.color ?? 'black']};`};
`;

const Span = styled.span<CommonTextProps>`
  font-size: ${(props) => `${FONT_SIZE[props.size ?? 'm']};`};
  font-weight: ${(props) => `${FONT_WEIGHT[props.weight ?? 'medium']};`};
  color: ${(props) => `${FONT_COLOR[props.color ?? 'black']};`};
`;

const Label = styled.label<CommonTextProps>`
  font-size: ${(props) => `${FONT_SIZE[props.size ?? 'm']};`};
  font-weight: ${(props) => `${FONT_WEIGHT[props.weight ?? 'medium']};`};
  color: ${(props) => `${FONT_COLOR[props.color ?? 'black']};`};
`;

const Text = Object.assign(TextBase, { Span, Label });

export default Text;
