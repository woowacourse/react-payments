import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormFieldProps } from './types';

import { EXPIRED_DATE_MESSAGE } from './constants/message';
import { EXPIRED_DATE_PATTERN } from './constants/pattern';
import { EXPIRED_DATE_FIELDS } from './constants/fieldName';
import useCardInfoForm from './hooks/useCardInfoForm';
import useFieldFilled from './hooks/useFieldFilled';
import useCardFormValue from '../../hooks/useCardFormValue';
import useExpiredDate from './hooks/useExpiredDate';

const ExpiredDateField = ({ inputRefs }: CardFormFieldProps) => {
  const { expiredDate } = useCardFormValue();
  const { handleNumberChange } = useCardInfoForm();

  const isFilled = useFieldFilled(inputRefs);
  const { errorMessage, handleDateInputBlur } = useExpiredDate();

  return (
    <TextField
      label={EXPIRED_DATE_MESSAGE.label}
      size="medium"
      toggleHelperText={!isFilled}
      helperText={{
        text: errorMessage,
        color: 'error',
      }}
    >
      {EXPIRED_DATE_FIELDS.map((field, index) =>
        field !== 'slash' ? (
          <Input
            key={`expired-date-${field}`}
            type="text"
            name="expiredDate"
            inputMode="numeric"
            minLength={2}
            maxLength={2}
            required
            placeholder={EXPIRED_DATE_MESSAGE.placeholder[field]}
            value={expiredDate[field]}
            onChange={handleNumberChange}
            onBlur={handleDateInputBlur}
            ref={inputRefs[index / 2]}
            align="center"
            data-property={field}
            pattern={EXPIRED_DATE_PATTERN[field]}
          />
        ) : (
          <span key={`expired-date-slash-${index}`}>/</span>
        ),
      )}
    </TextField>
  );
};

export default ExpiredDateField;
