import Input, { InputProps } from '@components/common/Input/Input';

type CardNumberInputProps = Omit<InputProps, 'placeholder' | 'type' | 'maxLength' | 'onChange'> & {
  refCallback?: (inputElement: HTMLInputElement) => void;
  onAddCardNumber: React.ChangeEventHandler<HTMLInputElement>;
};

const CardNumberInput: React.FC<CardNumberInputProps> = ({ onAddCardNumber, refCallback, ...rest }) => {
  return <Input maxLength={4} placeholder="1234" ref={refCallback} onChange={onAddCardNumber} {...rest} />;
};

export default CardNumberInput;
