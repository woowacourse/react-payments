import { Input, InputProps } from '@components/index';

type OwnerNameInputProps = Omit<InputProps, 'placeholder' | 'type' | 'maxLength' | 'onChange'> & {
  onAddOwnerName: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
};

const OwnerNameInput: React.FC<OwnerNameInputProps> = ({ isError = false, value, onAddOwnerName, id, placeholder }) => {
  return (
    <Input
      id={id}
      maxLength={50}
      type="text"
      placeholder={placeholder}
      value={value}
      isError={isError}
      onChange={onAddOwnerName}
    />
  );
};

export default OwnerNameInput;
