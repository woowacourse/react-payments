import StyledButton from "./StyledButton";
import type { StyledButtonProps } from "./StyledButton";

interface ButtonProps extends StyledButtonProps, React.HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const Button = ({ onClick, ...$styledProps }: ButtonProps) => {
  return <StyledButton onClick={onClick} {...$styledProps}></StyledButton>;
};

export default Button;
