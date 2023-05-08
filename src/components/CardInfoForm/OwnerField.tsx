import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormFieldProps } from './types';

import useCardFormValue from '../../hooks/useCardFormValue';
import useCardInfoForm from './hooks/useCardInfoForm';
import { CARD_OWNER_MESSAGE } from './constants/message';

const OwnerField = ({ inputRefs }: CardFormFieldProps) => {
  const { owner } = useCardFormValue();
  const { handleOwnerChange } = useCardInfoForm();

  return (
    <TextField
      label={CARD_OWNER_MESSAGE.label}
      valueLength={owner.length}
      maxLength={20}
      helperText={{ text: CARD_OWNER_MESSAGE.helper, color: 'normal' }}
      toggleHelperText
    >
      <Input
        type="text"
        name="owner"
        maxLength={20}
        placeholder={CARD_OWNER_MESSAGE.placeholder}
        value={owner}
        onChange={handleOwnerChange}
        ref={inputRefs[0]}
      />
    </TextField>
  );
};

export default OwnerField;
