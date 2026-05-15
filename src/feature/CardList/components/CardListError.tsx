import styled from 'styled-components';

import Button from '@/common/components/Button/Button';

type CardListErrorProps = {
  message: string;
  onRetry: () => void;
};

const CardListError = ({message, onRetry}: CardListErrorProps) => {
  return (
    <Container>
      <ErrorIcon aria-hidden='true'>!</ErrorIcon>
      <Message>{message}</Message>
      <Description>잠시 후 다시 시도해 주세요.</Description>
      <RetryButton onClick={onRetry}>다시 시도</RetryButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
`;

const ErrorIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background-color: #333333;
  color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  font-size: 36px;
  font-weight: 700;
`;

const Message = styled.p`
  margin-top: 24px;
  color: #353c49;
  font-size: 18px;
  font-weight: 700;
`;

const Description = styled.p`
  margin-top: 8px;
  color: #8c8c8c;
  font-size: 12px;
`;

const RetryButton = styled(Button).attrs({variant: 'primary'})`
  width: 100%;
  height: 44px;
  margin-top: 32px;
`;

export default CardListError;
