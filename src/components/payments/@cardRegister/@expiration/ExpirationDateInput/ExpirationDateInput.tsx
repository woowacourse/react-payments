import Input, { InputProps } from '@components/common/Input/Input';

type ExpirationDateInputProps = Omit<InputProps, 'type' | 'maxLength' | 'onChange'> & {
  onAddExpirationDate: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: 'MM' | 'YY';
  refCallback?: (element: HTMLInputElement) => void;
};

const ExpirationDateInput: React.FC<ExpirationDateInputProps> = ({ onAddExpirationDate, refCallback, ...rest }) => {
  return <Input maxLength={2} type="text" ref={refCallback} onChange={onAddExpirationDate} {...rest} />;
};

export default ExpirationDateInput;
