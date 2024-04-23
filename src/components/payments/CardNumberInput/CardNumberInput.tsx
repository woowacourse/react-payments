import Input, { InputProps } from '@components/common/Input/Input';

type CardNumberInputProps = Omit<InputProps, 'placeholder' | 'type' | 'maxLength' | 'onChange'> & {
  refCallback?: (inputElement: HTMLInputElement) => void;
  onAddCardNumber: React.ChangeEventHandler<HTMLInputElement>;
};

const CardNumberInput: React.FC<CardNumberInputProps> = ({
  isError = false,
  value,
  id,
  onAddCardNumber,
  refCallback,
}) => {
  return (
    <Input
      maxLength={4}
      placeholder="1234"
      type="text"
      id={id}
      value={value}
      isError={isError}
      ref={refCallback}
      onChange={onAddCardNumber}
    />
  );
};

export default CardNumberInput;
