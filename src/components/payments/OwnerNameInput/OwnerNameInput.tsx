import Input, { InputProps } from '@components/common/Input/Input';

type OwnerNameInputProps = Omit<InputProps, 'placeholder' | 'type' | 'maxLength' | 'onChange'> & {
  onAddOwnerName: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
};

const OwnerNameInput: React.FC<OwnerNameInputProps> = ({ isError = false, value, onAddOwnerName, id }) => {
  return (
    <Input
      id={id}
      maxLength={50}
      type="text"
      placeholder="JOHN DOE"
      value={value}
      isError={isError}
      onChange={onAddOwnerName}
    />
  );
};

export default OwnerNameInput;
