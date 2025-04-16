import styled from '@emotion/styled';
import Input from '../../common/Input/Input';

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

  return (
    <div>
      <Label htmlFor="cardValidityPeriod-0" id="cardValidityPeriod">
        유효기간
      </Label>
      <InputWrapper>
        <Input
          isError={isErrorMonth}
          type="number"
          name="cardValidityPeriod"
          id={`cardValidityPeriod-${month}`}
          value={month}
          aria-labelledby="cardValidityPeriod"
          onChange={(e) => onChange(e, 'month')}
          placeholder="MM"
        />
        <Input
          isError={isErrorYear}
          type="number"
          name="cardValidityPeriod"
          id={`cardValidityPeriod-${year}`}
          value={year}
          aria-labelledby="cardValidityPeriod"
          onChange={(e) => onChange(e, 'year')}
          placeholder="YY"
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
