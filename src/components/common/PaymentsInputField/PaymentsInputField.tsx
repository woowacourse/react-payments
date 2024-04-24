import { forwardRef } from "react";
import { Input } from "./PaymentsInputField.styled";

interface PaymentsInputFieldProps {
  className?: string;
  placeholder?: string;
  maxLength?: number;
  hasError?: boolean;
  value?: string;
  handleValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: number;
  autoFocus?: boolean
}

const PaymentsInputField = forwardRef<HTMLInputElement, PaymentsInputFieldProps>((props, ref) => {
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
    autoFocus
  } = props;

  const handleKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur()
    }
  }

  return (
    <Input
      ref={ref}
      className={className}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      maxLength={maxLength}
      placeholder={placeholder}
      hasError={hasError}
      value={value}
      onChange={handleValueChange}
      width={width}
      autoFocus={autoFocus}
      onKeyDown={(e) => handleKeyDownEnter(e)}
    />
  );
});

export default PaymentsInputField;
