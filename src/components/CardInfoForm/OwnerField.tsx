import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormFieldProps } from './types';

import useCardFormValue from '../../hooks/useCardFormValue';
import useCardInfoForm from './hooks/useCardInfoForm';

const OwnerField = ({ inputRefs }: CardFormFieldProps) => {
  const { owner } = useCardFormValue();
  const { handleOwnerChange } = useCardInfoForm();

  return (
    <TextField
      label="카드 소유자 이름(선택)"
      valueLength={owner.length}
      maxLength={20}
      helperText={{ text: '영문자만 입력 가능합니다.', color: 'normal' }}
      toggleHelperText
    >
      <Input
        type="text"
        name="owner"
        maxLength={20}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        value={owner}
        onChange={handleOwnerChange}
        ref={inputRefs[0]}
      />
    </TextField>
  );
};

export default OwnerField;
