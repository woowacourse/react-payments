import Input from '@components/common/Input/Input';
import type { InputProps } from '@components/common/Input/Input';

type CardNumberInputProps = Omit<InputProps, 'placeholder' | 'type' | 'maxLength' | 'onChange'> & {
  onAddCardPassword: React.ChangeEventHandler<HTMLInputElement>;
};

const CardPasswordInput: React.FC<CardNumberInputProps> = ({ id, value, isError, onAddCardPassword }) => {
  return <Input maxLength={2} type="password" id={id} value={value} isError={isError} onChange={onAddCardPassword} />;
};

export default CardPasswordInput;
