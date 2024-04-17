import { useState } from 'react';
import TitleContainer from './TitleContainer';
import Input from './Input';
import styled from 'styled-components';
import * as S from '../styles/common.style';

const CardExpirationInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

interface CardExpirationInputProps {
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
}

function CardExpirationInput({ month, setMonth, setYear }: CardExpirationInputProps) {
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

    const date = new Date();

    if (Number(year) < date.getFullYear() - 2000) {
      setErrorMessage('유효하지 않은 기간입니다. 다시 확인해 주세요.');
      return false;
    }

    if (Number(year) === date.getFullYear() - 2000 && Number(month) < date.getMonth()) {
      setErrorMessage('유효하지 않은 기간입니다. 다시 확인해 주세요.');
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
      <TitleContainer title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MM/YY)를 순서대로 입력해 주세요." />
      <CardExpirationInputContainer>
        <S.InputLabel>유효기간</S.InputLabel>
        <S.InputContainer $length={2}>
          <Input type="text" placeholder="MM" maxLength={2} onChange={onMonthChange} isValid={isValidMonth}></Input>
          <Input type="text" placeholder="YY" maxLength={2} onChange={onYearChange} isValid={isValidYear}></Input>
        </S.InputContainer>
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      </CardExpirationInputContainer>
    </div>
  );
}

export default CardExpirationInput;
