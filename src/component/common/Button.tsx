import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: Props) {
  const { type, children, className, ...buttonProps } = props;
  return (
    <button
      className={`${className} ${styles.button}`}
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
