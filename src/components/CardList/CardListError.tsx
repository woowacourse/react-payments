import styled from '@emotion/styled';
import PrimaryButton from '../Common/Button/PrimaryButton';

interface CardListErrorProps {
  onRetry: () => void;
}

export default function CardListError({ onRetry }: CardListErrorProps) {
  return (
    <Container>
      <ErrorIcon>!</ErrorIcon>
      <Title>카드 목록을 불러올 수 없어요</Title>
      <Caption>잠시 후 다시 시도해 주세요.</Caption>
      <PrimaryButton onClick={onRetry}>다시 시도</PrimaryButton>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  justify-content: center;
`;

const ErrorIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #333333;
  border: 1px solid #d9d9d9;
  color: #ffffff;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 32px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
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
