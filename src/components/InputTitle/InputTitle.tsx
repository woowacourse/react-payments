import styles from "./InputTitle.module.css";
interface Props {
  inputValue: string;
}

const CONSTANT_INPUT_TITLE = " 입력해 주세요." as const;

export default function InputTitle({ inputValue }: Props) {
  return (
    <div className={styles["input-title"]}>
      <h2>
        {inputValue}
        {CONSTANT_INPUT_TITLE}
      </h2>
    </div>
  );
}
