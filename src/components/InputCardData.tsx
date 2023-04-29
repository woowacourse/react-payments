import { InputProps } from '../type';
import './InputCardData.css';

const InputCardData = ({
  required,
  inputType,
  inputMode,
  passwordType,
  className,
  value,
  minDataLength,
  maxDataLength,
  name,
  dataId,
  refObject: Ref,
  handleError,
  onChange,
  nextFocus,
  onFlip,
  handleInputData,
}: InputProps) => {
  return inputType === 'password' ? (
    <input
      className={`input-password-container ${passwordType}`}
      type="password"
      value={value}
      inputMode={inputMode}
      maxLength={maxDataLength}
      minLength={minDataLength}
      data-id={dataId}
      ref={Ref}
      onChange={(e) => {
        onChange(e);
        nextFocus(e);

        handleInputData(dataId, e);
      }}
      onFocus={onFlip}
      name={name}
      required={required}
    />
  ) : (
    <input
      className={`input-box ${className}`}
      value={value}
      type={inputType}
      inputMode={inputMode}
      maxLength={maxDataLength}
      minLength={minDataLength}
      data-id={dataId}
      ref={Ref}
      onChange={(e) => {
        onChange(e);
        handleError(e);
        nextFocus(e);
        handleInputData(dataId, e);
      }}
      onFocus={onFlip}
      name={name}
      required={required}
    />
  );
};

export default InputCardData;
