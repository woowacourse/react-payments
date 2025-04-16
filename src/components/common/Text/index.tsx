import { ComponentProps, ReactNode } from 'react';

import { StyledTextContainer } from './Text.styled';

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
  color?: string;
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
    <StyledTextContainer variant={variant} fontWeight={fontWeight} color={color} {...props}>
      {children}
    </StyledTextContainer>
  );
};
