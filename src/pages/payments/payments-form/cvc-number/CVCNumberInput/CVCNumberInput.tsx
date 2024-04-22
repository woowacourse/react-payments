import { Input, InputProps } from '@components/index';

type CVCNumberInputProps = Omit<InputProps, 'placeholder' | 'type' | 'maxLength' | 'onChange'> & {
  onAddCVCNumber: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
};

const CVCNumberInput: React.FC<CVCNumberInputProps> = ({
  id,
  placeholder,
  isError = false,
  value = '',
  onAddCVCNumber,
}) => {
  return (
    <Input
      id={id}
      maxLength={3}
      type="text"
      placeholder={placeholder}
      value={value}
      isError={isError}
      onChange={onAddCVCNumber}
    />
  );
};

export default CVCNumberInput;
