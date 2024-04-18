import styles from "./Form.module.css";

export default function Form({ children }: any) {
  return <form className={styles.card__info__form}>{children}</form>;
}
