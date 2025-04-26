import {ChangeEvent, useRef} from 'react';
import Description from '../description/Description';
import InputField from '../inputField/InputField';
import Title from '../title/Title';
import Input from '../input/Input';
import findErrorOrder from '../../utils/findErrorOrder';
import isNumberWithinRange from '../../utils/isNumberWithinRange';
import styled from 'styled-components';
import {ExpirationDate} from '../../type/Card';
import {MESSAGE} from '../constants/error';
import {FormFieldProps} from '../../type/FormField';

const INPUT_MAX_LENGTH = 2;
const ORDER_LABEL = ['month', 'year'] as const;
const CURRENT_YEAR = new Date().getFullYear() % 100;

// type Props = {
//   value: ExpirationDate;
//   onChange: (
//     e: ChangeEvent<HTMLInputElement>,
//     order: keyof ExpirationDate
//   ) => void;
//   onValidate: (
//     validateRule: {
//       error: string;
//       validate: (
//         date: string,
//         order: keyof ExpirationDate
//       ) => boolean | undefined;
//     }[],
//     e: ChangeEvent<HTMLInputElement>,
//     order: keyof ExpirationDate
//   ) => void;
//   onFocusout: (
//     e: ChangeEvent<HTMLInputElement>,
//     order: keyof ExpirationDate,
//     maxLength: number,
//     message: string
//   ) => void;
//   errorMessage: ExpirationDate;
// };

type Props = FormFieldProps<ExpirationDate, keyof ExpirationDate>;

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

const ExpirationDateSection = ({
  value,
  onChange,
  onValidate,
  onFocusout,
  errorMessage,
}: Props) => {
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleInput = (
    e: ChangeEvent<HTMLInputElement>,
    order: keyof ExpirationDate
  ) => {
    onChange(e, order);
    onValidate(expirationErrorRule, e, order);

    const refIndex = ORDER_LABEL.findIndex((i) => i === order);

    if (
      errorMessage[order].length === 0 &&
      e.target.value.length === INPUT_MAX_LENGTH &&
      inputRefs[refIndex + 1]
    )
      inputRefs[refIndex + 1].current?.focus();
  };

  return (
    <CardNumberWrap>
      <Title>카드 유효기간을 입력해 주세요</Title>
      <Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
      <InputField label="유효기간" errorMessage={findErrorOrder(errorMessage)}>
        {ORDER_LABEL.map((label, idx) => (
          <Input
            ref={inputRefs[idx]}
            name="expirationDate"
            isError={errorMessage[label].length > 0}
            placeholder={label === 'month' ? 'MM' : 'YY'}
            value={value[label]}
            maxLength={INPUT_MAX_LENGTH}
            autoFocus={label === 'month'}
            onChange={(e) => handleInput(e, label)}
            onBlur={(e) =>
              onFocusout(e, INPUT_MAX_LENGTH, MESSAGE.MONTH_FORMAT, label)
            }
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
