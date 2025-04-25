import {ChangeEvent, useRef, useState} from 'react';
import Description from '../description/Description';
import Input from '../input/Input';
import InputField from '../inputField/InputField';
import Title from '../title/Title';
import findErrorOrder from '../../utils/findErrorOrder';
import isNumberWithinRange from '../../utils/isNumberWithinRange';
import styled from 'styled-components';
import {CardNumber} from '../../type/Card';
import {MESSAGE} from '../constants/error';

const INPUT_MAX_LENGTH = 4;
const ORDER_LABEL = ['first', 'second', 'third', 'fourth'] as const;
const INIT_CARD_NUMBER_ERROR = {
  first: '',
  second: '',
  third: '',
  fourth: '',
};

type Props = {
  value: CardNumber;
  onChange: (e: ChangeEvent<HTMLInputElement>, order: keyof CardNumber) => void;
  onError: (name: string, isError: boolean) => void;
};

const CardNumberSection = ({value, onChange, onError}: Props) => {
  const [error, setError] = useState(INIT_CARD_NUMBER_ERROR);
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
    const {value, name, nextElementSibling} = e.target;

    if (!isNumberWithinRange(value, INPUT_MAX_LENGTH)) {
      setError((prev) => ({...prev, [order]: MESSAGE.INVALID_NUMBER}));
      onError(name, true);
      return;
    }

    if (order === ORDER_LABEL[3] && value.length < INPUT_MAX_LENGTH) {
      setError((prev) => ({...prev, [order]: ''}));
      onError(name, true);
      return;
    }

    setError((prev) => ({...prev, [order]: ''}));
    Object.values(error).some((e) => e.length > 0) || onError(name, false);

    // if (value.length === INPUT_MAX_LENGTH) nextElementSibling?.focus();
    const index = ORDER_LABEL.findIndex((i) => i === order);

    if (value.length === INPUT_MAX_LENGTH && inputRefs[index + 1])
      inputRefs[index + 1].current?.focus();
  };

  const handleFocusout = (order: keyof CardNumber, value: string) => {
    if (value.length < INPUT_MAX_LENGTH)
      setError((prev) => ({
        ...prev,
        [order]: MESSAGE.INPUT_LENGTH_LIMIT(INPUT_MAX_LENGTH),
      }));
  };

  return (
    <CardNumberWrap>
      <Title>결제할 카드 번호를 입력해 주세요</Title>
      <Description>본인 명의의 카드만 결제 가능합니다.</Description>
      <InputField label="카드 번호" errorMessage={findErrorOrder(error)}>
        {ORDER_LABEL.map((label, idx) => (
          <Input
            key={label}
            ref={inputRefs[idx]}
            name="cardNumber"
            isError={error[label].length > 0}
            placeholder="1234"
            value={value[label]}
            maxLength={INPUT_MAX_LENGTH}
            autoFocus={label === 'first'}
            onChange={(e) => handleInput(e, label)}
            onBlur={(e) => handleFocusout(label, e.target.value)}
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
