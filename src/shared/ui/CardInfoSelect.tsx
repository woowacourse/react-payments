import './cardInfoSelect.css';

export interface CardInfoSelectProps {
  placeholder: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: boolean;
  options: string[];
}

export default function CardInfoSelect({
  placeholder,
  name,
  onChange,
  error,
  options,
}: CardInfoSelectProps) {
  return (
    <select
      className={`cardInfo-select ${error && 'cardInfo-select-error'}`}
      onChange={onChange}
      name={name}
      defaultValue=""
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
