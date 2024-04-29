import { Input, InputProps } from '@components/index';

type CVCNumberInputProps = Omit<InputProps, 'placeholder' | 'type' | 'maxLength' | 'onChange' | 'nextRef'> & {
  onAddPasswordPrefix: React.ChangeEventHandler<HTMLInputElement>;
};

const PasswordPrefixInput: React.FC<CVCNumberInputProps> = ({
  id,
  isError = false,
  value = '',
  onAddPasswordPrefix,
}) => {
  return <Input id={id} maxLength={2} type="password" value={value} isError={isError} onChange={onAddPasswordPrefix} />;
};

export default PasswordPrefixInput;
