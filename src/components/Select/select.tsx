import styles from "./select.module.css";

interface SelectProps {
  options: string[];
  handleChange: (value: string) => void;
}

export default function Select({ handleChange, options }: SelectProps) {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(e.target.value);
  };
  return (
    <select
      defaultValue="default"
      className={styles["select"]}
      onChange={handleSelectChange}
      autoFocus
    >
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
