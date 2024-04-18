import Input, { InputProps } from '@components/common/Input/Input';

type CardNumberInputProps = Omit<InputProps, 'placeholder' | 'type' | 'maxLength' | 'onChange'> & {
  onAddCardNumber: React.ChangeEventHandler<HTMLInputElement>;
};

const CardNumberInput: React.FC<CardNumberInputProps> = ({ isError = false, value, onAddCardNumber }) => {
  return (
    <Input maxLength={4} placeholder="1234" type="number" value={value} isError={isError} onChange={onAddCardNumber} />
  );
};

export default CardNumberInput;
