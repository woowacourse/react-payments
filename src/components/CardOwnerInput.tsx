import Input from './Input';
import styled from 'styled-components';
import { TitleContainer, Title } from '../styles/TitleContainer.styled';
import { useState } from 'react';

const CardOwnerInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
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
    const regExp = /^[a-zA-Z]+$/;

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
      <TitleContainer>
        <Title>카드 소유자 이름을 입력해 주세요</Title>
      </TitleContainer>
      <CardOwnerInputContainer>
        <InputLabel>소유자 이름</InputLabel>
        <Input type="text" maxLength={30} placeholder="STEVEN KING" onChange={onOwnerChange} isValid={isValid}></Input>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </CardOwnerInputContainer>
    </div>
  );
}

export default CardOwnerInput;
