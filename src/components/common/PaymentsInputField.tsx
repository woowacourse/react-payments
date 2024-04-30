import { forwardRef } from 'react';
import Input from '../style/PaymentsInputField.style';

const PaymentsInputField = forwardRef<
  HTMLInputElement,
  PaymentsInputFieldProps
>((props, ref) => {
  const {
    placeholder,
    maxLength,
    value,
    hasError,
    handleValueChange,
    handleOnBlur,
    handleOnFocus,
    onEnter,
    className,
    width,
    type,
  } = props;

  return (
    <Input
      onKeyDown={onEnter}
      className={className}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      maxLength={maxLength}
      placeholder={placeholder}
      hasError={hasError}
      value={value}
      onChange={handleValueChange}
      width={width}
      type={type}
      ref={ref}
    />
  );
});

export default PaymentsInputField;
