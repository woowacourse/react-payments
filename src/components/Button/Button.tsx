import { ButtonCSS } from "./Button.styled";

interface ButtonProps {
  onClick: () => void;
  variant: "success" | "home";
}

function Button({ onClick, variant }: ButtonProps) {
  return (
    <ButtonCSS type="button" onClick={onClick} variant={variant}>
      확인
    </ButtonCSS>
  );
}

export default Button;
