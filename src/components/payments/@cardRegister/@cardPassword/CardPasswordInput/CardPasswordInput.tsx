import Input from '@components/common/Input/Input';
import type { InputProps } from '@components/common/Input/Input';

type CardNumberInputProps = Omit<InputProps, 'placeholder' | 'type' | 'maxLength' | 'onChange'> & {
  onAddCardPassword: React.ChangeEventHandler<HTMLInputElement>;
  refCallback: (inputElement: HTMLInputElement) => void;
};

const CardPasswordInput: React.FC<CardNumberInputProps> = ({ onAddCardPassword, refCallback, ...rest }) => {
  return <Input maxLength={2} type="password" onChange={onAddCardPassword} ref={refCallback} {...rest} />;
};

export default CardPasswordInput;
