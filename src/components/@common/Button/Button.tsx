import { ReactNode } from "react";
import { roundedButton, fullButton, buttonContainer } from "./Button.style";

type ButtonProps = {
  content: ReactNode;
  variant?: "rounded" | "full";
  onClick?: () => void;
}

function Button({content, variant, onClick}: ButtonProps) {
  const buttonStyle = variant === "full" ? fullButton : roundedButton;

  return (
    <div css={buttonContainer}>
      <button css={buttonStyle} onClick={onClick}>
        {content}
      </button>
    </div>
  )
}

export default Button;
