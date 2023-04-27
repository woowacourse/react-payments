import type { PropsWithChildren } from 'react';
import styled from 'styled-components';
import type { Theme } from '../../styles/theme';

type TextProps = PropsWithChildren<{
  size?: keyof Theme['fontSize'];
  weight?: keyof Theme['fontWeight'];
  color?: keyof Theme['fontColor'];
}>;

type StyledTextProps = {
  $size: NonNullable<TextProps['size']>;
  $weight: NonNullable<TextProps['weight']>;
  $color: TextProps['color'];
};

export const StyledText = styled.div<StyledTextProps>`
  font-size: ${(props) => props.theme.fontSize[props.$size]};
  font-weight: ${(props) => props.theme.fontWeight[props.$weight]};
  color: ${(props) => (props.$color ? props.theme.fontColor[props.$color] : 'inherit')};
`;

export const Text = (props: TextProps) => {
  const { size = 'medium', weight = 'normal', color, children } = props;

  return (
    <StyledText $size={size} $weight={weight} $color={color}>
      {children}
    </StyledText>
  );
};
