import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from '../constants/message';

import FormItem from './FormItem';
import SectionTitle from './SectionTitle';
import TextInput from './TextInput';
import TextInputContainer from './InputContainer';
import { ValidateInput } from '../hooks/useValidateInput';

interface props {
  validateInput: ValidateInput;
}

export default function CardHolder({
  validateInput: { inputValue: holder, onChange, errorMessage },
}: props) {
  const isError = Boolean(errorMessage);
  return (
    <section>
      <SectionTitle title={PAYMENTS_MESSAGE.cardHolderTitle} />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardHolderLabel}
        errorMessage={errorMessage}
      >
        <TextInputContainer>
          <TextInput
            placeholder={PAYMENTS_INPUT_MESSAGE.cardHolderPlaceHolder}
            onChange={onChange}
            value={holder}
            borderColor={isError ? 'error' : undefined}
            aria-invalid={!isError}
          />
        </TextInputContainer>
      </FormItem>
    </section>
  );
}
