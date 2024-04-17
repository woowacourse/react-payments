import Input from './Input';
import TitleContainer from './TitleContainer';
import styled from 'styled-components';
import { useState } from 'react';
import * as S from '../styles/common.style';

const CardOwnerInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

interface CardOwnerInputProps {
  setOwner: React.Dispatch<React.SetStateAction<string>>;
}

function CardOwnerInput({ setOwner }: CardOwnerInputProps) {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onOwnerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateOwner(e.target.value)) {
      setIsValid(false);
      setOwner('');
      return;
    }

    setIsValid(true);
    setOwner(e.target.value.toUpperCase());
  };

  const validateOwner = (value: string) => {
    const regExp = /^[a-zA-Z][a-zA-Z ]+$/;

    if (value.length === 0) {
      setErrorMessage('');
      return true;
    }

    if (!regExp.test(value)) {
      setErrorMessage('소유자 이름은 모두 영어 대소문자로 구성되어야 합니다.');
      return false;
    }

    if (value.length > 30) {
      setErrorMessage('소유자 이름은 30자 이하여야 합니다.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  return (
    <div>
      <TitleContainer title="카드 소유자 이름을 입력해 주세요" />
      <CardOwnerInputContainer>
        <S.InputLabel>소유자 이름</S.InputLabel>
        <Input type="text" maxLength={30} placeholder="STEVEN KING" onChange={onOwnerChange} isValid={isValid}></Input>
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      </CardOwnerInputContainer>
    </div>
  );
}

export default CardOwnerInput;
