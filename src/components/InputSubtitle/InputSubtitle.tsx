import styles from "./InputSubtitle.module.css";
interface Props {
  inputValue: string;
}

export default function InputSubtitle({ inputValue }: Props) {
  return (
    <div className={styles["input-subtitle"]}>
      <p>{inputValue}</p>
    </div>
  );
}
