import { ComponentProps, ReactNode } from 'react';

import { StyledTextContainer } from './Text.styled';

import { colors, Colors } from '../../../styles/global';

export type Props = {
  /**
   * Sets the text variant.
   */
  variant: 'Title' | 'Body' | 'Caption';
  /**
   * Sets the font weight.
   * @default medium
   */
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  /**
   * Sets the text color.
   * @default black
   */
  color?: Colors;
  /**
   * Sets the text content.
   */
  children: ReactNode;
} & ComponentProps<'p'>;

export const Text = ({
  variant,
  fontWeight = 'medium',
  color = 'black',
  children,
  ...props
}: Props) => {
  return (
    <StyledTextContainer
      variant={variant}
      fontWeight={fontWeight}
      color={colors[color] as Colors}
      {...props}
    >
      {children}
    </StyledTextContainer>
  );
};
