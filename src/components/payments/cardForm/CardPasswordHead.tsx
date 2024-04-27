import {
  PAYMENTS_INPUT_MESSAGE,
  PAYMENTS_MESSAGE,
} from '../../../constants/message';

import { BOUND } from '../../../constants/number';
import FormItem from '../../FormItem';
import SectionTitle from '../../SectionTitle';
import TextInput from '../../TextInput';
import TextInputContainer from '../../InputContainer';
import { UseCardPasswordHead } from '../../../hooks/payments/useCardPasswordHead';

interface props {
  useCardPasswordHead: UseCardPasswordHead;
}

export default function CardPasswordHead({
  useCardPasswordHead: { errorMessage, onChange },
}: props) {
  const isError = errorMessage !== '';
  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.cardPasswordHeadTitle}
        description={PAYMENTS_MESSAGE.cardPasswordHeadDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardPasswordHeadLabel}
        errorMessage={errorMessage}
      >
        <TextInputContainer>
          <TextInput
            type='password'
            placeholder={PAYMENTS_INPUT_MESSAGE.cardPasswordHeadPlaceHolder}
            onChange={onChange}
            maxLength={BOUND.cardPasswordHeadUpper}
            borderColor={isError ? 'error' : undefined}
            aria-invalid={isError}
            autoFocus
            tabIndex={10}
          />
        </TextInputContainer>
      </FormItem>
    </section>
  );
}
