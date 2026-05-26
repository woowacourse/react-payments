import type { CardInfo } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { ErrorStatus } from '../../types';
import { validate } from '../../utils';
import type { BaseValidationRule } from '../../types';
import { ERROR_MESSAGES } from '../../constants';

const MIN_CVC_LENGTH = 3;
const MAX_CVC_LENGTH = 4;

interface CVCFieldProps {
  value: CardInfo['cvc'];
  errorStatuses: [ErrorStatus];
  onUpdated: (value: CardInfo['cvc']) => void;
  onErrorUpdated: (errorStatuses: [ErrorStatus]) => void;
  onValid: (value: CardInfo['cvc']) => void;
  validationRules: BaseValidationRule[];
  ref?: React.Ref<HTMLInputElement>;
  serverError?: string;
}

export default function CVCField({
  value,
  errorStatuses,
  onUpdated,
  onErrorUpdated,
  onValid,
  validationRules,
  ref,
  serverError,
}: CVCFieldProps) {
  const errorStatus = errorStatuses[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const error = validate(validationRules, 'onChange', inputValue);
    onErrorUpdated([error]);
    if (error) return;

    onUpdated(inputValue);
    if (inputValue.length >= MIN_CVC_LENGTH) onValid(inputValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onErrorUpdated([validate(validationRules, 'onBlur', e.target.value)]);
  };

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: 'CVC 번호를 입력해 주세요',
    caption: '',
    errorMessage: serverError ?? (errorStatus ? ERROR_MESSAGES[errorStatus] : ''),
  };

  return (
    <FormField {...formFieldProps}>
      <label htmlFor="cvc">CVC</label>
      <Input
        ref={ref}
        autoFocus
        variant={errorStatus !== null || serverError !== null ? 'error' : 'default'}
        value={value}
        id="cvc"
        type="text"
        inputMode="numeric"
        placeholder="123"
        maxLength={MAX_CVC_LENGTH}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </FormField>
  );
}
