import Select from '../style/PaymentsSelectField.style';

const PaymentsSelectField = ({ ...props }: PaymentsSelectFieldProps) => {
  const { name, placeholder, options } = props;
  return (
    <Select name={name} required>
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((value) => {
        return <option value={value}>{value}</option>;
      })}
    </Select>
  );
};
export default PaymentsSelectField;
