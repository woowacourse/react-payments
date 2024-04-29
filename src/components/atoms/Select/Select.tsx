import textStyle from '@styles/textStyle.module.css';
import styles from './Select.module.css';

export interface SelectProps {
  value?: string;
  placeholder?: string;
  options: { value: string; text: string }[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select: React.FC<SelectProps> = ({ value = '', placeholder = '', options, onChange }) => {
  return (
    <select className={`${styles.select} ${textStyle.formItem}`} value={value} onChange={onChange}>
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map(({ value, text }, index) => (
        <option key={index} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
};

export default Select;
