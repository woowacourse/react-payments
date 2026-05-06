import type { CardInfo, ErrorStatus, Validate } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import { isNumber, sanitizeNumber } from '../../utils';
import { CVC_LENGTH, ERROR_MESSAGES } from '../../constants';
import { useErrorStatus } from '../../hooks/useErrorStatus.ts';

interface CVCFieldProps {
  value: CardInfo['cvc'];
  onUpdated: (value: CardInfo['cvc']) => void;
}

const validates: Validate<ErrorStatus>[] = [
  {
    type: ['change', 'blur'],
    rule: (inputValue: string) => inputValue === '',
    errorStatus: 'required',
  },
  {
    type: ['change'],
    rule: (inputValue: string) => !isNumber(inputValue),
    errorStatus: 'numberOnly',
  },
  {
    type: ['blur'],
    rule: (inputValue: string) => inputValue.length < CVC_LENGTH,
    errorStatus: 'invalidLength',
  },
];

export default function CVCField({ value, onUpdated }: CVCFieldProps) {
  const { errorStatus, onChange, onBlur } = useErrorStatus(validates);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    onUpdated(sanitizeNumber(e.target.value));
  };

  const handleBlur = onBlur;

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: 'CVC 번호를 입력해 주세요',
    caption: '',
    error: !!errorStatus,
    errorMessage: errorStatus ? ERROR_MESSAGES[errorStatus] : '',
  };

  return (
    <FormField {...formFieldProps}>
      <label htmlFor="cvc">CVC</label>
      <Input
        variant={errorStatus !== null ? 'error' : 'default'}
        value={value}
        id="cvc"
        type="text"
        inputMode="numeric"
        placeholder="123"
        maxLength={CVC_LENGTH}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </FormField>
  );
}
