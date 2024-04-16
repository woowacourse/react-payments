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

function CardExpirationInput() {
  return (
    <>
      <TitleContainer>
        <Title>카드 유효기간을 입력해 주세요</Title>
        <SubTitle>월/년도(MMYY)를 순서대로 입력해 주세요.</SubTitle>
      </TitleContainer>
      <CardExpirationInputContainer>
        <InputLabel>유효기간</InputLabel>
        <InputContainer>
          <Input type="number"></Input>
          <Input type="number"></Input>
        </InputContainer>
      </CardExpirationInputContainer>
    </>
  );
}

export default CardExpirationInput;
