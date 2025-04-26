import {ChangeEvent, useRef} from 'react';
import Description from '../description/Description';
import Input from '../input/Input';
import InputField from '../inputField/InputField';
import Title from '../title/Title';
import findErrorOrder from '../../utils/findErrorOrder';
import isNumberWithinRange from '../../utils/isNumberWithinRange';
import styled from 'styled-components';
import {CardNumber} from '../../type/Card';
import {MESSAGE} from '../constants/error';
import {FormFieldProps} from '../../type/FormField';

const INPUT_MAX_LENGTH = 4;
const ORDER_LABEL = ['first', 'second', 'third', 'fourth'] as const;

type Props = FormFieldProps<CardNumber, keyof CardNumber>;

const errorRule = [
  {
    error: MESSAGE.INVALID_NUMBER,
    validate: (cardNumber: string) =>
      !isNumberWithinRange(cardNumber, INPUT_MAX_LENGTH),
  },
];

const CardNumberSection = ({
  value,
  onChange,
  onValidate,
  onFocusout,
  errorMessage,
}: Props) => {
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleInput = (
    e: ChangeEvent<HTMLInputElement>,
    order: keyof CardNumber
  ) => {
    onChange(e, order);

    onValidate(errorRule, e, order);

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
      <Title>결제할 카드 번호를 입력해 주세요</Title>
      <Description>본인 명의의 카드만 결제 가능합니다.</Description>
      <InputField label="카드 번호" errorMessage={findErrorOrder(errorMessage)}>
        {ORDER_LABEL.map((label, idx) => (
          <Input
            key={label}
            ref={inputRefs[idx]}
            name="cardNumber"
            isError={errorMessage[label].length > 0}
            placeholder="1234"
            value={value[label]}
            maxLength={INPUT_MAX_LENGTH}
            autoFocus={label === 'first'}
            onChange={(e) => handleInput(e, label)}
            onBlur={(e) =>
              onFocusout(
                e,
                INPUT_MAX_LENGTH,
                MESSAGE.INPUT_LENGTH_LIMIT(INPUT_MAX_LENGTH),
                label
              )
            }
          />
        ))}
      </InputField>
    </CardNumberWrap>
  );
};

export default CardNumberSection;

const CardNumberWrap = styled.div`
  height: 130px;
`;
