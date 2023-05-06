import StyledButton from "./StyledButton";
import type { StyledButtonProps } from "./StyledButton";

interface ButtonProps extends StyledButtonProps, React.ComponentPropsWithoutRef<"button"> {
  onClick?: () => void;
}

const Button = ({ onClick, ...restProps }: ButtonProps) => {
  return <StyledButton onClick={onClick} {...restProps}></StyledButton>;
};

export default Button;
