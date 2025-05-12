import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button = ({
  height,
  borderType,
  position,
  top,
  bottom,
  left,
  right,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      height={height}
      borderType={borderType}
      position={position}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
