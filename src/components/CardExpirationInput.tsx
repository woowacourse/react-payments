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

const ErrorMessage = styled.p`
  color: #ff3d3d;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13px;
`;

interface CardExpirationInputProps {
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
}

function CardExpirationInput({ setMonth, setYear }: CardExpirationInputProps) {
  const [isValidMonth, setIsValidMonth] = useState<boolean>(true);
  const [isValidYear, setIsValidYear] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateMonth = (month: string) => {
    if (month.length === 0) {
      setErrorMessage('');
      return true;
    }

    if (Number.isNaN(Number(month)) || month.length !== 2) {
      setErrorMessage('유효기간의 월은 두 자리 숫자로 입력해 주세요.');
      return false;
    }

    if (Number(month) < 1 || Number(month) > 12) {
      setErrorMessage('유효기간의 월은 01~12 사이의 숫자로 입력해 주세요.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const validateYear = (year: string) => {
    if (year.length === 0) {
      setErrorMessage('');
      return true;
    }

    if (Number.isNaN(Number(year)) || year.length !== 2) {
      setErrorMessage('유효기간의 년도는 두 자리 숫자로 입력해 주세요.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateMonth(e.target.value)) {
      setIsValidMonth(false);
      setMonth('');
      return;
    }

    setIsValidMonth(true);
    setMonth(e.target.value);
  };

  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateYear(e.target.value)) {
      setIsValidYear(false);
      setYear('');
      return;
    }

    setIsValidYear(true);
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
          <Input type="text" placeholder="MM" maxLength={2} onChange={onMonthChange} isValid={isValidMonth}></Input>
          <Input type="text" placeholder="YY" maxLength={2} onChange={onYearChange} isValid={isValidYear}></Input>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </InputContainer>
      </CardExpirationInputContainer>
    </div>
  );
}

export default CardExpirationInput;
