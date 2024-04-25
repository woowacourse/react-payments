import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from '../constants/message';

import { BOUND } from '../constants/number';
import FormItem from './FormItem';
import SectionTitle from './SectionTitle';
import TextInput from './TextInput';
import TextInputContainer from './InputContainer';
import { UseCardNumbers } from '../hooks/useCardNumbers';

interface props {
  useCardNumbers: UseCardNumbers;
}
export default function CardNumbers({ useCardNumbers }: props) {
  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.cardNumbersTitle}
        description={PAYMENTS_MESSAGE.cardNumberDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardNumberLabel}
        errorMessage={useCardNumbers.errorMessage}
      >
        <TextInputContainer>
          {useCardNumbers.cardNumberOnChanges.map((onChange, idx) => (
            <TextInput
              key={idx}
              placeholder={PAYMENTS_INPUT_MESSAGE.cardNumberPlaceHolder}
              onChange={onChange}
              borderColor={
                useCardNumbers.isValidNumberParts[idx] ? undefined : 'error'
              }
              aria-invalid={!useCardNumbers.isValidNumberParts[idx]}
              maxLength={BOUND.cardNumbersOnePartUpper}
            />
          ))}
        </TextInputContainer>
      </FormItem>
    </section>
  );
}
