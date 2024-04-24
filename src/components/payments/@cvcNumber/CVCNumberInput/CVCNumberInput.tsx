import Input, { InputProps } from '@components/common/Input/Input';

type CVCNumberInputProps = Omit<InputProps, 'type' | 'maxLength' | 'onChange'> & {
  onAddCVCNumber: React.ChangeEventHandler<HTMLInputElement>;
};

const CVCNumberInput: React.FC<CVCNumberInputProps> = ({ isError = false, value, id, onAddCVCNumber }) => {
  return (
    <Input
      maxLength={3}
      type="text"
      placeholder={'CVCNumber 번호를 입력해주세요'}
      id={id}
      value={value}
      isError={isError}
      onChange={onAddCVCNumber}
    />
  );
};

export default CVCNumberInput;
