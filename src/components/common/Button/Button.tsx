import { forwardRef } from "react";
import type { ComponentPropsWithRef, ForwardedRef } from "react";
import styles from "./style.module.css";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: "default" | "primary" | "secondary" | "danger" | "textButton";
  size?: "small" | "medium" | "large";
  icon?: string;
  children?: string;
}

const Button = (
  {
    children,
    variant = "default",
    size = "medium",
    className = "",
    icon,
    ...attributes
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const displayStyle = icon ? styles.iconButton : "";

  return (
    <button
      ref={ref}
      className={`${className} ${styles[variant]} ${styles[size]} ${displayStyle}`}
      {...attributes}
    >
      {icon && <img src={icon} alt="icon" />}
      {children}
    </button>
  );
};

export default forwardRef(Button);
