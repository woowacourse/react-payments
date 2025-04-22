import { StyledTextContainer } from './Text.styled';
import { TextProps } from './Text.types';

import { colors, Colors } from '../../../styles/global';

export const Text = ({
  variant,
  fontWeight = 'medium',
  color = 'black',
  children,
  ...props
}: TextProps) => {
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
