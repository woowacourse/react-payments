import { StyledFlexBox } from './Flex.styled';
import { FlexProps } from './Flex.types';

export const Flex = ({
  direction = 'row',
  justifyContent,
  alignItems,
  gap,
  flex,
  margin,
  padding,
  width,
  height,
  children,
  ...props
}: FlexProps) => {
  return (
    <StyledFlexBox
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      flex={flex}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      {...props}
    >
      {children}
    </StyledFlexBox>
  );
};
