import styles from "./Form.module.css";

export default function Form({ children }) {
  return <form className={styles.card__info__form}>{children}</form>;
}
