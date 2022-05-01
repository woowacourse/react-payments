import { StyledInput } from '../../../style/addForm';

function Input({
  value,
  defaultValue,
  width,
  type,
  maxLength,
  isCenter,
  placeholder,
  onChange,
  backgroundColor,
  color,
  isValid,
  disabled,
}) {
  return (
    <StyledInput
      value={value}
      defaultValue={defaultValue}
      width={width}
      type={type}
      maxLength={maxLength}
      textAlign={isCenter ? 'center' : 'left'}
      placeholder={placeholder}
      backgroundColor={backgroundColor}
      color={color}
      onChange={onChange}
      isValid={isValid}
      disabled={disabled}
    />
  );
}

Input.defaultProps = {
  isCenter: true,
  backgroundColor: '#ecebf1',
  color: '#04C09E',
};

export default Input;
