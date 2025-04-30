import styles from "./select.module.css";

interface SelectProps {
  title: string;
  options: string[];
  handleChange: (value: string) => void;
}

export default function Select({ title, handleChange, options }: SelectProps) {
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
        {title}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
