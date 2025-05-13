import { roundedButton, fullButton, buttonContainer } from "./Button.style";

type ButtonProps = {
  content: string;
  style?: "rounded" | "full";
}

function Button({content, style}: ButtonProps) {
  const buttonStyle = style === "full" ? fullButton : roundedButton;

  return (
    <div css={buttonContainer}>
      <button css={buttonStyle}>
        {content}
      </button>
    </div>
  )
}

export default Button;
