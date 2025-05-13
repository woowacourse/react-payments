import { ReactNode } from "react";
import { roundedButton, fullButton, buttonContainer } from "./Button.style";

type ButtonProps = {
  content: ReactNode;
  variant?: "rounded" | "full";
}

function Button({content, variant}: ButtonProps) {
  const buttonStyle = variant === "full" ? fullButton : roundedButton;

  return (
    <div css={buttonContainer}>
      <button css={buttonStyle}>
        {content}
      </button>
    </div>
  )
}

export default Button;
