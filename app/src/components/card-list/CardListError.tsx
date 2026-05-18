import styled from '@emotion/styled';
import ErrorIcon from '../../assets/Error.svg';

export function CardListError({ onRetry }: { onRetry: () => void }) {
  return (
    <Container>
      <ErrorBox>
        <img src={ErrorIcon} alt="에러 아이콘" />
        <p className="error-title">카드 목록을 불러올 수 없어요</p>
        <p className="error-description">잠시 후 다시 시도해 주세요.</p>
      </ErrorBox>
      <RetryButton onClick={onRetry}>다시 시도</RetryButton>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding-top: 6.25rem;

  p {
    margin: 0;
    line-height: 1;
  }

  .error-title {
    font-weight: 700;
    font-size: 20px;
  }

  .error-description {
    font-weight: 400;
    font-size: 12px;
    color: #8c8c8c;
  }
`;

const RetryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  border: none;
  border-radius: 5px;
  background-color: #333333;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;
