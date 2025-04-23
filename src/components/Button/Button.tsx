import { ComponentProps } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "default" | "rounded";
export type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ComponentProps<"button"> {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: boolean;
  fixed: boolean;
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

  const classNames = [
    styles.button,
    styles[`variant${capitalizeFirstLetter(variant)}`],
    styles[`size${capitalizeFirstLetter(size)}`],
    fullWidth ? styles.fullWidth : "",
    shouldBeFixed ? styles.fixed : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Button;
