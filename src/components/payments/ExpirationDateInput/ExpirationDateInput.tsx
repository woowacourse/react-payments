import Input, { InputProps } from '@components/common/Input/Input';

type ExpirationDateInputProps = Omit<InputProps, 'type' | 'maxLength' | 'onChange'> & {
  onAddExpirationDate: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: 'MM' | 'YY';
  refCallback ?: (element : HTMLInputElement) => void
};

const ExpirationDateInput: React.FC<ExpirationDateInputProps> = ({
  isError = false,
  value,
  placeholder,
  onAddExpirationDate,
  id,
  refCallback
}) => {
  return (
    <Input
    ref={refCallback}
      id={id}
      maxLength={2}
      type="text"
      placeholder={placeholder}
      value={value}
      isError={isError}
      onChange={onAddExpirationDate}
    />
  );
};

export default ExpirationDateInput;
