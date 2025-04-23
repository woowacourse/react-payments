import { StyledFlexBox } from './Flex.styled';
import { FlexProps } from './Flex.types';

export const Flex = ({ children, ...props }: FlexProps) => {
  return <StyledFlexBox {...props}>{children}</StyledFlexBox>;
};
