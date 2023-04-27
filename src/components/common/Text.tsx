import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

type TextProps = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large' | 'largest';
  weight?: 'light' | 'normal' | 'bold';
  color?: string;
}>;

type StyledTextProps = {
  $size: NonNullable<TextProps['size']>;
  $weight: NonNullable<TextProps['weight']>;
  $color: TextProps['color'];
};

const fontSizes: Record<StyledTextProps['$size'], string> = {
  small: '12px',
  medium: '14px',
  large: '16px',
  largest: '24px',
};

const fontWeights: Record<StyledTextProps['$weight'], number> = {
  light: 400,
  normal: 500,
  bold: 700,
};

export const StyledText = styled.div<StyledTextProps>`
  font-size: ${(props) => fontSizes[props.$size]};
  font-weight: ${(props) => fontWeights[props.$weight]};
  color: ${(props) => props.$color ?? 'inherit'};
`;

export const Text = (props: TextProps) => {
  const { size = 'medium', weight = 'normal', color, children } = props;

  return (
    <StyledText $size={size} $weight={weight} $color={color}>
      {children}
    </StyledText>
  );
};
