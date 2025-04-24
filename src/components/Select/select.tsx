import styles from "./select.module.css";

interface SelectProps {
  options: string[];
}

export default function Select({ options }: SelectProps) {
  return (
    <select defaultValue="default" className={styles["select"]}>
      <option value="default" disabled hidden>
        카드사를 선택해주세요
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
