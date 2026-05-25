import styled from "@emotion/styled";

interface Props {
  onRetry: () => void;
}

const ErrorWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const ErrorIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const ErrorDescription = styled.p`
  font-size: 12px;
  color: #8c8c8c;
  margin: 0;
`;

const RetryButton = styled.button`
  margin-top: 8px;
  width: 100%;
  height: 52px;
  background: #333;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function CardFetchError({ onRetry }: Props) {
  return (
    <ErrorWrapper>
      <ErrorIcon>!</ErrorIcon>
      <ErrorTitle>카드 목록을 불러올 수 없습니다.</ErrorTitle>
      <ErrorDescription>잠시 후 다시 시도해 주세요.</ErrorDescription>
      <RetryButton onClick={onRetry}>다시 시도</RetryButton>
    </ErrorWrapper>
  );
}
