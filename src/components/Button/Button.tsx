import { StyledButton } from './style';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
