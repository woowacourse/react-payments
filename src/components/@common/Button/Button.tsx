import { defaultButton, bottomButton, buttonContainer } from "./Button.style";

type ButtonProps = {
  content: string;
  style?: "default" | "bottom";
}

function Button({content, style}: ButtonProps) {
  const buttonStyle = style === "bottom" ? bottomButton : defaultButton;

  return (
    <div css={buttonContainer}>
      <button css={buttonStyle}>
        {content}
      </button>
    </div>
  )
}

export default Button;
