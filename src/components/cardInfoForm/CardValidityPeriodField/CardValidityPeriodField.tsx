import styled from '@emotion/styled';
import Input from '../../common/Input/Input';
import { useId } from 'react';

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
  return (
    <div>
      <Label htmlFor={`cardValidityPeriod-${id}-${month}`}>유효기간</Label>
      <InputWrapper>
        <Input
          isError={isErrorMonth}
          type="tel"
          name="cardValidityPeriod"
          id={`cardValidityPeriod-${id}-${month}`}
          value={month}
          aria-labelledby="cardValidityPeriod"
          onChange={(e) => onChange(e, 'month')}
          placeholder="MM"
          maxLength={2}
          regexString={/^\d*$/}
          autoFocus={true}
        />
        <Input
          isError={isErrorYear}
          type="tel"
          name="cardValidityPeriod"
          id={`cardValidityPeriod-${id}-${year}`}
          value={year}
          aria-labelledby="cardValidityPeriod"
          onChange={(e) => onChange(e, 'year')}
          placeholder="YY"
          maxLength={2}
          regexString={/^\d*$/}
        />
      </InputWrapper>
    </div>
  );
}

export default CardValidityPeriodField;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;
const Label = styled.label`
  font-size: 12px;
`;
