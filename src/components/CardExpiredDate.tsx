import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from '../constants/message';

import { BOUND } from '../constants/number';
import FormItem from './FormItem';
import SectionTitle from './SectionTitle';
import TextInput from './TextInput';
import TextInputContainer from './InputContainer';
import { UseCardExpiredDate } from '../hooks/useCardExpiredDate';

interface props {
  useCardExpiredDate: UseCardExpiredDate;
}

export default function ExpiredDate({ useCardExpiredDate }: props) {
  const {
    isValid: isValidExpiredDate,
    isValidMonth,
    isValidYear,
    isFullFilled,
  } = useCardExpiredDate;
  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.expiredDateTitle}
        description={PAYMENTS_MESSAGE.expiredDateDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.expiredDateLabel}
        errorMessage={useCardExpiredDate.errorMessage}
      >
        <TextInputContainer
          childrenBorderColor={
            isFullFilled && !isValidExpiredDate && isValidMonth && isValidYear
              ? 'error'
              : undefined
          }
        >
          <TextInput
            placeholder={PAYMENTS_INPUT_MESSAGE.expiredDateMonthPlaceHolder}
            onChange={useCardExpiredDate.monthOnChange}
            maxLength={BOUND.cardExpiredMonthStringUpper}
            borderColor={isValidMonth ? undefined : 'error'}
            aria-invalid={!(isValidMonth && isValidExpiredDate)}
          />
          <TextInput
            placeholder={PAYMENTS_INPUT_MESSAGE.expiredDateYearPlaceHolder}
            onChange={useCardExpiredDate.yearOnChange}
            maxLength={BOUND.cardExpiredYearStringUpper}
            borderColor={isValidYear ? undefined : 'error'}
            aria-invalid={!(isValidYear && !isValidExpiredDate)}
          />
        </TextInputContainer>
      </FormItem>
    </section>
  );
}
