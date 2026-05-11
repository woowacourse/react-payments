import './Select.css';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: readonly { label: string; value: string }[];
  variant?: 'default' | 'error';
}

export default function Select({ options, variant = 'default', ...props }: SelectProps) {
  return (
    <select className={`select select--${variant}`} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
