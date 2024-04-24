import Select from '../style/PaymentsSelectField.style';

const PaymentsSelectField = ({ ...props }: PaymentsSelectFieldProps) => {
  const {
    options,
    name,
    placeholder,
    hasError,
    value,
    handleValueChange,
    handleOnBlur,
    handleOnFocus,
  } = props;

  return (
    <Select
      name={name}
      value={value}
      hasError={hasError}
      onChange={handleValueChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      required
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((value) => {
        return <option value={value[1]}>{value[0]}</option>;
      })}
    </Select>
  );
};
export default PaymentsSelectField;
