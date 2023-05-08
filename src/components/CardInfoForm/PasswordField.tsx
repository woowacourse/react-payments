import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormFieldProps } from './types';

import useCardInfoForm from './hooks/useCardInfoForm';
import useFieldFilled from './hooks/useFieldFilled';
import useCardFormValue from '../../hooks/useCardFormValue';
import { PASSWORD_MESSAGE } from './constants/message';
import { PASSWORD_FIELDS } from './constants/fieldName';

const PasswordField = ({ inputRefs }: CardFormFieldProps) => {
  const { password } = useCardFormValue();
  const { handleNumberChange } = useCardInfoForm();
  const isFilled = useFieldFilled(inputRefs);

  return (
    <TextField
      label={PASSWORD_MESSAGE.label}
      size="medium"
      split
      toggleHelperText={!isFilled}
      helperText={{
        text: PASSWORD_MESSAGE.helper,
        color: 'error',
      }}
    >
      {PASSWORD_FIELDS.map((field, index) =>
        field !== 'secret' ? (
          <Input
            key={`password-${field}`}
            type="password"
            name="password"
            inputMode="numeric"
            minLength={1}
            maxLength={1}
            required
            value={password[field]}
            onChange={handleNumberChange}
            ref={inputRefs[index]}
            align="center"
            data-property={field}
          />
        ) : (
          <p key={`password-secret-${index}`}>﹡</p>
        ),
      )}
    </TextField>
  );
};

export default PasswordField;
