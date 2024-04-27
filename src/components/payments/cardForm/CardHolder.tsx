import {
  PAYMENTS_INPUT_MESSAGE,
  PAYMENTS_MESSAGE,
} from '../../../constants/message';

import { BOUND } from '../../../constants/number';
import FormItem from '../../FormItem';
import SectionTitle from '../../SectionTitle';
import TextInput from '../../TextInput';
import TextInputContainer from '../../InputContainer';
import { UseCardHolder } from '../../../hooks/payments/useCardHolder';

interface props {
  useCardHolder: UseCardHolder;
}

export default function CardHolder({
  useCardHolder: { errorMessage, onChange },
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
            maxLength={BOUND.cardHolderLengthUpper}
            borderColor={isError ? 'error' : undefined}
            aria-invalid={!isError}
            style={{ textTransform: 'uppercase' }}
            autoFocus
            tabIndex={8}
          />
        </TextInputContainer>
      </FormItem>
    </section>
  );
}
