import Input, { InputProps } from '@components/common/Input/Input';

type CardNumberInputProps = Omit<InputProps, 'placeholder' | 'type' | 'maxLength' | 'onChange'> & {
  refCallback?: (inputElement: HTMLInputElement) => void;
  onAddCardNumber: React.ChangeEventHandler<HTMLInputElement>;
};

const CardNumberInput: React.FC<CardNumberInputProps> = (props) => {
  return <Input maxLength={4} placeholder="1234" {...props} />;
};

export default CardNumberInput;
