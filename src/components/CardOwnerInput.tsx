import Input from './Input';
import styled from 'styled-components';
import { TitleContainer, Title } from '../styles/TitleContainer.styled';

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

function CardOwnerInput() {
  return (
    <div>
      <TitleContainer>
        <Title>카드 소유자 이름을 입력해 주세요</Title>
      </TitleContainer>
      <CardOwnerInputContainer>
        <InputLabel>소유자 이름</InputLabel>
        <Input type="text"></Input>
      </CardOwnerInputContainer>
    </div>
  );
}

export default CardOwnerInput;
