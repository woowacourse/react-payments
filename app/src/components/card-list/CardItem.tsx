import styled from '@emotion/styled';

export function CardItem() {
  return (
    <Container>
      <CardContainer>
        <div className="colored-card" />
        <div className="card-info-container">
          <p className="card-name">BC카드</p>
          <p className="card-number">5511 **** **** 9012</p>
          <p className="card-expiration-date">유효기간 12/28</p>
        </div>
        <button>✕</button>
      </CardContainer>
      <AddCardButton>+ 카드 추가</AddCardButton>
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

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0.75rem 0.75rem 0.75rem 0.75rem;

  .colored-card {
    background-color: #db4d4d;
    width: 64px;
    height: 40px;
    border-radius: 4px;
    border: none;
  }

  .card-info-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.25rem;
    box-sizing: border-box;
    padding: 0.75rem 0 0.75rem 0.75rem;
  }

  p {
    margin: 0;
    line-height: 1;
  }

  .card-name {
    font-weight: 700;
    font-size: 14px;
  }

  .card-number {
    font-weight: 400;
    font-size: 11px;
  }

  .card-expiration-date {
    font-weight: 400;
    font-size: 9.5px;
  }

  button {
    cursor: pointer;
    width: 14px;
    height: 19px;
    font-weight: 400;
    font-size: 16px;
    border: none;
    background: none;
    padding: 0;
    color: #8c8c8c;
  }
`;

const AddCardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 1px dashed #e6e6e6;
  border-radius: 5px;
  font-weight: 500;
  font-size: 13px;
  color: #8c8c8c;
  cursor: pointer;
  background: none;
`;
