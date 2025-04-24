import { ButtonHTMLAttributes } from "react";
import { ButtonStyles } from "./Button.styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export default function Button({ text = "버튼", ...props }: ButtonProps) {
  return <ButtonStyles {...props}>{text}</ButtonStyles>;
}
