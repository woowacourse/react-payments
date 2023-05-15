import { ButtonHTMLAttributes } from "react";

import "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaDisabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const { type, children, style, ariaDisabled } = props;
  return (
    <button
      className="button"
      type={type}
      style={style}
      aria-disabled={ariaDisabled}
    >
      {children}
    </button>
  );
}
