import {Dispatch, SetStateAction, useState} from 'react';
import Description from '../description/Description';
import Input from '../input/Input';
import InputField from '../inputField/InputField';
import Title from '../title/Title';
import findErrorOrder from '../../utils/findErrorOrder';
import {CardNumber} from '../../App';
import isNumberWithinRange from '../../utils/isNumberWithinRange';
import {MESSAGE} from './constants/error';
import styled from 'styled-components';

const INPUT_MAX_LENGTH = 4;

type Props = {
  cardNumber: CardNumber;
  setCardNumber: Dispatch<SetStateAction<CardNumber>>;
};

const CardNumber = ({cardNumber, setCardNumber}: Props) => {
  const [error, setError] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const handleInput = (order: keyof CardNumber, value: string) => {
    setCardNumber({...cardNumber, [order]: value});

    if (!isNumberWithinRange(value, INPUT_MAX_LENGTH)) {
      setError({...error, [order]: MESSAGE.INVALID_NUMBER});
      return;
    }

    setError({...error, [order]: ''});
  };

  const handleFocusout = (order: keyof CardNumber, value: string) => {
    if (value.length < INPUT_MAX_LENGTH)
      setError({
        ...error,
        [order]: MESSAGE.INPUT_LENGTH_LIMIT(INPUT_MAX_LENGTH),
      });
  };

  const inputs = Array.from({length: INPUT_MAX_LENGTH}, (_, index: number) => {
    const orderLabels = ['first', 'second', 'third', 'fourth'] as const;

    return (
      <Input
        isError={error[orderLabels[index]].length > 0}
        placeholder="1234"
        value={cardNumber[orderLabels[index]]}
        maxLength={INPUT_MAX_LENGTH}
        handleInput={(numbers) => handleInput(orderLabels[index], numbers)}
        handleFocusout={(numbers) =>
          handleFocusout(orderLabels[index], numbers)
        }
      />
    );
  });

  return (
    <CardNumberWrap>
      <Title>결제할 카드 번호를 입력해 주세요</Title>
      <Description>본인 명의의 카드만 결제 가능합니다.</Description>
      <InputField
        label="카드 번호"
        inputs={inputs}
        errorMessage={findErrorOrder(error)}
      />
    </CardNumberWrap>
  );
};

export default CardNumber;

const CardNumberWrap = styled.div`
  height: 130px;
`;
