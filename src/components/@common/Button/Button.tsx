import { ReactNode } from "react";
import { roundedButton, fullButton } from "./Button.style";

type ButtonProps = {
  content: ReactNode;
  variant?: "rounded" | "full";
  onClick?: () => void;
}

function Button({content, variant, onClick}: ButtonProps) {
  const buttonStyle = variant === "full" ? fullButton : roundedButton;

  return (
    <button css={buttonStyle} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button;
