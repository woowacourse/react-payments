import styled from '@emotion/styled';
import Input from '../../common/Input/Input';

type CardValidityPeriodType = {
  month: number;
  year: number;
};

type IsErrorType = {
  month: boolean;
  year: boolean;
};

interface CardValidityPeriodProps {
  cardValidityPeriod: CardValidityPeriodType;
  isError: IsErrorType;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: 'month' | 'year',
  ) => void;
}

function CardValidityPeriod({
  cardValidityPeriod,
  isError,
  onChange,
}: CardValidityPeriodProps) {
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
        />
        <Input
          isError={isErrorYear}
          type="number"
          name="cardValidityPeriod"
          id={`cardValidityPeriod-${year}`}
          value={year}
          aria-labelledby="cardValidityPeriod"
          onChange={(e) => onChange(e, 'year')}
        />
      </InputWrapper>
    </div>
  );
}

export default CardValidityPeriod;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;
const Label = styled.label`
  font-size: 12px;
`;
