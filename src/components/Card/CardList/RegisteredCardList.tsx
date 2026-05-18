import styled from '@emotion/styled';
import RegisteredCardItem from './RegisteredCardItem';
import { CardListResponse } from '../../../apis/cards';

interface Props {
  data: CardListResponse;
  onDelete: (id: string) => void;
  onClick: () => void;
}

export default function RegisteredCardList({ data, onDelete, onClick }: Props) {
  return (
    <Container>
      {data.map((card) => (
        <RegisteredCardItem key={card.id} data={card} onDelete={onDelete} />
      ))}

      <RegisterButton onClick={onClick}>+ 카드 추가</RegisterButton>
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RegisterButton = styled.button`
  width: 320px;
  height: 44px;
  border: 1px dashed #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  font-size: 13px;
  font-weight: 500;
  color: #8c8c8c;
`;
