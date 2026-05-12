import './Select.css';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: readonly { label: string; value: string }[];
  variant?: 'default' | 'error';
  ref?: React.RefObject<HTMLSelectElement | null>;
}

export default function Select({ options, variant = 'default', ref, ...props }: SelectProps) {
  return (
    <select ref={ref} className={`select select--${variant}`} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
