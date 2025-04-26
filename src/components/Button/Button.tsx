import { ComponentProps } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export type ButtonVariant = "default" | "rounded";
export type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function Button({
  variant = "default",
  size = "medium",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
