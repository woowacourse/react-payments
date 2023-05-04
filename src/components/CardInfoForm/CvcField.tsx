import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormFieldProps } from './types';

import useCardInfoForm from './hooks/useCardInfoForm';
import useFieldFilled from './hooks/useFieldFilled';
import useCardFormValue from '../../hooks/useCardFormValue';

const CvcField = ({ inputRefs }: CardFormFieldProps) => {
  const { cvc } = useCardFormValue();
  const { handleNumberChange } = useCardInfoForm();
  const isFilled = useFieldFilled(inputRefs);

  return (
    <TextField
      label="보안코드(CVC/CVV)"
      size="small"
      tooltipMessage="카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리가 CVC 번호입니다."
      toggleHelperText={!isFilled}
      helperText={{
        text: '보안코드 세 자리 숫자를 입력해 주세요.',
        color: 'error',
      }}
    >
      <Input
        type="password"
        name="cvc"
        inputMode="numeric"
        minLength={3}
        maxLength={3}
        required
        value={cvc}
        onChange={handleNumberChange}
        ref={inputRefs[0]}
        align="center"
      />
    </TextField>
  );
};

export default CvcField;
