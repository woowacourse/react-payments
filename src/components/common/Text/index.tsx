import { PropsWithChildren } from 'react';
import { StyledTextContainer } from './Text.styled';

export type Props = {
  variant: 'Title' | 'Body' | 'Caption';
  color: string;
} & PropsWithChildren;

export const Text = ({ variant, color, children }: Props) => {
  return (
    <StyledTextContainer variant={variant} color={color}>
      {children}
    </StyledTextContainer>
  );
};
