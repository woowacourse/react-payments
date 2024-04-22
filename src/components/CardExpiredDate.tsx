import {
  ERROR_MESSAGE,
  PAYMENTS_INPUT_MESSAGE,
  PAYMENTS_MESSAGE,
} from '../constants/message';
import { isValidMonth, isValidYear } from '../domain/checkIsValid';

import { BOUND } from '../constants/number';
import { CardExpiredDate as CardExpiredDateType } from '../hooks/useCardInfo';
import FormItem from './FormItem';
import SectionTitle from './SectionTitle';
import TextInput from './TextInput';
import TextInputContainer from './InputContainer';
import useLastValidValue from '../hooks/useLastValidValue';
import useValidateInput from '../hooks/useValidateInput';
import useValidator from '../hooks/useValidator';

export default function CardExpiredDate({
  setCardExpiredDate,
}: {
  setCardExpiredDate: React.Dispatch<React.SetStateAction<CardExpiredDateType>>;
}) {
  const {
    input: month,
    onChange: monthOnChange,
    errorMessage: monthErrorMessage,
  } = useValidateInput({
    ...useMonthInputProps,
    setHook: (month: string) => {
      setCardExpiredDate([month, year]);
    },
  });

  const {
    input: year,
    onChange: yearOnChange,
    errorMessage: yearErrorMessage,
  } = useValidateInput({
    ...useYearInputProps,
    setHook: (year: string) => {
      setCardExpiredDate([month, year]);
    },
  });

  const isFullFilled = ([month, year]: CardExpiredDateType) => {
    return (
      month.length + year.length ===
      BOUND.cardExpiredMonthStringUpper + BOUND.cardExpiredYearStringUpper
    );
  };

  const isExpired = ([month, year]: CardExpiredDateType) => {
    const inputMonth = Number(month);
    const inputYear = Number(year) + 2000;
    const inputDate = new Date(inputYear, inputMonth);

    const nowMonth = new Date().getMonth();
    const nowYear = new Date().getFullYear();
    const nowDate = new Date(nowYear, nowMonth);

    return inputDate < nowDate;
  };

  const { errorMessage: invalidExpiredDateError, isError: isUnderMonth } =
    useValidator(
      [month, year],
      (arg: CardExpiredDateType) => !isFullFilled(arg) || !isExpired(arg),
      ERROR_MESSAGE.wrongExpiredDate
    );

  const errorMessage = useLastValidValue({
    checkValues: [monthErrorMessage, yearErrorMessage, invalidExpiredDateError],
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
        errorMessage={errorMessage}
      >
        <TextInputContainer
          childrenBorderColor={isUnderMonth ? 'error' : undefined}
        >
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
