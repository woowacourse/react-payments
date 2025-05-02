import styles from "./Button.module.css";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = {
  variant?: "register" | "another";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "register", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={
          variant === "register"
            ? styles.registerCardButton
            : styles.registerAnotherCardButton
        }
        {...props}
      />
    );
  }
);

export default Button;
