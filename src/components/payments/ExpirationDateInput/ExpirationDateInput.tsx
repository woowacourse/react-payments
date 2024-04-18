import Input, { InputProps } from '@components/common/Input/Input';

type ExpirationDateInputProps = Omit<InputProps, 'type' | 'maxLength' | 'onChange'> & {
  onAddExpirationDate: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: 'MM' | 'YY';
};

const ExpirationDateInput: React.FC<ExpirationDateInputProps> = ({
  isError = false,
  value,
  placeholder,
  onAddExpirationDate,
}) => {
  return (
    <Input
      maxLength={2}
      type="number"
      placeholder={placeholder}
      value={value}
      isError={isError}
      onChange={onAddExpirationDate}
    />
  );
};

export default ExpirationDateInput;
