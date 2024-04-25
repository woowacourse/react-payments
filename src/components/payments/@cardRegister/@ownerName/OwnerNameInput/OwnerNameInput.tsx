import Input, { InputProps } from '@components/common/Input/Input';

type OwnerNameInputProps = Omit<InputProps, 'placeholder' | 'type' | 'maxLength' | 'onChange'> & {
  onAddOwnerName: React.ChangeEventHandler<HTMLInputElement>;
  refCallback?: (inputElement: HTMLInputElement) => void;
};

const OwnerNameInput: React.FC<OwnerNameInputProps> = ({ onAddOwnerName, refCallback, ...rest }) => {
  return <Input maxLength={50} placeholder="JOHN DOE" ref={refCallback} onChange={onAddOwnerName} {...rest} />;
};

export default OwnerNameInput;
