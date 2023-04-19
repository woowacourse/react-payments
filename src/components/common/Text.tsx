import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

type TextProps = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large';
}>;

type StyledTextProps = {
  $size: NonNullable<TextProps['size']>;
};

const fontSizes: Record<NonNullable<TextProps['size']>, string> = {
  small: '12px',
  medium: '14px',
  large: '16px',
};

const StyledText = styled.div<StyledTextProps>`
  font-size: ${(props) => fontSizes[props.$size]};
`;

export const Text = (props: TextProps) => {
  const { size = 'medium', children } = props;

  return <StyledText $size={size}>{children}</StyledText>;
};
