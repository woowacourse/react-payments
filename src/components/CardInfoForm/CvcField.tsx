import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormNumberFieldProps } from './types';

import useCardFormValue from '../../hooks/useCardFormValue';
import useInputError from '../../hooks/useInputError';

const CvcField = ({
  handleNumberChange,
  inputRefs,
}: CardFormNumberFieldProps) => {
  const { cvc } = useCardFormValue();
  const [isError, handleInputFocus, handleInputBlur] = useInputError();

  return (
    <TextField
      label="보안코드(CVC/CVV)"
      size="small"
      tooltipMessage="카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리가 CVC 번호입니다."
      isError={isError}
    >
      <Input
        type="password"
        name="cvc"
        inputMode="numeric"
        minLength={3}
        maxLength={3}
        required
        tabIndex={8}
        value={cvc}
        onChange={handleNumberChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRefs[7]}
        align="center"
      />
    </TextField>
  );
};

export default CvcField;
