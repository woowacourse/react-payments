import { useState } from 'react';
import Input from './Input';
import styled from 'styled-components';
import { TitleContainer, Title, SubTitle } from '../styles/TitleContainer.styled';

const CardExpirationInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  width: 100%;
`;

const InputLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`;

interface CardExpirationInputProps {
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
}

function CardExpirationInput({ setMonth, setYear }: CardExpirationInputProps) {
  const [isValid, setIsValid] = useState<boolean>(true);

  const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value);
  };

  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  return (
    <div>
      <TitleContainer>
        <Title>카드 유효기간을 입력해 주세요</Title>
        <SubTitle>월/년도(MMYY)를 순서대로 입력해 주세요.</SubTitle>
      </TitleContainer>
      <CardExpirationInputContainer>
        <InputLabel>유효기간</InputLabel>
        <InputContainer>
          <Input type="text" placeholder="MM" onChange={onMonthChange} isValid={isValid}></Input>
          <Input type="text" placeholder="YY" onChange={onYearChange} isValid={isValid}></Input>
        </InputContainer>
      </CardExpirationInputContainer>
    </div>
  );
}

export default CardExpirationInput;
