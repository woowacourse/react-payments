import {useState} from 'react';
import Description from '../description/Description';
import Input from '../input/Input';
import InputField from '../inputField/InputField';
import Title from '../title/Title';
import findErrorOrder from '../../utils/findErrorOrder';
import isNumberWithinRange from '../../utils/isNumberWithinRange';
import {MESSAGE} from './constants/error';
import styled from 'styled-components';
import {CardNumber} from '../../type/Card';

const INPUT_MAX_LENGTH = 4;
const ORDER_LABEL = ['first', 'second', 'third', 'fourth'] as const;

type Props = {
  cardNumber: CardNumber;
  onCardNumberChange: (order: keyof CardNumber, value: string) => void;
};

const CardNumberSection = ({cardNumber, onCardNumberChange}: Props) => {
  const [error, setError] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const handleInput = (order: keyof CardNumber, value: string) => {
    onCardNumberChange(order, value);

    if (!isNumberWithinRange(value, INPUT_MAX_LENGTH)) {
      setError((prev) => ({...prev, [order]: MESSAGE.INVALID_NUMBER}));
      return;
    }

    setError((prev) => ({...prev, [order]: ''}));
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
        {ORDER_LABEL.map((label) => (
          <Input
            isError={error[label].length > 0}
            placeholder="1234"
            value={cardNumber[label]}
            maxLength={INPUT_MAX_LENGTH}
            onChange={(e) => handleInput(label, e.target.value)}
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
