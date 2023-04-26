import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
  const { type, children, style } = props;
  return (
    <button className={styles.button} type={type} style={style}>
      {children}
    </button>
  );
}
