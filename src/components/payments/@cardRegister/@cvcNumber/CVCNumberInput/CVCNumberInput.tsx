import Input, { InputProps } from '@components/common/Input/Input';

type CVCNumberInputProps = Omit<InputProps, 'type' | 'maxLength' | 'onChange'> & {
  onAddCVCNumber: React.ChangeEventHandler<HTMLInputElement>;
  refCallback: (inputElement: HTMLInputElement) => void;
  onFocusCVCNumberField?: () => void;
};

const CVCNumberInput: React.FC<CVCNumberInputProps> = ({
  onAddCVCNumber,
  onFocusCVCNumberField,
  refCallback,
  ...rest
}) => {
  return (
    <Input
      maxLength={3}
      type="text"
      placeholder={'CVCNumber 번호를 입력해주세요'}
      onChange={onAddCVCNumber}
      onFocus={onFocusCVCNumberField}
      onBlur={onFocusCVCNumberField}
      ref={refCallback}
      {...rest}
    />
  );
};

export default CVCNumberInput;
