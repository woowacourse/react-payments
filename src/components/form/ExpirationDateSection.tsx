import {ChangeEvent, useState} from 'react';
import Description from '../description/Description';
import InputField from '../inputField/InputField';
import Title from '../title/Title';
import Input from '../input/Input';
import findErrorOrder from '../../utils/findErrorOrder';
import isNumberWithinRange from '../../utils/isNumberWithinRange';
import styled from 'styled-components';
import {ExpirationDate} from '../../type/Card';
import {MESSAGE} from '../constants/error';

const INPUT_MAX_LENGTH = 2;
const ORDER_LABEL = ['month', 'year'] as const;
const CURRENT_YEAR = new Date().getFullYear() % 100;
const INIT_EXPIRATION_DATE_ERROR = {
  month: '',
  year: '',
};

type Props = {
  value: ExpirationDate;
  onChange: (
    e: ChangeEvent<HTMLInputElement>,
    order: keyof ExpirationDate
  ) => void;
  onError: (name: string, isError: boolean) => void;
};

const expirationErrorRule = [
  {
    error: MESSAGE.INVALID_NUMBER,
    validate: (date: string) => !isNumberWithinRange(date, INPUT_MAX_LENGTH),
  },
  {
    error: MESSAGE.MONTH_RANGE,
    validate: (date: string, order: keyof ExpirationDate) => {
      if (order === 'month') {
        const month = Number(date);
        return month < 0 || month > 12;
      }
    },
  },
  {
    error: MESSAGE.YEAR_RANGE(CURRENT_YEAR),
    validate: (date: string, order: keyof ExpirationDate) => {
      if (order === 'year') {
        const year = Number(date);
        return year < CURRENT_YEAR && year >= 0;
      }
    },
  },
];

const ExpirationDateSection = ({value, onChange, onError}: Props) => {
  const [error, setError] = useState(INIT_EXPIRATION_DATE_ERROR);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement>,
    order: keyof ExpirationDate
  ) => {
    onChange(e, order);

    const {value, name} = e.target;
    const matchedError = expirationErrorRule.find((rule) =>
      rule.validate(value, order)
    );

    setError((prev) => ({
      ...prev,
      [order]: matchedError?.error ?? '',
    }));

    matchedError ? onError(name, true) : onError(name, false);
  };

  const handleFocusout = (order: keyof ExpirationDate, value: string) => {
    if (value.length < INPUT_MAX_LENGTH)
      setError((prev) => ({...prev, [order]: MESSAGE.MONTH_FORMAT}));
  };

  return (
    <CardNumberWrap>
      <Title>카드 유효기간을 입력해 주세요</Title>
      <Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
      <InputField label="유효기간" errorMessage={findErrorOrder(error)}>
        {ORDER_LABEL.map((label) => (
          <Input
            name="expirationDate"
            isError={error[label].length > 0}
            placeholder={label === 'month' ? 'MM' : 'YY'}
            value={value[label]}
            maxLength={INPUT_MAX_LENGTH}
            onChange={(e) => handleInput(e, label)}
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
