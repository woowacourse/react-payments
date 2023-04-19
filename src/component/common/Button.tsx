import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: Props) {
  const { type, children } = props;
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}
