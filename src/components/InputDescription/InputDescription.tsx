import styles from "./InputDescription.module.css";
interface Props {
  inputValue: string;
}

export default function InputDescription({ inputValue }: Props) {
  return (
    <div className={styles["input-description"]}>
      <p>{inputValue}</p>
    </div>
  );
}
