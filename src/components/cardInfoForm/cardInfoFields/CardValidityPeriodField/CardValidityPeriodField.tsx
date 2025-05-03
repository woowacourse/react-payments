import { useId } from 'react';
import Input from '../../../common/Input/Input';
import useInputFocus from '../../../../hooks/useInputFocus';
import LabeledInput from '../../../common/LabeledInput/LabeledInput';

type CardValidityPeriodType = {
  month: string;
  year: string;
};

type IsErrorType = {
  month: boolean;
  year: boolean;
};

interface CardValidityPeriodFieldProps {
  cardValidityPeriod: CardValidityPeriodType;
  isError: IsErrorType;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: 'month' | 'year',
  ) => void;
}

function CardValidityPeriodField({
  cardValidityPeriod,
  isError,
  onChange,
}: CardValidityPeriodFieldProps) {
  const { month, year } = cardValidityPeriod;
  const { month: isErrorMonth, year: isErrorYear } = isError;

  const id = useId();

  const { inputRef, handleChange, handleKeyDown } = useInputFocus({
    inputValueLength: 2,
  });

  return (
    <LabeledInput
      htmlFor={`cardValidityPeriod-${id}-${month}`}
      label="유효기간"
      isMultiple
    >
      <>
        <Input
          isError={isErrorMonth}
          type="tel"
          name="cardValidityPeriod"
          id={`cardValidityPeriod-${id}-${month}`}
          value={month}
          aria-labelledby="cardValidityPeriod"
          onChange={(e) => {
            onChange(e, 'month');
            handleChange(0);
          }}
          onKeyDown={(e) => handleKeyDown(e, 0)}
          placeholder="MM"
          maxLength={2}
          regexString={/^\d*$/}
          autoFocus={true}
          ref={(el) => {
            if (el) {
              inputRef.current[0] = el;
            }
          }}
        />
        <Input
          isError={isErrorYear}
          type="tel"
          name="cardValidityPeriod"
          id={`cardValidityPeriod-${id}-${year}`}
          value={year}
          aria-labelledby="cardValidityPeriod"
          onChange={(e) => {
            onChange(e, 'year');
            handleChange(1);
          }}
          onKeyDown={(e) => handleKeyDown(e, 1)}
          placeholder="YY"
          maxLength={2}
          regexString={/^\d*$/}
          ref={(el) => {
            if (el) {
              inputRef.current[1] = el;
            }
          }}
        />
      </>
    </LabeledInput>
  );
}

export default CardValidityPeriodField;
