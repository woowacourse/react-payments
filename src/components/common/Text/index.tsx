import { PropsWithChildren } from 'react';
import { StyledTextContainer } from './Text.styled';

export type Props = {
  variant: 'Title' | 'Body' | 'Caption';
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: string;
} & PropsWithChildren;

export const Text = ({ variant, fontWeight = 'medium', color = 'black', children }: Props) => {
  return (
    <StyledTextContainer variant={variant} fontWeight={fontWeight} color={color}>
      {children}
    </StyledTextContainer>
  );
};
