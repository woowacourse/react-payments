import Input from '../common/Input';
import TextField from '../common/TextField';
import { CardFormFieldProps } from './types';

import useCardInfoForm from './hooks/useCardInfoForm';
import useFieldFilled from './hooks/useFieldFilled';
import useCardFormValue from '../../hooks/useCardFormValue';
import { CARD_NUMBER_MESSAGE } from './constants/message';

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
      <Input
        type="text"
        name="number"
        inputMode="numeric"
        minLength={4}
        maxLength={4}
        required
        value={number.first}
        onChange={handleNumberChange}
        ref={inputRefs[0]}
        placeholder={CARD_NUMBER_MESSAGE.placeholder}
        align="center"
        data-property="first"
      />
      <span>-</span>
      <Input
        type="text"
        name="number"
        inputMode="numeric"
        minLength={4}
        maxLength={4}
        required
        value={number.second}
        onChange={handleNumberChange}
        ref={inputRefs[1]}
        placeholder={CARD_NUMBER_MESSAGE.placeholder}
        align="center"
        data-property="second"
      />
      <span>-</span>
      <Input
        type="password"
        name="number"
        inputMode="numeric"
        minLength={4}
        maxLength={4}
        required
        value={number.third}
        onChange={handleNumberChange}
        ref={inputRefs[2]}
        placeholder={CARD_NUMBER_MESSAGE.placeholder}
        align="center"
        data-property="third"
      />
      <span>-</span>
      <Input
        type="password"
        name="number"
        inputMode="numeric"
        minLength={4}
        maxLength={4}
        required
        value={number.fourth}
        onChange={handleNumberChange}
        ref={inputRefs[3]}
        placeholder={CARD_NUMBER_MESSAGE.placeholder}
        align="center"
        data-property="fourth"
      />
    </TextField>
  );
};

export default NumberField;
