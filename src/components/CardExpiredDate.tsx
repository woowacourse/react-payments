import {
  ERROR_MESSAGE,
  PAYMENTS_INPUT_MESSAGE,
  PAYMENTS_MESSAGE,
} from '../constants/message';
import { isValidMonth, isValidYear } from '../domain/checkIsValid';

import { BOUND } from '../constants/number';
import FormItem from './FormItem';
import SectionTitle from './SectionTitle';
import TextInput from './TextInput';
import TextInputContainer from './InputContainer';
import { useEffect } from 'react';
import useLastValidValue from '../hooks/useLastValidValue';
import useValidateInput from '../hooks/useValidateInput';

export default function CardExpiredDate({
  setCardExpiredDate,
}: {
  setCardExpiredDate: React.Dispatch<React.SetStateAction<[string, string]>>;
}) {
  const {
    input: month,
    onChange: monthOnChange,
    errorMessage: monthErrorMessage,
  } = useValidateInput(useMonthInputProps);

  const {
    input: year,
    onChange: yearOnChange,
    errorMessage: yearErrorMessage,
  } = useValidateInput(useYearInputProps);

  const errorMessage = useLastValidValue({
    checkValues: [monthErrorMessage, yearErrorMessage],
    invalidValues: [''],
  });

  useEffect(() => {
    if (setCardExpiredDate) setCardExpiredDate([month, year]);
  }, [month, year, setCardExpiredDate]);

  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.expiredDateTitle}
        description={PAYMENTS_MESSAGE.expiredDateDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.expiredDateLabel}
        errorMessage={errorMessage}
      >
        <TextInputContainer>
          <TextInput
            placeholder={PAYMENTS_INPUT_MESSAGE.expiredDateMonthPlaceHolder}
            onChange={monthOnChange}
            value={month}
            borderColor={monthErrorMessage ? 'error' : undefined}
          />
          <TextInput
            placeholder={PAYMENTS_INPUT_MESSAGE.expiredDateYearPlaceHolder}
            onChange={yearOnChange}
            value={year}
            borderColor={yearErrorMessage ? 'error' : undefined}
          />
        </TextInputContainer>
      </FormItem>
    </section>
  );
}

const useMonthInputProps = {
  validatorPropsArray: [
    {
      checkIsValid: isValidMonth,
      shouldReflect: false,
      errorMessage: ERROR_MESSAGE.wrongMonth,
    },
  ],
  maxLength: BOUND.cardExpiredMonthStringUpper,
};

const useYearInputProps = {
  validatorPropsArray: [
    {
      checkIsValid: isValidYear,
      shouldReflect: false,
      errorMessage: ERROR_MESSAGE.wrongYear,
    },
  ],
  maxLength: BOUND.cardExpiredYearStringUpper,
};
