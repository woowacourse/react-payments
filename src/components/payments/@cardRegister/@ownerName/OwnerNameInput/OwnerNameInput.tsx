import Input, { InputProps } from '@components/common/Input/Input';

type OwnerNameInputProps = Omit<InputProps, 'placeholder' | 'type' | 'maxLength' | 'onChange'> & {
  placeholder: string;
  onAddOwnerName: React.ChangeEventHandler<HTMLInputElement>;
  refCallback?: (inputElement: HTMLInputElement) => void;
};

const OwnerNameInput: React.FC<OwnerNameInputProps> = ({ isError = false, value, onAddOwnerName, id, refCallback }) => {
  return (
    <Input
      id={id}
      maxLength={50}
      type="text"
      placeholder="JOHN DOE"
      value={value}
      isError={isError}
      ref={refCallback}
      onChange={onAddOwnerName}
    />
  );
};

export default OwnerNameInput;
