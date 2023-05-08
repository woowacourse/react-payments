import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormFieldProps } from './types';

import useCardInfoForm from './hooks/useCardInfoForm';
import useFieldFilled from './hooks/useFieldFilled';
import useCardFormValue from '../../hooks/useCardFormValue';
import { CVC_MESSAGE } from './constants/message';

const CvcField = ({ inputRefs }: CardFormFieldProps) => {
  const { cvc } = useCardFormValue();
  const { handleNumberChange } = useCardInfoForm();
  const isFilled = useFieldFilled(inputRefs);

  return (
    <TextField
      label={CVC_MESSAGE.label}
      size="small"
      tooltipMessage={CVC_MESSAGE.tooltip}
      toggleHelperText={!isFilled}
      helperText={{
        text: CVC_MESSAGE.helper,
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
