import { forwardRef } from "react";
import type { ComponentPropsWithRef, ForwardedRef } from "react";
import styles from "./style.module.css";

interface InputProps extends ComponentPropsWithRef<"input"> {
  variant?: "outline" | "underline";
  isError?: boolean;
}

const Input = (
  {
    variant = "outline",
    className = "",
    isError = false,
    ...attributes
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const visualStyle = variant === "outline" ? styles.outline : styles.underline;

  return (
    <input
      ref={ref}
      className={`${className} ${styles.input} ${visualStyle} ${
        isError ? styles.error : ""
      }`}
      {...attributes}
    />
  );
};

export default forwardRef(Input);
