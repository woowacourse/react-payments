import {
  ERROR_MESSAGE,
  PAYMENTS_INPUT_MESSAGE,
  PAYMENTS_MESSAGE,
} from '../constants/message';

import { BOUND } from '../constants/number';
import FormItem from './FormItem';
import SectionTitle from './SectionTitle';
import TextInput from './TextInput';
import TextInputContainer from './InputContainer';
import { ValidateInput } from '../hooks/useValidateInput';
import useLastValidValue from '../hooks/useLastValidValue';

interface props {
  monthValidateInput: ValidateInput;
  yearValidateInput: ValidateInput;
}

export default function ExpiredDate({
  monthValidateInput,
  yearValidateInput,
}: props) {
  const isValidMonth = monthValidateInput.errorMessage === '';
  const isValidYear = yearValidateInput.errorMessage === '';

  const isFullFilled =
    monthValidateInput.inputValue.length ===
      BOUND.cardExpiredMonthStringUpper &&
    yearValidateInput.inputValue.length === BOUND.cardExpiredYearStringUpper;

  const inputMonth = Number(monthValidateInput.inputValue);
  const inputYear = Number(yearValidateInput.inputValue) + 2000;
  const inputDate = new Date(inputYear, inputMonth);
  const nowMonth = new Date().getMonth();
  const nowYear = new Date().getFullYear();
  const nowDate = new Date(nowYear, nowMonth);

  const isExpired = inputDate < nowDate;

  const isFullFilledAndExpired = isFullFilled && isExpired;
  const isFullFilledAndExpiredErrorMessage = isFullFilledAndExpired
    ? ERROR_MESSAGE.wrongExpiredDate
    : '';

  const totalErrorMessage = useLastValidValue({
    checkValues: [
      monthValidateInput.errorMessage,
      yearValidateInput.errorMessage,
      isFullFilledAndExpiredErrorMessage,
    ],
    invalidValues: [''],
  });

  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.expiredDateTitle}
        description={PAYMENTS_MESSAGE.expiredDateDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.expiredDateLabel}
        errorMessage={totalErrorMessage}
      >
        <TextInputContainer
          childrenBorderColor={isFullFilledAndExpired ? 'error' : undefined}
        >
          <TextInput
            placeholder={PAYMENTS_INPUT_MESSAGE.expiredDateMonthPlaceHolder}
            onChange={monthValidateInput.onChange}
            value={monthValidateInput.inputValue}
            borderColor={isValidMonth ? undefined : 'error'}
            aria-invalid={!(isValidMonth && !isFullFilledAndExpired)}
          />
          <TextInput
            placeholder={PAYMENTS_INPUT_MESSAGE.expiredDateYearPlaceHolder}
            onChange={yearValidateInput.onChange}
            value={yearValidateInput.inputValue}
            borderColor={isValidYear ? undefined : 'error'}
            aria-invalid={!(isValidYear && !isFullFilledAndExpired)}
          />
        </TextInputContainer>
      </FormItem>
    </section>
  );
}
