import { useState } from 'react';
import TitleContainer from './TitleContainer';
import Input from './Input';
import styled from 'styled-components';
import * as S from '../styles/common.style';

const CardNumberInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
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
      <TitleContainer title="결제할 카드 번호를 입력해 주세요." subTitle="본인 명의의 카드만 결제 가능합니다." />
      <CardNumberInputContainer>
        <S.InputLabel>카드 번호</S.InputLabel>
        <S.InputContainer $length={4}>
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
        </S.InputContainer>
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      </CardNumberInputContainer>
    </div>
  );
}

export default CardNumberInput;
