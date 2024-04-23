export interface SelectProps extends React.ComponentPropsWithRef<'select'> {
  options: string[];
}

const Select = ({ options, ...restProps }: SelectProps) => {
  return (
    <select {...restProps}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
