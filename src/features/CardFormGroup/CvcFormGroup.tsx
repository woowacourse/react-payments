import { FormGroup } from '@/core/components/formGroup';
import { Input } from '@/core/components/input';
import { isNumericString } from '@/core/utils/validator';
import { useState } from 'react';

interface CvcFormGroupProps {
  cvc: string;
  handleChangeCvc: (value: string) => void;
}

type InputState = 'idle' | 'invalid' | 'touched' | 'valid';

const ERROR_MESSAGE = {
  TYPE: '숫자만 입력 가능합니다.',
  EMPTY: 'CVC를 전부 채워주세요.',
  DEFAULT: '',
};

export const CvcFormGroup = ({ cvc, handleChangeCvc: onChangeCvc }: CvcFormGroupProps) => {
  const [cvcState, setCvcState] = useState<InputState>('idle');

  const handleChange = (value: string) => {
    if (value !== '' && !isNumericString(value)) {
      setCvcState('invalid');
      return;
    }
    setCvcState(value.length === 3 ? 'valid' : 'idle');
    onChangeCvc(value);
  };

  const handleBlur = () => {
    if (cvcState === 'valid') return;
    setCvcState('touched');
  };

  const getErrorStatus = (state: InputState) => {
    switch (state) {
      case 'invalid':
        return { render: true, message: ERROR_MESSAGE.TYPE };
      case 'touched':
        return {
          render: true,
          message: cvc.length === 3 ? ERROR_MESSAGE.DEFAULT : ERROR_MESSAGE.EMPTY,
        };
      default:
        return { render: false, message: ERROR_MESSAGE.DEFAULT };
    }
  };

  return (
    <FormGroup
      title="CVC 번호를 입력해 주세요"
      label="CVC"
      errorMessage={getErrorStatus(cvcState).message}
    >
      <Input
        type="text"
        inputMode="numeric"
        value={cvc}
        maxLength={3}
        placeholder="123"
        isError={getErrorStatus(cvcState).render}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
      />
    </FormGroup>
  );
};
