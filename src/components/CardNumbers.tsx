import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from '../constants/message';

import { BOUND } from '../constants/number';
import FormItem from './FormItem';
import SectionTitle from './SectionTitle';
import TextInput from './TextInput';
import TextInputContainer from './InputContainer';
import { ValidateInput } from '../hooks/useValidateInput';
import useLastValidValue from '../hooks/useLastValidValue';

interface props {
  partValidateInputs: ValidateInput[];
}
export default function CardNumbers({ partValidateInputs }: props) {
  const errorMessages = partValidateInputs.map(
    validateInput => validateInput.errorMessage
  );

  const errorMessage = useLastValidValue({
    checkValues: errorMessages,
    invalidValues: [''],
  });

  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.cardNumbersTitle}
        description={PAYMENTS_MESSAGE.cardNumberDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardNumberLabel}
        errorMessage={errorMessage}
      >
        <TextInputContainer>
          {partValidateInputs.map((validateInput, idx) => (
            <TextInput
              key={idx}
              placeholder={PAYMENTS_INPUT_MESSAGE.cardNumberPlaceHolder}
              onChange={validateInput.onChange}
              borderColor={
                validateInput.errorMessage === '' ? undefined : 'error'
              }
              aria-invalid={!(validateInput.errorMessage === '')}
              maxLength={BOUND.cardNumbersOnePartUpper}
            />
          ))}
        </TextInputContainer>
      </FormItem>
    </section>
  );
}
