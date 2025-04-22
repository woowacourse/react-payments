import {useState} from 'react';
import Description from '../description/Description';
import InputField from '../inputField/InputField';
import Title from '../title/Title';
import Input from '../input/Input';
import findErrorOrder from '../../utils/findErrorOrder';
import isNumberWithinRange from '../../utils/isNumberWithinRange';
import {MESSAGE} from './constants/error';
import styled from 'styled-components';
import {ExpirationDate} from '../../type/Card';

const INPUT_MAX_LENGTH = 2;
const ORDER_LABEL = ['month', 'year'] as const;

type Props = {
  expirationDate: ExpirationDate;
  onExpirationDateChange: (order: keyof ExpirationDate, value: string) => void;
};

const expirationErrorRule = [
  {
    error: MESSAGE.INVALID_NUMBER,
    validate: (date: string) => {
      return !isNumberWithinRange(date, INPUT_MAX_LENGTH);
    },
  },
  {
    error: MESSAGE.MONTH_RANGE,
    validate: (order: keyof ExpirationDate, date: string) => {
      if (order === 'month') {
        const month = Number(date);
        return month < 0 || month > 12;
      }
    },
  },
  {
    error: (nowYear: number) => MESSAGE.YEAR_RANGE(nowYear),
    validate: (order: keyof ExpirationDate, date: string, nowYear: number) => {
      if (order === 'year') {
        const year = Number(date);
        return year < nowYear && year >= 0;
      }
    },
  },
];

const ExpirationDateSection = ({
  expirationDate,
  onExpirationDateChange,
}: Props) => {
  const [error, setError] = useState({
    month: '',
    year: '',
  });

  const nowYear = new Date().getFullYear() % 100;

  const handleInput = (order: keyof ExpirationDate, value: string) => {
    onExpirationDateChange(order, value);

    const matchedError = expirationErrorRule.find((rule) =>
      rule.validate(order, value, nowYear)
    );

    setError({
      ...error,
      [order]: matchedError
        ? typeof matchedError.error === 'function'
          ? matchedError.error(nowYear)
          : matchedError.error
        : '',
    });
  };

  const handleFocusout = (order: keyof ExpirationDate, value: string) => {
    if (value.length < INPUT_MAX_LENGTH)
      setError({...error, [order]: MESSAGE.MONTH_FORMAT});
  };

  return (
    <CardNumberWrap>
      <Title>카드 유효기간을 입력해 주세요</Title>
      <Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
      <InputField label="유효기간" errorMessage={findErrorOrder(error)}>
        {ORDER_LABEL.map((label) => (
          <Input
            isError={error[label].length > 0}
            placeholder={label === 'month' ? 'MM' : 'YY'}
            value={expirationDate[label]}
            maxLength={INPUT_MAX_LENGTH}
            onChange={(e) => handleInput(label, e.target.value)}
            onBlur={(e) => handleFocusout(label, e.target.value)}
          />
        ))}
      </InputField>
    </CardNumberWrap>
  );
};

export default ExpirationDateSection;

const CardNumberWrap = styled.div`
  height: 130px;
`;
