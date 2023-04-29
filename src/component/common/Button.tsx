import { ButtonHTMLAttributes } from "react";

import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
  const { type, children, style } = props;
  return (
    <button className="button" type={type} style={style}>
      {children}
    </button>
  );
}
