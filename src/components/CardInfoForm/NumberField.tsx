import Input from '../common/Input';
import TextField from '../common/TextField';
import { CardFormFieldProps } from './types';

import useCardInfoForm from './hooks/useCardInfoForm';
import useFieldFilled from './hooks/useFieldFilled';
import useCardFormValue from '../../hooks/useCardFormValue';
import { CARD_NUMBER_MESSAGE } from './constants/message';
import { CARD_NUMBER_FIELDS } from './constants/fieldName';

const NumberField = ({ inputRefs }: CardFormFieldProps) => {
  const { number } = useCardFormValue();
  const { handleNumberChange } = useCardInfoForm();
  const isFilled = useFieldFilled(inputRefs);

  return (
    <TextField
      label={CARD_NUMBER_MESSAGE.label}
      size="fit"
      toggleHelperText={!isFilled}
      helperText={{ text: CARD_NUMBER_MESSAGE.helper, color: 'error' }}
    >
      {CARD_NUMBER_FIELDS.map((field, index) =>
        field !== 'dash' ? (
          <Input
            key={`card-number-${field}`}
            type={index < 4 ? 'text' : 'password'}
            name="number"
            inputMode="numeric"
            minLength={4}
            maxLength={4}
            required
            value={number[field]}
            onChange={handleNumberChange}
            ref={inputRefs[index / 2]}
            placeholder={CARD_NUMBER_MESSAGE.placeholder}
            align="center"
            data-property={field}
          />
        ) : (
          <span key={`card-number-separator-${index}`}>-</span>
        ),
      )}
    </TextField>
  );
};

export default NumberField;
