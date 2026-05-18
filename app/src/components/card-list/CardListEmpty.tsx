import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export function CardListEmpty() {
  const navigate = useNavigate();

  return (
    <Container>
      <EmptyCardBox>
        <div className="empty-card" />
        <p className="empty-title">등록된 카드가 없습니다</p>
        <p className="empty-description">아래 버튼을 눌러 첫 카드를 등록해보세요</p>
      </EmptyCardBox>
      <AddCardButton onClick={() => navigate('/react-payments/add')}>카드 추가하기</AddCardButton>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EmptyCardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding-top: 6.25rem;

  .empty-card {
    width: 160px;
    height: 100px;
    border-radius: 5px;
    border: 1px dashed #d9d9d9;
    background-color: #f5f5f5;
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    line-height: 1;
  }

  .empty-title {
    font-weight: 700;
    font-size: 20px;
  }

  .empty-description {
    font-weight: 400;
    font-size: 12px;
    color: #8c8c8c;
  }
`;

const AddCardButton = styled.button`
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
