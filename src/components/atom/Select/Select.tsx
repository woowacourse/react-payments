import textStyle from '@src/styles/textStyle.module.css';

interface SelectProps {
  value?: string;
  placeholder?: string;
  options: { value: string; text: string }[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select: React.FC<SelectProps> = ({ value = '', placeholder = '', options, onChange }) => {
  return (
    <select className={`${textStyle.formItem} ${value ? '' : textStyle.placeholder}`} value={value} onChange={onChange}>
      <option value="" selected disabled hidden>
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
