import { ComponentProps } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export type ButtonVariant = "default" | "rounded";
export type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  fixed?: boolean;
}

function Button({
  variant = "default",
  size = "medium",
  fullWidth = false,
  fixed = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const shouldBeFixed = fixed || (variant === "default" && fixed !== false);

  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        shouldBeFixed && styles.fixed,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
