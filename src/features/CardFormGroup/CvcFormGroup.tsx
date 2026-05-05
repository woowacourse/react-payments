import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';
import { isNumericString } from '@/core/utils/validator';
import { useState } from 'react';

interface CvcFormGroupProps {
  cvc: string;
  handleChangeCvc: (value: string) => void;
}

type FieldState =
  | { status: 'idle' }
  | { status: 'valid' }
  | { status: 'invalid'; reason: 'type' | 'range' };

const ERROR_MESSAGE = {
  type: '숫자만 입력 가능합니다.',
  range: 'CVC를 전부 채워주세요.',
  default: '',
};

const CVC_LENGTH = 3;

export const CvcFormGroup = ({ cvc, handleChangeCvc: onChangeCvc }: CvcFormGroupProps) => {
  const [cvcState, setCvcState] = useState<FieldState>({ status: 'idle' });

  const handleChange = (value: string) => {
    if (value !== '' && !isNumericString(value)) {
      setCvcState({ status: 'invalid', reason: 'type' });
      return;
    }
    setCvcState(value.length === CVC_LENGTH ? { status: 'valid' } : { status: 'idle' });
    onChangeCvc(value);
  };

  const handleBlur = () => {
    if (cvcState.status === 'valid') return;
    if (cvc.length < CVC_LENGTH) setCvcState({ status: 'invalid', reason: 'range' });
  };

  const getErrorMessage = (state: FieldState) => {
    switch (state.status) {
      case 'invalid':
        return ERROR_MESSAGE[state.reason];
      default:
        return ERROR_MESSAGE.default;
    }
  };

  return (
    <FormGroup
      title="CVC 번호를 입력해 주세요"
      label="CVC"
      errorMessage={getErrorMessage(cvcState)}
    >
      <Input
        type="text"
        inputMode="numeric"
        value={cvc}
        maxLength={CVC_LENGTH}
        placeholder="123"
        isError={!!getErrorMessage(cvcState)}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
      />
    </FormGroup>
  );
};
