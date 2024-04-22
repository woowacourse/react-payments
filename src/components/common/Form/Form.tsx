import { ReactNode } from "react";
import styles from "./Form.module.css";

interface FormProps {
  children: ReactNode;
}

export default function Form({ children }: FormProps) {
  return <form className={styles.card__info__form}>{children}</form>;
}
