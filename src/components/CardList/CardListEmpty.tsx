import styled from '@emotion/styled';
import PrimaryButton from '../Common/Button/PrimaryButton';

interface CardListEmptyProps {
  onAddCard: () => void;
}

export default function CardListEmpty({ onAddCard }: CardListEmptyProps) {
  return (
    <Container>
      <GhostCard />
      <Title>등록된 카드가 없습니다</Title>
      <Caption>아래 버튼을 눌러 첫 카드를 등록해보세요</Caption>
      <PrimaryButton onClick={onAddCard}>카드 추가하기</PrimaryButton>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const GhostCard = styled.div`
  width: 160px;
  height: 100px;
  background: #f5f5f5;
  border: 1px dashed #d9d9d9;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #353c49;
  margin: 0;
`;

const Caption = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  color: #8c8c8c;
  margin: 0;
`;
