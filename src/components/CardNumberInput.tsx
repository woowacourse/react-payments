import { useState } from 'react';

import Input from './Input';
import styled from 'styled-components';
import { TitleContainer, Title, SubTitle } from '../styles/TitleContainer.styled';

const CardNumberInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  width: 100%;
`;

const InputLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`;

const ErrorMessage = styled.p`
  color: #ff3d3d;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13px;
`;

interface CardNumberInputProps {
  cardNumber: string[];
  setCardNumber: React.Dispatch<React.SetStateAction<string[]>>;
}

function CardNumberInput({ cardNumber, setCardNumber }: CardNumberInputProps) {
  const [isValid, setIsValid] = useState<boolean[]>([true, true, true, true]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateCardNumber = (number: string) => {
    if (number.length === 0) {
      setErrorMessage('');
      return true;
    }

    if (Number.isNaN(Number(number)) || number.length !== 4) {
      setErrorMessage('카드 번호는 4자리의 숫자여야 합니다.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const onCardNumberChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isInputValid = validateCardNumber(value);

    const newIsValid = [...isValid];
    newIsValid[index] = isInputValid;
    setIsValid(newIsValid);

    if (!isInputValid) {
      const newCardNumber = [...cardNumber];
      newCardNumber[index] = '';
      setCardNumber(newCardNumber);

      return;
    }

    const newCardNumber = [...cardNumber];
    newCardNumber[index] = value;
    setCardNumber(newCardNumber);
  };

  return (
    <div>
      <TitleContainer>
        <Title>결제할 카드 번호를 입력해 주세요.</Title>
        <SubTitle>본인 명의의 카드만 결제 가능합니다.</SubTitle>
      </TitleContainer>
      <CardNumberInputContainer>
        <InputLabel>카드 번호</InputLabel>
        <InputContainer>
          {Array.from({ length: 4 }).map((_, index) => (
            <Input
              key={index}
              type="text"
              placeholder="1234"
              maxLength={4}
              onChange={onCardNumberChange(index)}
              isValid={isValid[index]}
            ></Input>
          ))}
        </InputContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </CardNumberInputContainer>
    </div>
  );
}

export default CardNumberInput;
