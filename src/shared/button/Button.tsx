import { ComponentProps } from "react";
import { StyledButton } from "./Button.css";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
};

export default function Button(props: ButtonProps) {
  return <StyledButton {...props}>{props.text}</StyledButton>;
}
