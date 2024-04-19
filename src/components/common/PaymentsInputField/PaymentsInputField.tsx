import { Input } from "./PaymentsInputField.styled";

const PaymentsInputField = ({ ...props }: PaymentsInputFieldProps) => {
  const {
    placeholder,
    maxLength,
    value,
    hasError,
    handleValueChange,
    handleOnBlur,
    handleOnFocus,
    className,
    width,
  } = props;

  return (
    <Input
      className={className}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      maxLength={maxLength}
      placeholder={placeholder}
      hasError={hasError}
      value={value}
      onChange={handleValueChange}
      width={width}
    />
  );
};

export default PaymentsInputField;
