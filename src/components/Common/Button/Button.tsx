import { ComponentProps } from "react";
import { ButtonStyles } from "./Button.styled";

interface ButtonProps extends ComponentProps<"button"> {
  text?: string;
}

export default function Button({ text = "버튼", ...props }: ButtonProps) {
  return <ButtonStyles {...props}>{text}</ButtonStyles>;
}
