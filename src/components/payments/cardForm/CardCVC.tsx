import {
  PAYMENTS_INPUT_MESSAGE,
  PAYMENTS_MESSAGE,
} from '../../../constants/message';

import { BOUND } from '../../../constants/number';
import FormItem from '../../FormItem';
import ID from '../../../constants/id';
import SectionTitle from '../../SectionTitle';
import TextInput from '../../TextInput';
import TextInputContainer from '../../InputContainer';
import { UseCardCVC } from '../../../hooks/payments/useCardCVC';

interface props {
  useCardCVC: UseCardCVC;
}

export default function CardCVC({
  useCardCVC: { errorMessage, onChange, isValid, wasChanged },
}: props) {
  return (
    <section>
      <SectionTitle title={PAYMENTS_MESSAGE.cardCVCTitle} />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardCVCLabel}
        errorMessage={errorMessage}
      >
        <TextInputContainer>
          <TextInput
            placeholder={PAYMENTS_INPUT_MESSAGE.cardCVCPlaceholder}
            onChange={onChange}
            maxLength={BOUND.cardCVCUpper}
            borderColor={!wasChanged || isValid ? undefined : 'error'}
            aria-invalid={!(!wasChanged || isValid)}
            tabIndex={9}
            id={ID.cvcInput}
          />
        </TextInputContainer>
      </FormItem>
    </section>
  );
}
